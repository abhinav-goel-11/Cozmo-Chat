import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GIF from "../../assets/svg-icon/chat-gif-icon.svg";
import Gallery from "../../assets/svg-icon/chat-gallery-icon.svg";
import SendActive from "../../assets/svg-icon/message_send_color.svg";
import { twMerge } from "tailwind-merge";
import SimpleBar from "simplebar-react";
import CloseChat from "../svg-icons/CloseChat";
import NewChat from "../svg-icons/NewChat";
import { Typing_Delay } from "../../constants/randomChat.constants";
import useRandomChatContext from "../../hooks/useRandomChatContext";
import { sendMessageT } from "../../interfaces/webrtc.type";

type MessageInputProps = {
  sendMessage: (message: sendMessageT) => void;
  handleCloseChat: (type: "close" | "reconnect") => void;
  connectionClosed: boolean;
  notifyTyping: (isTyping: boolean) => void;
};

export default function MessageInput({
  sendMessage,
  handleCloseChat,
  connectionClosed,
  notifyTyping,
}: MessageInputProps) {
  const [text, setText] = useState("");
  const [inputFocus, setInputFocus] = useState(true);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const { gifIconClick, handleImageSelect } =
    useRandomChatContext();
  const handleFormSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (!isSendEnabled) return;
    sendMessage({ type: "text", data: text });
    setText("");

    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 500) {
      return;
    }
    setText(value);
    notifyTyping(true);

    clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      notifyTyping(false);
    }, Typing_Delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleFormSubmit(e);
    }
  };

  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.style.height = "auto";
      messageInputRef.current.style.height = `${messageInputRef.current.scrollHeight}px`;
    }
  }, [text]);

  const isSendEnabled = !!text.trim().length;
  return (
    <div className="mt-auto flex flex-col p-3 pb-6 gap-y-4">
      {!connectionClosed && (
        <SimpleBar forceVisible="y" className=" max-h-[300px] ">
          <form className="flex gap-x-3 " onSubmit={handleFormSubmit}>
            <div
              className={twMerge(
                "flex-1 px-3 bg-[rgba(136,136,136,0.08)] rounded-[32px] flex items-center",
                inputFocus && "bg-transparent border-[1px] border-primary"
              )}
            >
              <textarea
                ref={messageInputRef}
                autoFocus
                autoComplete="off"
                id="message-input"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={text}
                rows={1}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                // onKeyDown={handleKeyDown}
                placeholder="Enter a message"
                className="py-[14px] min-h-[56px]  flex items-center bg-transparent w-full h-full text-lg outline-none caret-primary resize-none"
              />
              {!isSendEnabled && (
                <div className="ml-auto flex gap-x-2 items-center">
                  {/* <label htmlFor="media-input">
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg, image/heif, image/heic, image/jpg"
                      id="media-input"
                      name="media-input"
                      className="hidden"
                      onChange={handleImageSelect}
                    />
                    <Image
                      src={Gallery}
                      alt="gallery"
                      height={32}
                      width={32}
                      className="cursor-pointer"
                    />
                  </label> */}

                  <Image
                    src={GIF}
                    alt="gif"
                    height={32}
                    width={32}
                    className="cursor-pointer"
                    onClick={gifIconClick}
                  />
                </div>
              )}
            </div>

            {isSendEnabled && (
              <div className="self-end h-[56px] flex items-center justify-center">
                <button
                  type="submit"
                  className=" w-[48px] h-[48px] rounded-full bg-primary flex items-center justify-center"
                >
                  <Image src={SendActive} alt="send" className="ml-1 " />
                </button>
              </div>
            )}
          </form>
        </SimpleBar>
      )}

      <div className="flex justify-between items-center gap-x-5 sm:gap-x-8">
        <button
          name="close-chat"
          className="h-[52px] text-primary font-normal text-base flex items-center justify-center gap-x-2 rounded-full bg-[rgba(213,102,63,0.08)] hover:bg-primary flex-1 transition chat-button active:scale-95"
          onClick={() => handleCloseChat("close")}
        >
          <CloseChat />
          Close chat
        </button>
        <button
          name="new-chat"
          className={twMerge(
            "h-[52px] text-primary font-normal text-base flex items-center justify-center gap-x-2 rounded-full bg-[rgba(213,102,63,0.08)] hover:bg-primary flex-1 transition chat-button active:scale-95",
            connectionClosed && "bg-primary conn-closed"
          )}
          onClick={() => handleCloseChat("reconnect")}
        >
          <NewChat />
          New chat
        </button>
      </div>
    </div>
  );
}
