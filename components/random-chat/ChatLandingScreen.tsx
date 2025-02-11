import Image from "next/image";
import Banner from "./Banner";
import SearchIcon from "../../assets/svg-icon/new-chat-search.svg";

import { twMerge } from "tailwind-merge";
import InterestSelector from "./InterestSelector";
import Link from "next/link";
type ChatLandingScreenProps = {
  handleStartChat: () => void;
  searching: {
    searching: boolean;
    tries: number;
  };
  stopSearching: () => void;
};

export default function ChatLandingScreen({
  handleStartChat,
  searching,
  stopSearching,
}: ChatLandingScreenProps) {
  return (
    <>
      <h2 className="px-4 py-6 border-b text-2xl font-semibold flex gap-x-2 items-center">
        Cozmo Chat
      </h2>
      <main className="flex flex-col items-center w-full">
        <Banner className="mt-4" searching={searching} />

        <div className="text-center mt-4 sm:mt-6">
          <h3 className="text-[24px] sm:text-[28px] font-bold px-2">
            Chat with someone anonymously
          </h3>
          {/* <p className="text-secondry-gray font-normal text-sm">
            Anonymous, secure, fun
          </p> */}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col items-center w-[80%] sm:w-[60%]">
          <InterestSelector searching={searching} />
        </div>

        <button
          className={twMerge(
            "mt-7 sm:mt-9 h-[50px] w-[260px]  text-base font-semibold flex items-center justify-center gap-x-2 rounded-2xl  bg-primary leading-none transition ",
            searching.searching && "bg-[#EA2E4B]"
          )}
          // disabled={searching.searching}
          onClick={searching.searching ? stopSearching : handleStartChat}
        >
          {!searching.searching && (
            <Image src={SearchIcon} alt="search" height={20} width={20} />
          )}

          {searching.searching ? (
            <span className="-mb-[3px]">Stop Searching...</span>
          ) : (
            <span className="-mb-[3px]">Start Chat</span>
          )}
        </button>

        <small className="text-gray font-medium text-[11px] mt-4 text-center">
          By continuing, you agree with our
          <br />
          <Link
            href={"https://hood.live/quickchat-terms-condition.html"}
            // target="_blank"
            className="text-white underline hover:text-primary "
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            href={"https://hood.live/quickchat-privacy-policy.html"}
            // target="_blank"
            className="text-white underline hover:text-primary "
          >
            Privacy Policy
          </Link>
        </small>
      </main>
    </>
  );
}
