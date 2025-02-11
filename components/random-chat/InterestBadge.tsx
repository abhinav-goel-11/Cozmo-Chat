import { twMerge } from "tailwind-merge";
import { interestT } from "../../interfaces/webrtc.type";
import { useEffect, useState } from "react";
import {
  FAKE_USER_MAX,
  FAKE_USER_MIN,
} from "../../constants/randomChat.constants";

type InterestBadgeT = {
  interest: interestT;
  onClick: (interest: interestT) => void;
  isSelected: boolean;
  searching: {
    searching: boolean;
    tries: number;
  };
};

const getRandomUserCount = () =>
  Math.floor(Math.random() * (FAKE_USER_MAX - FAKE_USER_MIN + 1)) +
  FAKE_USER_MIN;

export default function InterestBadge({
  interest,
  onClick,
  isSelected,
  searching,
}: InterestBadgeT) {
  const [onlineUserCount, setOnlineUserCount] = useState<number | null>(null);

  useEffect(() => {
    setOnlineUserCount(getRandomUserCount());
  }, []);
  return (
    <button
      className={twMerge(
        " px-3 h-[50px]  bg-black/10 rounded-2xl  border-[0.8px] border-solid disabled:opacity-50 border-[rgba(136,136,136,0.16)]",
        isSelected && "border-1 border-primary bg-[rgba(213,102,63,0.08)] "
      )}
      disabled={searching.searching && isSelected === false}
      onClick={() => {
        if (searching.searching) return;
        onClick(interest);
      }}
    >
      <section
        className={twMerge(
          "text-[13px] font-medium flex items-center gap-x-1",
          isSelected && "text-primary"
        )}
      >
        <span>{interest?.icon}</span>
        <span>{interest?.text}</span>
      </section>
      <section className="flex items-center justify-center gap-x-1">
        <span className="h-[6px] w-[6px] bg-online-green rounded-full"></span>
        <span className="text-[10px] text-gray font-normal -mb-[2px]">
          {onlineUserCount !== null ? `${onlineUserCount} users` : "Loading..."}
        </span>
      </section>
    </button>
  );
}
