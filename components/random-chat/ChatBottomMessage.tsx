import React from "react";

type ChatBottomMessageProps = {
  showTime?: boolean;
  message: string;
};

export default function ChatBottomMessage({
  showTime,
  message,
}: ChatBottomMessageProps) {
  return (
    <div className="flex flex-col mt-auto items-center justify-center px-3 py-2 gap-y-3 text-secondry-gray">
      {showTime && (
        <p className=" text-xs font-medium">
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}

      <p className="text-sm font-normal">{message}</p>
    </div>
  );
}
