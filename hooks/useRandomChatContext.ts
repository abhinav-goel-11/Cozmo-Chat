import { useContext } from "react";
import { RandomChatContext } from "../context/RandomChatContextProvider";

export default function useRandomChatContext() {
  const context = useContext(RandomChatContext);
  if (!context) {
    throw new Error(
      "Can't use RandomChatContext outside RandomChatContextProvider"
    );
  }

  return context;
}
