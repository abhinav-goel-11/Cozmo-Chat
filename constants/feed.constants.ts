import { FeedTypesI } from "../interfaces/interfaces";
import trending from "../assets/svg-icon/trending_white.svg";
import friends from "../assets/svg-icon/friends_feed_white.svg";
import home_icon from "../assets/images/feedFilled.svg";
import home_icon_active from "../assets/svg-icon/Home_icon_orange.svg";
import trending_active from "../assets/svg-icon/trending_orange.svg";
import friends_active from "../assets/svg-icon/friends_feed_orange.svg";
import circleActive from "../assets/svg-icon/circle_orange.svg";
import circleNotActive from "../assets/svg-icon/circle_white.svg";
import hide from "../assets/svg-icon/hideAction.svg";
import report from "../assets/svg-icon/reportAction.svg";
import unfollow from "../assets/svg-icon/unfollow.svg";
import follow from "../assets/svg-icon/followAction.svg";
import block from "../assets/svg-icon/blockAction.svg";
import share from "../assets/svg-icon/shareAction.svg";
import account from "../assets/svg-icon/accont-icon.svg";
import faq from "../assets/svg-icon/faq-icon.svg";
import privacy from "../assets/svg-icon/privacy-icon.svg";
import terms from "../assets/svg-icon/terms-icon.svg";
import verify from "../assets/svg-icon/verify-icon.svg";
import bell from "../assets/svg-icon/bell-icon.svg";
import Topic from "../assets/svg-icon/topics-icon.svg";
import Group_icon from "../assets/images/groupUnfilled.svg";
import Gear from "../assets/images/SettingsUnFill.svg";
import Book from "../assets/svg-icon/book-icon.svg";
import Pen from "../assets/svg-icon/feedback-pen.svg";
// import Info from "../assets/images/infoicon.svg";
import Info from "../assets/svg-icon/aboutUs-icon.svg";
import Delete from "../assets/svg-icon/delete-bin.svg";
import Notificationoff from "../assets/svg-icon/off-notif.svg";
import Muted from "../assets/svg-icon/mutedIcon.svg";
import unmuteNotif from "../assets/svg-icon/unmute-notif.svg";

export const enum timelineFeedEnum {
  default = "RECOMMEND",
  trending = "TRENDING",
  friends = "FRIENDS",
  home = "HOME",
  ama = "AMA",
}

export const enum profileFeedEnum {
  posts = "Posts",
  media = "Media",
  activity = "Activity",
}

export const profile_feed = [
  { label: profileFeedEnum.posts, value: "posts" },
  { label: profileFeedEnum.media, value: "media" },
  { label: profileFeedEnum.activity, value: "activity" },
];

export const profile_feed_Random = [
  { label: profileFeedEnum.posts, value: "posts" },
  { label: profileFeedEnum.media, value: "media" },
];

export const enum postActionsEnum {
  hide = "Hide",
  sharePost = "SharePost",
  follow = "Follow",
  blockUser = "BlockUser",
  reportPost = "ReportPost",
  unFollow = "Unfollow",
  delete = "DeletePost",
  unBlockUser = "UnblockUser",
  shareProfile = "ShareProfile",
}

export const enum commentActionEnum {
  hide = "Hide",
  shareComment = "shareComment",
  follow = "Follow",
  blockUser = "BlockUser",
  reportPost = "ReportPost",
  unFollow = "Unfollow",
  delete = "DeleteComment",
  unBlockUser = "UnblockUser",
}

export const enum notificationActionsEnum {
  delete = "delete_notification",
  mute = "mute_notification",
  unmute = "unmute_notification",
  turnOn = "turnOn_notification",
  turnOff = "turnOff_notification",
}

export const enum SettingPrivacyEnum {
  blocked = "blockedAccounts",
  muted = "MutedAccounts",
  policy = "PrivacyPolicy",
}

export const FeedTypes: FeedTypesI[] = [
  {
    name: "Home",
    value: timelineFeedEnum.home,
    child: [
      {
        name: "Default",
        icon: home_icon,
        iconActive: home_icon_active,
        value: timelineFeedEnum.default,
        circleActive,
        circleNotActive,
      },
      {
        name: "Trending",
        icon: trending,
        iconActive: trending_active,
        value: timelineFeedEnum.trending,
        circleActive,
        circleNotActive,
      },
      {
        name: "Friends",
        icon: friends,
        iconActive: friends_active,
        value: timelineFeedEnum.friends,
        circleActive,
        circleNotActive,
      },
    ],
  },
  {
    name: "AMA",
    value: timelineFeedEnum.ama,
  },
];

