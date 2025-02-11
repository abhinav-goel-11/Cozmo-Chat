import Image from "next/image";
import ChatIcons from "../../assets/svg-icon/chat 3.svg";
import { twMerge } from "tailwind-merge";
import SearchingUserLottie from "../Lotties/SearchingUserLottie";

type BannerProps = {
  className: string;
  searching: {
    searching: boolean;
    tries: number;
  };
};
export default function Banner({ className, searching }: BannerProps) {
  return (
    <div className={twMerge("", className)}>
      {!searching.searching && (
        <Image
          src={ChatIcons}
          alt="chatt"
          height={200}
          width={200}
          className="h-[170px] sm:h-[200px] w-[170px] sm:w-[200px] "
        />
      )}

      {searching.searching && <SearchingUserLottie />}
    </div>
  );
}
