"use client";

import Lottie from "lottie-react";
import SearchUser from "../../assets/lottie/search-new-lottie.json";

type Props = {};

export default function SearchingUserLottie({}: Props) {
  return (
    <div className="h-[170px] sm:h-[200px] w-[170px] sm:w-[200px]">
      <Lottie animationData={SearchUser} />
    </div>
  );
}
