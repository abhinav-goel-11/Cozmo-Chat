import QuickChat from "../components/random-chat/QuickChat";
import { RandomChatContextProvider } from "../context/RandomChatContextProvider";

type Props = {};

const WebRTC = ({}: Props) => {
  return (
    <RandomChatContextProvider>
      <QuickChat />
    </RandomChatContextProvider>
  );
};

export default WebRTC;
