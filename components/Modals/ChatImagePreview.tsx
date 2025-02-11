import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import SendActive from "../../assets/svg-icon/message_send_color.svg";
import ModalCloseButton from "./modalCloseButton";
import { sendMessageT, userInfoT } from "../../interfaces/webrtc.type";
import DefaultDp from "../../assets/images/placeholder.svg";
import SimpleBar from "simplebar-react";
import { twMerge } from "tailwind-merge";
type ChatImagePreviewProps = {
  remoteUserInfo: userInfoT;
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string;
  sendMessage: (message: sendMessageT) => void;
};

export default function ChatImagePreview({
  remoteUserInfo,
  isOpen,
  closeModal,
  imageUrl,
  sendMessage,
}: ChatImagePreviewProps) {
  const [text, setText] = useState("");
  const [inputFocus, setInputFocus] = useState(true);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.style.height = "auto";
      messageInputRef.current.style.height = `${messageInputRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleFormSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    //add check for image file it is compulsory in this
    sendMessage({ type: "image", data: text, imageUrl: imageUrl });
    setText("");
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 500) {
      return;
    }
    setText(value);
    // notifyTyping(true);

    // clearTimeout(typingTimeoutRef.current);

    // typingTimeoutRef.current = setTimeout(() => {
    //   notifyTyping(false);
    // }, Typing_Delay);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image preview"
      overlayClassName={`fixed inset-0 bg-black z-10 flex items-center justify-center`}
      className={"h-full w-full  flex flex-col"}
      ariaHideApp={false}
    >
      <header className="px-3 py-[6px] flex gap-x-2 items-center ">
        <ModalCloseButton onClick={closeModal} className="h-[28px] w-[28px]" />
        <div className="flex gap-x-2 items-center justify-center">
          <img
            src={remoteUserInfo?.userProfileImage || DefaultDp?.src}
            alt="profile-img"
            height={32}
            width={32}
            className="rounded-full object-cover"
          />

          <p className="text-sm font-semibold">{remoteUserInfo?.userName}</p>
        </div>
      </header>

      <div className="max-h-[600px] overflow-hidden flex-1 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt="img"
          height={300}
          width={300}
          className=" object-cover w-auto"
        />
      </div>

      <footer className="mt-auto mb-8">
        <SimpleBar forceVisible="y" className=" max-h-[300px] ">
          <form
            className="flex gap-x-3 px-[10px] py-2"
            onSubmit={handleFormSubmit}
          >
            <div
              className={twMerge(
                "flex-1 px-3 bg-[rgba(136,136,136,0.08)] rounded-[32px] flex items-center border-[rgba(230,230,230,0.5)] border-[1px]",
                inputFocus && "bg-transparent border-[1px] border-primary"
              )}
            >
              <textarea
                ref={messageInputRef}
                autoComplete="off"
                id="message-input"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={text}
                rows={1}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                placeholder="Enter a message"
                className="py-[14px] min-h-[56px]  flex items-center bg-transparent w-full h-full text-lg outline-none caret-primary resize-none"
              />
            </div>

            <div className="self-end h-[56px] flex items-center justify-center">
              <button
                type="submit"
                className=" w-[48px] h-[48px] rounded-full bg-primary flex items-center justify-center"
              >
                <Image src={SendActive} alt="send" className="ml-1 " />
              </button>
            </div>
          </form>
        </SimpleBar>
      </footer>
    </ReactModal>
  );
}
