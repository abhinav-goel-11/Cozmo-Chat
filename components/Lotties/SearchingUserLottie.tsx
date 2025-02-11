const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable server-side rendering
});
import SearchUser from "../../assets/lottie/search-new-lottie.json";
import dynamic from "next/dynamic";

type Props = {};

export default function SearchingUserLottie({}: Props) {
  return (
    <div className="h-[170px] sm:h-[200px] w-[170px] sm:w-[200px]">
      <Lottie animationData={SearchUser} />
    </div>
  );
}
