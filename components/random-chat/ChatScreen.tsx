import ChatScreenHeader from "./ChatScreenHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import {
  chatMessageT,
  sendMessageT,
  userInfoT,
} from "../../interfaces/webrtc.type";
import GifModal from "../Modals/GifModal";
import useRandomChatContext from "../../hooks/useRandomChatContext";
import { IGif } from "@giphy/js-types";
import ChatImagePreview from "../Modals/ChatImagePreview";

type ChatScreenProps = {
  remoteUserInfo?: userInfoT;
  sendMessage: (message: sendMessageT) => void;
  handleCloseChat: (type: "close" | "reconnect") => void;
  chatMessages: chatMessageT[];
  connectionClosed: boolean;
  notifyTyping: (isTyping: boolean) => void;
  isTyping: boolean;
  handleGifClick: (
    gif: IGif,
    ev: React.SyntheticEvent<HTMLElement, Event>
  ) => void;
};
export default function ChatScreen({
  remoteUserInfo,
  sendMessage,
  handleCloseChat,
  chatMessages,
  connectionClosed,
  notifyTyping,
  isTyping,
  handleGifClick,
}: ChatScreenProps) {
  const {
    closeGifModal,
    showGif,
    openImagePreview,
    openImagePreviewModal,
    closeImagePreviewModal,
    selectedImage,
  } = useRandomChatContext();

  // useEffect(() => {
  //   logEvent("chat_session_start");

  //   return () => {
  //     logEvent("chat_session_end");
  //   };
  // }, []);
  return (
    <main className="flex flex-col h-[100svh]">
      <ChatScreenHeader userInfo={remoteUserInfo} isTyping={isTyping} />
      <MessageList
        chatMessages={chatMessages}
        connectionClosed={connectionClosed}
      />

      <MessageInput
        sendMessage={sendMessage}
        handleCloseChat={handleCloseChat}
        connectionClosed={connectionClosed}
        notifyTyping={notifyTyping}
      />
      {/*_________________________MODALS_____________________________*/}
      <GifModal
        isOpen={showGif}
        closeModal={closeGifModal}
        handleGifClick={handleGifClick}
      />
      <ChatImagePreview
        closeModal={closeImagePreviewModal}
        isOpen={openImagePreview}
        imageUrl={selectedImage}
        remoteUserInfo={remoteUserInfo}
        sendMessage={sendMessage}
      />
    </main>
  );
}
