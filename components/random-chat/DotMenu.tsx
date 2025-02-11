import Image from "next/image";
import Dots from "../../assets/svg-icon/3-dot-menu.svg";

type Props = {};

export default function DotMenu({}: Props) {
  return (
    <>
      <div className="cursor-pointer">
        <Image src={Dots} alt="dots" height={20} width={20} />
      </div>
    </>
  );
}
