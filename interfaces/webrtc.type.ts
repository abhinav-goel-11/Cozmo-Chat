export type chatMessageT =
  | {
      direction: "outgoing" | "incoming";
      type?: "text" | "gif";
      value: string;
      createdAt: string;
    }
  | {
      direction: "outgoing" | "incoming";
      type?: "image";
      value: string;
      createdAt: string;
      imageUrl: string;
    };

export type sendMessageT =
  | {
      type: "text" | "gif";
      data: string;
    }
  | {
      type: "image";
      imageUrl: string;
      data: string;
    };

export type interestT = {
  id: number;
  text: string;
  icon: string;
  // onlineUserCount: number;
};

export type chatConnectionT = {
  userName: string;
  userProfileImage: string;
  peerId: string;
  deviceId: string;
};
export type chatConnectionResponseT = {
  code: number;
  message: string;
  data: {
    userName: string;
    userProfileImage: string;
    targetPeerId: string;
  };
};

export type userInfoT = { userName: string; userProfileImage: string };

export type receiveDataT =
  | {
      type: "typing";
      isTyping: boolean;
    }
  | {
      type: "userInfo";
      data: userInfoT;
    }
  | {
      type: "gif";
      gifUrl: string;
      createdAt: string;
    }
  | {
      type: "text";
      message: string;
      createdAt: string;
    }
  | {
      type: "image";
      message: string;
      createdAt: string;
      imageUrl: string;
    };
