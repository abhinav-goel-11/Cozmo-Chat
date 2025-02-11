import { instance } from "../../axios/axios.service";
import {
  chatConnectionResponseT,
  chatConnectionT,
} from "../../interfaces/webrtc.type";

export const deletePeerId = async (peerId: string) => {
  // return await instance.delete(`/webrtc-chat/delete/peer/${peerId}`);
  return await instance.get(`/webrtc-chat/disconnect/${peerId}`);
};

// export const addPeerId = async (peerId: string) => {
//   return await instance.post("/webrtc-chat/add/peer", { peerId });
// };

// export const getRandomPeerId = async (peerId: string) => {
//   return await instance.get(`/webrtc-chat/random/${peerId}`);
// };

export const connectPeerId = async (peerId: string) => {
  return await instance.get(`/webrtc-chat/connect/${peerId}`);
};

export const disconnectPeerId = async (peerId: string) => {
  return await instance.get(`/webrtc-chat/disconnect/${peerId}`);
};

export const connectUser = async (
  payload: chatConnectionT
): Promise<chatConnectionResponseT> => {
  return await instance.post("/webrtc-chat/connect/peer", payload);
};