export const PostActions: FeedTypesI[] = [
  // {
  //     name:"Hide",
  //     icon:hide,
  //     value:postActionsEnum?.hide,
  // },
  {
    name: "Share Post",
    icon: share,
    value: postActionsEnum.sharePost,
  },
  {
    name: "Follow",
    icon: follow,
    value: postActionsEnum.follow,
  },
  {
    name: "Unfollow",
    icon: unfollow,
    value: postActionsEnum.unFollow,
  },
  {
    name: "Block User",
    icon: block,
    value: postActionsEnum.blockUser,
  },
  {
    name: "Unblock User",
    icon: block,
    value: postActionsEnum.unBlockUser,
  },
  // {
  //     name:"Report Post",
  //     icon:report,
  //     value:postActionsEnum.reportPost,
  // }
];

export const AdminPostActions: FeedTypesI[] = [
  {
    name: "Share Post",
    icon: share,
    value: postActionsEnum.sharePost,
  },
  {
    name: "Delete Post",
    icon: Delete,
    value: postActionsEnum.delete,
  },
];

export const enum activityTypeEnum {
  comment = "COMMENT",
  liked = "LIKED",
  repost = "REPOST",
}

export const AllCaughtUpConstant = {
  heading: "You're are all caught up",
  text: "You've seen all the new posts",
};

export const NoPostsYetConstant = {
  text: "You haven't posted anything yet.",
};

export const enum settingsPanelEnum {
  account = "account",
  verifiedBadge = "verifiedBadge",
  notifications = "notifications",
  privacy = "privacy",
  terms = "terms",
  faq = "faq",
}

export const enum sideDrawerEnum {
  profile = "profile",
  topics = "topics",
  groups = "groups",
  inviteFriend = "inviteFriend",
  syncContact = "syncContact",
  setting = "settings",
  feedback = "feedback",
  aboutUs = "aboutUs",
  anonChat = "webrtc",
  quickchat = "quickchat",
}

export const settingsPanel = [
  {
    text: "Account",
    icon: account,
    value: settingsPanelEnum.account,
  },
  // {
  //     text:"Get Your Verified Badge",
  //     icon:verify,
  //     value:settingsPanelEnum.verifiedBadge,
  // },
  // {
  //     text:"Notifications",
  //     icon:bell ,
  //     value:settingsPanelEnum.notifications,
  // },
  {
    text: "Privacy",
    icon: privacy,
    value: settingsPanelEnum.privacy,
  },
  {
    text: "Terms of use",
    icon: terms,
    value: settingsPanelEnum.terms,
    url: "/terms-condition.html",
  },
  {
    text: "FAQs",
    icon: faq,
    value: settingsPanelEnum.faq,
    url: "/faq.html",
  },
];

export const SettingsPrivacyPanel = [
  {
    text: "Blocked Accounts",
    icon: block,
    value: SettingPrivacyEnum.blocked,
  },
  // {
  //   text: "Muted Accounts",
  //   icon: Muted,
  //   value: SettingPrivacyEnum.muted,
  // },
  {
    text: "Privacy Policy",
    icon: privacy,
    value: SettingPrivacyEnum.policy,
    url: "/privacy-policy.html",
  },
];

export const SideDrawerTabs = [
  {
    text: "Profile",
    icon: account,
    value: sideDrawerEnum.profile,
  },
  {
    text: "Anon chat",
    icon: Info,
    value: sideDrawerEnum.quickchat,
  },
  {
    text: "Topics",
    icon: Topic,
    value: sideDrawerEnum.topics,
  },
  // {
  //   text: "Groups",
  //   icon: Group_icon,
  //   value: sideDrawerEnum.groups,
  // },
  // {
  //   text: "Invite friends",
  //   icon: follow,
  //   value: sideDrawerEnum.inviteFriend,
  // },
  // {
  //   text: "Sync contacts",
  //   icon: Book,
  //   value: sideDrawerEnum.syncContact,
  // },
  {
    text: "Settings",
    icon: Gear,
    value: sideDrawerEnum.setting,
  },
  {
    text: "About us",
    icon: Info,
    value: sideDrawerEnum.aboutUs,
  },
  // {
  //   text: "Give us feedback",
  //   icon: Pen,
  //   value: sideDrawerEnum.feedback,
  // },
];

