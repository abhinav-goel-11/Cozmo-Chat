import Image from "next/image";
import gifActive from "../../assets/svg-icon/Gif Actice.svg";
import gifUnactive from "../../assets/svg-icon/Gif Unactive.svg";
import { twMerge } from "tailwind-merge";
type GIFIconProps = {
  onClick: () => void;
  isActive: boolean;
  isDisabled: boolean;
  className?: string;
};
export default function GIFIcon({
  onClick,
  isActive,
  isDisabled,
  className,
}: GIFIconProps) {
  return (
    <Image
      src={isActive ? gifActive : gifUnactive}
      alt="gif-icon"
      height={28}
      width={28}
      className={twMerge(
        "h-7 w-7 cursor-pointer post_action_btn",
        className,
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
    />
  );
}
