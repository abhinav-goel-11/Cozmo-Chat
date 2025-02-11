import { GroupChannel } from "@sendbird/chat/groupChannel";
export type getUserCreditsApiResponse = {
  code: number;
  message: string;
  data: {
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userId: string;
    creditPoints: number;
    availableBoostCount: number;
  };
};

export type ChannelExistsT = {
  code: number;
  message: string;
  data: {
    chatExist: boolean;
  };
};

export type ChannelExistsRootT = {
  code: number;
  message: string;
  data: {
    channel: ChannelInfoT;
    remainingRequests: number;
  };
};
export type channelStatusT = "PENDING" | "ACCEPTED" | "REJECTED";
export type ChannelInfoT = {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  senderUid: string;
  senderUname: string;
  senderProfileUrl: string;
  receiverUid: string;
  receiverUname: string;
  receiverProfileUrl: string;
  chatMessage: string;
  status: channelStatusT;
  roomId: string;
  expireTime: Date;
  channelId: string;
  isChannelLock: number;
};

export type receiverDataT = {
  receiverProfileUrl: string;
  receiverUid: string;
  receiverUname: string;
};

export type superchatSendPayloadT = receiverDataT & {
  senderProfileUrl: string;
  senderUname: string;
};

export type supaerchatSendApiResponseT = {
  code: number;
  message: string;
  data: ChannelInfoT;
};

export type superchatAcceptAPIResponse = {
  code: number;
  message: string;
  data: ChannelInfoT;
};

export type creditPlansT = {
  code: number;
  message: string;
  data: creditPlanT[];
};

export type creditPlanT = {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  credits: number;
  price: number;
  discount: number;
};
export type creditPlansDescriptionT = {
  code: number;
  message: string;
  data: {
    description: string;
  };
};

export type superchatRequestsT = {
  code: number;
  message: string;
  data: ChannelInfoT[];
};
export type createOrderApiResponse = {
  code: number;
  message: string;
  data: {
    userId: string;
    razorOrderId: string;
    planId: string;
    credits: number;
    price: number;
    discount: number;
    discountedPrice: number;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    orderStatus: string;
  };
};

export type getTransactionApiResponse = {
  code: number;
  message: string;
  data: {
    docs: TransactionData[];
    nextPage: number;
    totalCount: number;
  };
};

export type TransactionData = {
  id: string;
  amount: number;
  status: string;
  order_id: string;
  created_at: number;
  credits: number;
  razorOrderId: string;
  price: number;
  discount: number;
  discountedPrice: number;
  currency: number;
  statusMessage: {
    message: number;
  };
};

export type superchatAcceptApiPayload = {
  action: "ACCEPTED" | "REJECTED";
  chatRequestId: string;
};



// ******************* renderChannelAction and Channel preview types ************************ //
export type GroupChannelPreviewActionProps = {
  channel?: GroupChannel;
  disabled?: boolean;
  onLeaveChannel?: () => Promise<void>;
};

export type ChannelPreviewType = {
  tabIndex: number;
  channel: GroupChannel;
  onClick: () => void;
  renderChannelAction: (
    props: GroupChannelPreviewActionProps
  ) => React.ReactElement;
  isSelected?: boolean;
  isTyping?: boolean;
  onLeaveChannel?: () => Promise<void>;
};