export const profileActions = {
  [postActionsEnum.shareProfile]: {
    name: "Share Profile",
    icon: share,
    value: postActionsEnum.shareProfile,
  },
  [postActionsEnum.blockUser]: {
    name: "Block User",
    icon: block,
    value: postActionsEnum.blockUser,
  },
  [postActionsEnum.unBlockUser]: {
    name: "Unblock User",
    icon: block,
    value: postActionsEnum.unBlockUser,
  },
  // {
  //     name:"Report Post",
  //     icon:report,
  //     value:postActionsEnum.reportPost,
  // }
};

export const actions = {
  [postActionsEnum.sharePost]: {
    name: "Share Post",
    icon: share,
    value: postActionsEnum.sharePost,
  },
  [postActionsEnum.follow]: {
    name: "Follow",
    icon: follow,
    value: postActionsEnum.follow,
  },
  [postActionsEnum.unFollow]: {
    name: "Unfollow",
    icon: unfollow,
    value: postActionsEnum.unFollow,
  },
  [postActionsEnum.blockUser]: {
    name: "Block User",
    icon: block,
    value: postActionsEnum.blockUser,
  },
  [postActionsEnum.unBlockUser]: {
    name: "Unblock User",
    icon: block,
    value: postActionsEnum.unBlockUser,
  },
  // {
  //     name:"Report Post",
  //     icon:report,
  //     value:postActionsEnum.reportPost,
  // }
};

export const commentActionsAdmin = {
  [commentActionEnum.delete]: {
    name: "Delete Comment",
    icon: Delete,
    value: postActionsEnum.delete,
  },
  [commentActionEnum.shareComment]: {
    name: "Share Comment",
    icon: share,
    value: commentActionEnum.shareComment,
  },
};

export const commentActions = {
  [commentActionEnum.shareComment]: {
    name: "Share Comment",
    icon: share,
    value: commentActionEnum.shareComment,
  },
  [commentActionEnum.follow]: {
    name: "Follow",
    icon: follow,
    value: commentActionEnum.follow,
  },
  [commentActionEnum.unFollow]: {
    name: "Unfollow",
    icon: unfollow,
    value: commentActionEnum.unFollow,
  },
  [commentActionEnum.blockUser]: {
    name: "Block User",
    icon: block,
    value: commentActionEnum.blockUser,
  },
  [commentActionEnum.unBlockUser]: {
    name: "Unblock User",
    icon: block,
    value: commentActionEnum.unBlockUser,
  },
  [commentActionEnum.delete]: {
    name: "Delete Comment",
    icon: Delete,
    value: commentActionEnum.delete,
  },
  // {
  //     name:"Report Post",
  //     icon:report,
  //     value:commentActionEnum.reportPost,
  // }
};

export const notificationActions = {
  [notificationActionsEnum.delete]: {
    name: "Delete",
    icon: Delete,
    value: notificationActionsEnum.delete,
  },
  [notificationActionsEnum.mute]: {
    name: "Mute",
    icon: Muted,
    value: notificationActionsEnum.mute,
  },
  [notificationActionsEnum.unmute]: {
    name: "Unmute",
    icon: unmuteNotif,
    value: notificationActionsEnum.unmute,
  },
  [notificationActionsEnum.turnOff]: {
    name: "Turn off notification from this post",
    icon: Notificationoff,
    value: notificationActionsEnum.turnOff,
  },
  [notificationActionsEnum.turnOn]: {
    name: "Turn on notification from this post",
    icon: bell,
    value: notificationActionsEnum.turnOn,
  },
};

