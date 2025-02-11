import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DownPointer from "../../assets/svg-icon/see more.svg";
import { twMerge } from "tailwind-merge";
import MessageDateSeperator from "./MessageDateSeperator";
import { chatMessageT } from "../../interfaces/webrtc.type";
import ChatBottomMessage from "./ChatBottomMessage";

type MessageListProps = {
  chatMessages: chatMessageT[];
  connectionClosed: boolean;
};

export default function MessageList({
  chatMessages,
  connectionClosed,
}: MessageListProps) {
  const messageListContainer = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const handleScroll = () => {
    if (messageListContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messageListContainer.current;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 50); // Use a small tolerance(height of message with 1 line)
    }
  };

  const scrollToBottom = () => {
    if (messageListContainer.current) {
      messageListContainer.current.scrollTop =
        messageListContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    const container = messageListContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [chatMessages]);

  return (
    <div
      ref={messageListContainer}
      className="flex flex-col p-3 overflow-scroll overflow-x-hidden scroll-smooth flex-1 border-b"
    >
      <MessageDateSeperator date={new Date().toISOString()} />
      {chatMessages.map((mssg, idx) => (
        <div key={`${idx}_${mssg.createdAt}`} className="flex flex-col py-2 ">
          {mssg.type === "text" && (
            <p
              className={twMerge(
                " text-sm font-normal rounded-xl px-[10px] py-2 whitespace-pre-wrap overflow-wrap-anywhere max-w-[80%] w-fit",
                mssg.direction === "outgoing"
                  ? "ml-auto rounded-br-[2px] bg-primary"
                  : "mr-auto rounded-bl-[2px] text-primary-title bg-[rgba(250,250,250,0.06)]"
              )}
            >
              {mssg.value}
            </p>
          )}

          {mssg.type === "gif" && (
            <Image
              src={mssg.value}
              alt="gif"
              height={150}
              width={150}
              className={twMerge(
                "rounded-xl max-w-[80%] max-h-[280px]",
                mssg.direction === "outgoing" ? "ml-auto" : "mr-auto"
              )}
            />
          )}

          <time
            className={twMerge(
              "text-secondry-gray font-normal text-[10px] mt-[2px]",
              mssg.direction === "outgoing" ? "ml-auto" : "mr-auto"
            )}
          >
            {new Date(mssg.createdAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
      ))}
      {connectionClosed && (
        <ChatBottomMessage
          showTime={true}
          message="Chat has been closed by the user."
        />
      )}

      {!isAtBottom && (
        <button
          onClick={() => {
            scrollToBottom();
            // logEvent("chat_scroll_bottom");
          }}
          className={twMerge(
            "absolute bottom-48  right-6 opacity-70 hover:opacity-100 transition hover:scale-105 bg-slate-800 p-2 rounded-full",
            connectionClosed && "bottom-32"
          )}
        >
          <Image src={DownPointer} alt="down-pointer" height={26} width={26} />
        </button>
      )}
    </div>
  );
}
