import Image from "next/image";
import closechat from "../../assets/svg-icon/close-chat.svg";

export default function CloseChat() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.7695"
        r="9"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip0_6449_5083)">
        <path
          d="M8.66797 9.4375L15.3346 16.1042M8.66797 16.1042L15.3346 9.4375"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6449_5083">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4 4.76953)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