export const enum NotificationTypeEnum {
  CongratsPost = "CongratsPost",

  GROUP = "GROUP",

  GROUP_POST = "GROUP_POST",

  GROUP_REQUESTED = "GROUP_REQUESTED",

  GROUP_POST_LIKE = "GROUP_POST_LIKE",

  GROUP_POST_MENTION = "GROUP_POST_MENTION",

  GROUP_POST_COMMENT = "GROUP_POST_COMMENT",

  GROUP_POST_SCREENSHOT = "GROUP_POST_SCREENSHOT",

  GROUP_POST_VIEW_MILESTONE_100 = "GROUP_POST_VIEW_MILESTONE_100",

  GROUP_POST_VIEW_MILESTONE_300 = "GROUP_POST_VIEW_MILESTONE_300",

  GROUP_POST_VIEW_MILESTONE_500 = "GROUP_POST_VIEW_MILESTONE_500",

  GROUP_POST_VIEW_MILESTONE_1000 = "GROUP_POST_VIEW_MILESTONE_1000",

  GROUP_POST_SHARE = "GROUP_POST_SHARE",

  GROUP_POST_REPORT = "GROUP_POST_REPORT",

  GROUP_USER_REPORT = "GROUP_USER_REPORT",

  GROUP_COMMENT_LIKE = "GROUP_COMMENT_LIKE",

  GROUP_COMMENT_REPLY = "GROUP_COMMENT_REPLY",

  GROUP_COMMENT_MENTION = "GROUP_COMMENT_MENTION",

  GROUP_COMMENT_THREAD_BULK = "GROUP_COMMENT_THREAD_BULK",

  GROUP_COMMENT_ENGAGEMENT = "GROUP_COMMENT_ENGAGEMENT",

  GROUP_PUBLIC_JOIN = "GROUP_PUBLIC_JOIN",

  GROUP_REPORT = "GROUP_REPORT",

  GROUP_ACCEPTED = "GROUP_ACCEPTED",

  REPORTED_POST_GROUP = "REPORTED_POST_GROUP",

  REPORTED_POST = "REPORTED_POST",

  USER_CHAT_REQUESTED = "USER_CHAT_REQUESTED",

  USER_CHAT_APPROVED = "USER_CHAT_APPROVED",

  POST = "POST",

  POST_LIKE = "POST_LIKE",

  POST_MENTION = "POST_MENTION",

  POST_COMMENT = "POST_COMMENT",

  POST_SCREENSHOT = "POST_SCREENSHOT",

  POST_VIEW_MILESTONE_100 = "POST_VIEW_MILESTONE_100",

  POST_VIEW_MILESTONE_300 = "POST_VIEW_MILESTONE_300",

  POST_VIEW_MILESTONE_500 = "POST_VIEW_MILESTONE_500",

  POST_VIEW_MILESTONE_1000 = "POST_VIEW_MILESTONE_1000",

  POST_SHARE = "POST_SHARE",

  POST_REPORT = "POST_REPORT",

  USER_REPORT = "USER_REPORT",

  COMMENT_LIKE = "COMMENT_LIKE",

  COMMENT_REPLY = "COMMENT_REPLY",

  COMMENT_MENTION = "COMMENT_MENTION",

  COMMENT_THREAD_BULK = "COMMENT_THREAD_BULK",

  COMMENT_ENGAGEMENT = "COMMENT_ENGAGEMENT",

  USER_FOLLOW = "FOLLOW",

  USER_REFERRAL_HISTORY = "USER_REFERRAL_HISTORY",

  POLL = "POLL",

  GROUP_POLL = "GROUP_POLL",

  PROFILE_CREATOR_BADGE = "PROFILE_CREATOR_BADGE",

  APP_STORE = "APP_STORE",

  WEB_URL = "WEB_URL",

  APP_SCREEN = "APP_SCREEN",

  FEED = "FEED",

  CONGRATS_POST = "CONGRATS_POST",
}

export const TIME_DIVISIONS = [
  { amount: 60, name: "s", value: "seconds" },
  { amount: 60, name: "m", value: "minutes" },
  { amount: 24, name: "h", value: "hours" },
  { amount: 7, name: "d", value: "days" },
  { amount: 4.34524, name: "w", value: "weeks" },
  { amount: 12, name: "mo", value: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "yr", value: "years" },
];

export const enum currentTabEnum {
  home = "Home",
  live = "Live",
  notification = "Notification",
  profile = "Profile",
  topics = "Topics",
  search = "Search",
  settings = "Settings",
  groups = "Groups",
  superchat = "Superchat",
  about = "AboutUs",
  hashtag = "HashTag",
  anonchat = "Anonchat",
  quickchat = "Quickchat",
  //add route to useActiveTab hook
}

export const RE_DIGIT = new RegExp(/^\d+$/);
export const pollEndtimeOptions = [
  { name: "1 day", value: 1 },
  { name: "2 days", value: 2 },
  { name: "3 days", value: 3 },
  { name: "4 days", value: 4 },
  { name: "5 days", value: 5 },
  { name: "6 days", value: 6 },
  { name: "7 days", value: 7 },
];
