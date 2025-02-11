import Delete from "../assets/svg-icon/delete-bin.svg";
import block from "../assets/svg-icon/blockAction.svg";

export const reqPerCredit = 5;
export const superchatRequestModalButtonText = {
  buyMore: "Buy more credits",
  send: "Send chat request",
};
export const suparchatIconToastMessages = {
  PENDING: "Superchat request already sent.",
  REJECTED: "You're not allowed to send request to this user.",
  SUCCESS: "Superchat request sent.",
};
export const enum requestsNavbarEnum {
  received = "received",
  sent = "sent",
}

export const requestsNavbar = [
  {
    name: "Received",
    value: requestsNavbarEnum.received,
  },
  {
    name: "Sent",
    value: requestsNavbarEnum.sent,
  },
];

export const enum channelActionEnum {
  delete = "deleteChat",
  block = "block",
  unblock = "unblock",
  report = "reportUser",
}

export const channelActions = {
  [channelActionEnum.block]: {
    name: "Block User",
    icon: block,
    value: channelActionEnum.block,
  },
  [channelActionEnum.unblock]: {
    name: "Unblock User",
    icon: block,
    value: channelActionEnum.unblock,
  },
  [channelActionEnum.delete]: {
    name: "Delete Chat",
    icon: Delete,
    value: channelActionEnum.delete,
  },
  // {
  //     name:"Report Post",
  //     icon:report,
  //     value:channelActionEnum.reportPost,
  // }
};

export const noRequestsMessage = {
  title: "No message requests",
  text: "To get started with this feature, you'll need to add credits to your profile.",
};

export const razorpayPaymentStatus = {
  success: "Payment Successful",
  failed: "Payment Failed!",
};

export const hoodColorSet = {
  "--sendbird-dark-primary-500": "#00487c",
  "--sendbird-dark-primary-400": "#D5663F",
  "--sendbird-dark-primary-300": "#D5663F",
  "--sendbird-dark-primary-200": "#D5663F",
  "--sendbird-dark-primary-100": "#D5663F",
  "--sendbird-dark-background-50": "",
  "--sendbird-dark-background-100": "",
  "--sendbird-dark-background-200": "",
  "--sendbird-dark-background-300": "",
  "--sendbird-dark-background-400": "",
  "--sendbird-dark-background-500": "rgba(0,0,0,0.15)",
  "--sendbird-dark-background-600": "",
  "--sendbird-dark-background-700": "rgba(0,0,0,0.15)",
  "--sendbird-message-input-border-active":"#D5663F",
};
