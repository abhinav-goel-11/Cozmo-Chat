import React, { useState, useRef, useEffect } from "react";
import Peer, { DataConnection, PeerError } from "peerjs";
import ChatLandingScreen from "./ChatLandingScreen";
import ChatScreen from "./ChatScreen";
import {
  chatMessageT,
  receiveDataT,
  sendMessageT,
  userInfoT,
} from "../../interfaces/webrtc.type";
import BouncingDotsLoader from "../Loaders/BouncingDotsLoader";
import {
  connectPeerId,
  connectUser,
  deletePeerId,
} from "../../pages/api/webrtcChat";
import { toast } from "react-toastify";
import Utils from "../../utils/Utils";
import { useRouter } from "next/router";
import { IGif } from "@giphy/js-types";
import useRandomChatContext from "../../hooks/useRandomChatContext";

const QuickChat = () => {
  const peerIdRef = useRef<string>(null);
  const conn2 = useRef<DataConnection | null>(null);
  const [peerIdGenerated, setPeerIdGenerated] = useState(false);
  const [dataChannelConnected, setDataChannelConnected] = useState(false);
  const [searching, setSearching] = useState({ searching: false, tries: 0 });
  const [connectionClosed, setConnectionClosed] = useState(false);
  const [remoteUserInfo, setRemoteUserInfo] = useState<userInfoT | null>(null);
  const [localUserInfo, setLocalUserInfo] = useState<userInfoT | null>(null);
  const [chatMessages, setChatMessages] = useState<chatMessageT[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const peer = useRef<Peer | null>(null);
  const [deviceId, setDeviceId] = useState("");
  const router = useRouter();

  const { closeGifModal } = useRandomChatContext();

  useEffect(() => {
    if (router.isReady) {
      const deviceId = router.query.deviceId as string;
      setDeviceId(deviceId);
    }
  }, [router.isReady]);

  // useEffect(() => {
  //   if (!localUserInfo && !deviceId) return;
  //   setUserProperties({
  //     deviceId,
  //     ...localUserInfo,
  //   });

  //   setUserId(deviceId);
  // }, [deviceId, setUserProperties, setUserId]);

  useEffect(() => {
    // Initialize PeerJS
    peer.current = new Peer();
    // Set peer ID on open
    peer.current.on("open", async (id) => {
      // setPeerId(id);
      peerIdRef.current = id;
      setPeerIdGenerated(true);
      console.log("😃😃😃 My peer id is ==>", id);
    });

    // Handle incoming connection
    peer.current.on("connection", (connection) => {
      const remoteUser = connection.metadata;
      console.log("connection accepted by ===> ", remoteUser);
      if (remoteUser) {
        setRemoteUserInfo({
          userName: remoteUser.userName,
          userProfileImage: remoteUser.userProfileImage,
        });
      }
      conn2.current = connection;
      setupConnection(connection);
    });

    peer.current.on("disconnected", handlePeerDisconnection);
    peer.current.on("error", handlePeerError);
    // logEvent("CHAT_APP_START");
    generateuserInfo();

    window.addEventListener("beforeunload", unloadCb);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("beforeunload", unloadCb);
      removePeerId(peerIdRef.current);
      setPeerIdGenerated(false);
      // logEvent("CHAT_APP_CLOSE");
      peer.current.destroy();
    };
  }, []);

  const generateuserInfo = async () => {
    const userProfileImage = await Utils.getRandomDpUrl();
    const userName = await Utils.getRandomName();
    setLocalUserInfo({ userName, userProfileImage });
  };

  const unloadCb = async () => {
    // logEvent("CHAT_APP_CLOSE");
    await removePeerId(peerIdRef.current);
  };

  const handlePeerDisconnection = (peerId: string) => {
    console.log("😈😈😈 Peer Disconnection error ===>", peerId);
    if (peer.current) {
      peer?.current?.reconnect();
    }
    removePeerId(peerId);
  };

  const handlePeerError = async (
    ev: PeerError<
      | "disconnected"
      | "browser-incompatible"
      | "invalid-id"
      | "invalid-key"
      | "network"
      | "peer-unavailable"
      | "ssl-unavailable"
      | "server-error"
      | "socket-error"
      | "socket-closed"
      | "unavailable-id"
      | "webrtc"
    >
  ) => {
    if (!peer.current) return;
    console.log(
      "😈😈😈 Peer Error name ==>",
      ev.name,
      " type ",
      ev.type,
      " message ",
      ev.message,
      " cause ",
      ev.cause
    );

    switch (ev.type) {
      // case "network":
      case "disconnected":
        //when disconnected from internet, peerjs server
        if (peer.current) {
          peer?.current?.reconnect();
        }
        break;
      case "peer-unavailable":
        //delete the unavailable peer from set, then search again
        const unvalidPeerId = ev.message.split(" ").slice(-1).toString();
        await removePeerId(unvalidPeerId);
        handleStartChat();

      case "network":
        if (ev.message === "Lost connection to server.") {
          // setPeerIdGenerated(false);
          // toast.error("Lost connection");
          break;
        }

      default:
        break;
    }
  };

  const setupConnection = (connection: DataConnection) => {
    connection.on("open", handleConnectionOpen);
    connection.on("data", handleReceiveMessage);
    connection.on("close", handleConnectionClosed);
    connection.on("error", handleConnectionError);
    connection.on("iceStateChanged", handleConnectionIceState);
  };

  // connection events cb
  // **********************************************************************
  // **********************************************************************

  const handleReceiveMessage = (data: receiveDataT) => {
    const messageType = data.type;
    if (messageType !== "typing") {
      // logEvent("chat_receive", { type: messageType });
    }

    if (messageType === "typing") {
      setIsTyping(data.isTyping);
    } else if (messageType === "gif") {
      const messageData = data;
      setChatMessages((prev) => [
        ...prev,
        {
          type: "gif",
          direction: "incoming",
          value: messageData?.gifUrl,
          createdAt: messageData?.createdAt,
        },
      ]);
    } else if (messageType === "text") {
      const messageData = data;
      setChatMessages((prev) => [
        ...prev,
        {
          type: "text",
          direction: "incoming",
          value: messageData?.message,
          createdAt: messageData?.createdAt,
        },
      ]);
    }
  };
  const handleConnectionIceState = async (state: RTCIceConnectionState) => {
    console.log("Connection IceState => ", state);
    switch (state) {
      case "checking":
        // logEvent("chat_user_connecting");
        break;
      case "disconnected":
      case "failed":
        // dataChannels is disconnected then => delete peerId, close conn, reset state
        // logEvent("chat_user_disconnected");
        await removePeerId(peerIdRef.current);
        resetStates();

        if (conn2.current) {
          conn2.current.close();
          // setConn(null);
          conn2.current = null;

          toast.error("Disconnected due to Network Problem");
        } else {
          toast.error("No One available, Try again!");
        }
        break;

      default:
        break;
    }
  };

  const handleConnectionOpen = async () => {
    // setDataChannelConnected to true and remove peerIds from available users set
    console.log("datachannel is open ✅✅✅");
    // setSearching((prev) => ({ ...prev, searching: false }));
    // logEvent("chat_session_start");
    setDataChannelConnected(true);
    console.log("Dleteing local-peer : ", peerIdRef.current);
    try {
      await removePeerId(peerIdRef.current);
    } catch (err) {
      console.log("Error in handleConnectionOpen while deleting peerIds", err);
    }
  };

  const handleConnectionClosed = async () => {
    // if (conn2.current.peerConnection.iceConnectionState === "disconnected") {
    //   return;
    // }
    console.log("peer has closed the connection 🔒🔒🔒", conn2.current);
    if (conn2.current) {
      conn2.current.close();
      // setConn(null);
      conn2.current = null;
      setConnectionClosed(true);
    }
    //remove chat input and show user has left, focus on new chat, also close gif modal if open
    // logEvent("chat_session_end");
    closeGifModal();
  };

  const handleConnectionError = (
    error: PeerError<
      | "not-open-yet"
      | "message-too-big"
      | "negotiation-failed"
      | "connection-closed"
    >
  ) => {
    console.log("Error in Connection occured ❌❌❌", error);
    // logEvent("chat_session_error");
    handleCloseChat("close");
  };

  // **********************************************************************
  // **********************************************************************

  const handleStartChat = async () => {
    // logEvent("CHAT_START_SEARCH");
    setConnectionClosed(false);
    setSearching((prev) => ({ searching: true, tries: prev.tries + 1 }));
    try {
      const peerId = peerIdRef.current;
      const payload = {
        peerId,
        deviceId,
        ...localUserInfo,
      };
      // const res = await connectPeerId(peerId);
      const res2 = await connectUser(payload);

      const potentialPeerId = res2?.data?.targetPeerId;
      await connectToRandomPeer(potentialPeerId);
      if (res2.data) {
        setRemoteUserInfo({
          userName: res2.data.userName,
          userProfileImage: res2.data.userProfileImage,
        });
      }
    } catch (err) {
      console.log("Error in handleStart Chat ====> ", err);
    }
  };

  // const findRandomUser = async (peerId: string) => {
  //   try {
  //     //add the myPeer id to server
  //     const response = await getRandomPeerId(peerId);
  //     const targetPeerId = response?.data?.targetPeerId;
  //     console.log("Random peer id===> ", targetPeerId, response);
  //     // setConnectedPeerId(targetPeerId);
  //     return targetPeerId;
  //   } catch (err) {
  //     console.log("Error in adding peerid ===>", err);
  //   }
  // };

  const connectToRandomPeer = async (peerId: string) => {
    try {
      const connection = peer.current.connect(peerId, {
        label: "quickchat",
        metadata: {
          userName: localUserInfo.userName,
          userProfileImage: localUserInfo?.userProfileImage,
        },
      });
      conn2.current = connection;
      setupConnection(connection);
      // setConn(connection);
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  const removePeerId = async (peerId: string) => {
    try {
      if (!peerId) {
        console.log("🚨🚨🚨 PeerId not available : ", peerId);
        return;
      }
      const res = await deletePeerId(peerId);
      console.log("Delete peer id response ===>", res);
    } catch (err) {
      console.log("Error in deleteing peerId", err);
    }
  };

  const notifyTyping = (isTyping: boolean) => {
    const message = {
      type: "typing",
      isTyping: isTyping,
    };
    if (conn2.current) {
      conn2.current.send(message);
    }
  };

  const handleGifClick = (
    gif: IGif,
    ev: React.SyntheticEvent<HTMLElement, Event>
  ) => {
    ev.preventDefault();
    // console.log("Gif clicked ==> ", gif.type, gif.images);
    const gifUrl = gif.images.downsized.url;
    handleSendMessage({ type: "gif", data: gifUrl });
    closeGifModal();
  };

  const handleSendMessage = (message: sendMessageT) => {
    const messageType = message.type;

    // logEvent("chat_send", { type: messageType });
    switch (messageType) {
      case "text":
        const value = message.data;
        const trimmedText = value.trim();

        if (trimmedText !== "" && conn2.current) {
          const messageData = {
            type: "text",
            message: trimmedText,
            createdAt: new Date().toISOString(),
          };
          conn2.current.send(messageData);
          setChatMessages((prev) => [
            ...prev,
            {
              direction: "outgoing",
              type: "text",
              value: messageData?.message,
              createdAt: messageData?.createdAt,
            },
          ]);
        }
        break;

      case "gif":
        const gifUrl = message.data;
        const payload = {
          type: "gif",
          gifUrl,
          createdAt: new Date().toISOString(),
        };
        if (conn2.current) {
          conn2.current.send(payload);
        }
        setChatMessages((prev) => [
          ...prev,
          {
            direction: "outgoing",
            type: "gif",
            value: payload?.gifUrl,
            createdAt: payload?.createdAt,
          },
        ]);
        break;

      default:
        break;
    }
  };

  const stopSearching = async () => {
    // set searching to false, delete peerId from set
    setSearching((prev) => ({ ...prev, searching: false }));
    removePeerId(peerIdRef.current);
    if (conn2.current) {
      conn2.current.close();
      // setConn(null);
      conn2.current = null;
    }
    // logEvent("CHAT_STOP_SEARCH");
  };

  const handleCloseChat = async (type: "close" | "reconnect") => {
    if (conn2.current) {
      conn2.current.close();
      // setConn(null);
      conn2.current = null;
    }
    if (type === "close") {
      // logEvent("chat_click_closechat");
    }
    resetStates();
    if (type === "reconnect") {
      // logEvent("chat_click_newchat");
      handleStartChat();
    }
  };

  const resetStates = () => {
    // logEvent("chat_session_end");
    setChatMessages([]);
    setDataChannelConnected(false);
    setConnectionClosed(false);
    setIsTyping(false);
    closeGifModal();
    setRemoteUserInfo(null);
    setSearching((prev) => ({ ...prev, searching: false }));
  };
  return (
    <div className="min-h-[100svh] border-side relative">
      {!dataChannelConnected && (
        <ChatLandingScreen
          handleStartChat={handleStartChat}
          searching={searching}
          stopSearching={stopSearching}
        />
      )}
      {dataChannelConnected && (
        <ChatScreen
          remoteUserInfo={remoteUserInfo}
          chatMessages={chatMessages}
          handleCloseChat={handleCloseChat}
          sendMessage={handleSendMessage}
          connectionClosed={connectionClosed}
          notifyTyping={notifyTyping}
          isTyping={isTyping}
          handleGifClick={handleGifClick}
        />
      )}
      {!peerIdGenerated && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
          <BouncingDotsLoader />
        </div>
      )}
    </div>
  );
};
export default QuickChat;
