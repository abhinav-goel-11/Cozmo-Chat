import DefaultDp from "../../assets/images/placeholder.svg";
import { userInfoT } from "../../interfaces/webrtc.type";
import RandomChatDropdown from "../Dropdowns/RandomChatDropdown";
import DotMenu from "./DotMenu";

type ChatScreenHeaderProps = {
  userInfo: userInfoT;
  isTyping: boolean;
};

export default function ChatScreenHeader({
  userInfo,
  isTyping,
}: ChatScreenHeaderProps) {
  return (
    <div className="flex justify-between items-center border-b pt-6 pb-[17px] px-[10px]">
      <div className="flex gap-x-[10px] items-center">
        <img
          src={userInfo?.userProfileImage || DefaultDp?.src}
          alt="profile-img"
          height={32}
          width={32}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col justify-between h-[33px]">
          <h2 className="text-sm font-semibold">
            {userInfo?.userName ?? "Anonymous_User"}
          </h2>

          <div className=" text-gray text-[10px] font-normal">
            {isTyping ? "...is typing" : "Online"}
          </div>
        </div>
      </div>
      <RandomChatDropdown />
    </div>
  );
}
