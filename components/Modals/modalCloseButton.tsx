import Image from "next/image";
import cross from "../../assets/svg-icon/Cross-sign.svg";
import { twMerge } from "tailwind-merge";

type ModalCloseButtonProps = {
    onClick:() => void,
    className?:string
}
export default function ModalCloseButton({onClick,className}:ModalCloseButtonProps) {
  return (
    <Image
    src={cross}
    alt="close button"
    height={32}
    width={32}
    className={twMerge("cursor-pointer dark:hover:bg-white/[5%] rounded-full transition",className)}
    onClick={onClick}
  />
  )
}
