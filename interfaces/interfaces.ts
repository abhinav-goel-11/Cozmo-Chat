import { currentTabEnum } from "../constants/feed.constants";

export interface FeedTypesI {
  name: string;
  icon?: {
    src: string;
  };
  value: string;
  iconActive?: {
    src: string;
  };
  circleActive?: {
    src: string;
  };
  circleNotActive?: {
    src: string;
  };
  child?: FeedTypesI[];
}

export interface LoaderI {
  className?: string;
}

export interface fetchPostIdAndActionsBulkI {
  feed_type: string;
  before?: string;
  after?: string;
}

export interface MediaItem {
  url: string;
  isSensitive?: boolean;
  description?: string;
  type?: string;
  isNSFW?: boolean;
  thumbnailUrl?: string;
  videoId?: string;
}

export interface Post {
  createdAt: string;
  postId: string;
  user: useDataI;
  userId: string;
  text: string;
  media: MediaItem[];
  mention: { userId: string; username: string }[];
  hashtags: string[];
  actionCount: {
    actionCount: {
      totalComment: number;
      repostCount: number;
      totalLike: number;
      viewCount: number;
    };
  };
  groupDetails: {
    description: string;
    groupImage: string;
    id: string;
    isMember: boolean;
    isPrivate: boolean;
    name: string;
    type: string;
    url: string;
  };
  currentUserAction: {
    isDislike: boolean;
    isHide: boolean;
    isLike: boolean;
    isReport: boolean;
    isRepost: boolean;
    postId: any;
    isHeart: boolean;
  };
  postCategory: {
    details: {
      label: string;
      labelHexcode: {
        Dark: string;
        Light: string;
      };
      imageUrl: {
        Dark: string;
        Light: string;
      };
    };
    type: string;
  };
}
export interface PostObjI {
  createdAt: string;
  postId: string;
  user: useDataI;
  userId: string;
  text: string;
  title?: string; // new key
  media: MediaItem[];
  mediaType?: string;
  mention?: { userId: string; username: string }[];
  hashtags?: string[];
  actionCount?: {
    postId: string;
    screenshotCount: number;
    totalComment?: number;
    repostCount?: number;
    totalLike?: number;
    viewCount?: number;
    actionCount?: {
      postId: string;
      screenshotCount: number;
      totalComment?: number;
      repostCount?: number;
      totalLike?: number;
      viewCount?: number;
    };
  };
  currentUserAction: {
    isDislike: boolean;
    isHide: boolean;
    isLike: boolean;
    isReport: boolean;
    isRepost: boolean;
    postId: any;
    isHeart: boolean;
  };
  groupDetails?: {
    description: string;
    groupImage: string;
    id: string;
    isMember: boolean;
    isPrivate: boolean;
    name: string;
    type: string;
    url: string;
  };
  postCategory?: {
    details: {
      label: string;
      labelHexcode: {
        Dark: string;
        Light: string;
      };
      imageUrl: {
        Dark: string;
        Light: string;
      };
    };
    type: string;
  };
  poll?: pollT;
  expirationTime?: string;
  language?: string;
  cursor?: string;
}

export type countT = {
  code: number;
  message: string;
  data: {
    mutedUserCount: number;
    blockIdsCount: string;
  };
};

export type blockListT = {
  code: number;
  message: string;
  data: {
    docs: blockData[];
    nextPage: number;
  };
};

export type blockData = {
  id: string;
  userName: string;
  profileImage: string;
  designation: string;
  followerCount: number;
  followingCount: number;
  isDeactivated: boolean;
  isVerified: boolean;
};

export type activityImagesT = {
  theme: string;
  url: string;
};

export type activityDataT = {
  activityType: string;
  authorUserId: string | undefined;
  authorData: useDataI | undefined;
  commentId: string | undefined;
  commentData: CommentT | undefined;
  postData: PostObjI | undefined;
  postId: string | undefined;
  userId: string;
  sk: string;
  primaryIcon: activityImagesT[];
};

export interface useDataI {
  id?: string;
  created_at?: string;
  username: string;
  userId: string;
  profileImage?: string;
  followerCount?: number;
  followingCount?: number;
  designation?: string | null;
  userName?: string;
  contactSyncCount?: number;
  contactsSync?: boolean;
  aboutMe?: string;
  gender?: string;
  age?: string;
  isFollowed?: boolean;
  profession?: string;
  latitude?: number;
  logitude?: number;
  totalView?: number;
  totalPostsCount?: number;
  avaiableBoostCount?: number;
  isNewUser?: boolean;
  accessToken?: string;
  refreshToken?: string;
  creatorBadge?: {
    imageUrl?: string;
    badgeId?: string;
  };
  emailVerification: {
    companyName: string;
    verified: boolean;
  };
  userScore: string;
  isAdmin?: boolean;
}

export type NotificationT = {
  content: string;
  cursor: number;
  createdAt: string;
  heading: string;
  id: string;
  metadata: {
    associatedId: string;
    referenceId?: string;
    addressId?: string;
  };
  isRead: boolean;
  isMuted: boolean;
  incId: number;
  isVerified: boolean;
  media: MediaItem[];
  redirectionType: string;
  text: string;
  userIdToNotify: string;
  userIdWhoFiredTheEvent: string;
  notificationType: string;
  primaryIcon: activityImagesT[];
  profileIcons: activityImagesT[];
};

export type CommentActionsT = {
  commentId: string;
  currentUserAction: { commentId: string; isLike: boolean; isDislike: boolean };
  totalDislike: number;
  totalLike: number;
};

export type CommentT = {
  createdAt: string;
  updatedAt?: string;
  isDeleted: boolean;
  commentId: string;
  userId: string;
  postId: string;
  text: string;
  threadCount?: number;
  mention: { userId: string; username: string }[];
  hashtags?: string[];
  user: useDataI;
  parentId: string;
  child?: CommentT[];
  currentUserAction: { commentId: string; isLike: boolean; isDislike: boolean };
  totalDislike: number;
  totalLike: number;
  isParent?: boolean;
};

export type NewCommentT = {
  createdAt: string;
  groupId: string;
  location: {
    lat: number;
    lon: number;
  };
  mention: { userId: string; username: string }[];
  parentId: string;
  postId: string;
  text: string;
};

export type connectionResponseT = {
  data: {
    followerCount: number;
    followingCount: number;
    isFollowed: boolean;
    userId: string;
    username: string;
  };
};

export type blockResponseT = {
  data: { isBlockedByMe: boolean; username: string };
};

export type mentionUserT = {
  userId: string;
  username: string;
  userIndustry: string;
  userProfilePic: string;
  isUserVerified: boolean;
  creatorBadge?: {
    imageUrl?: string;
    badgeId?: string;
  };
};

export type CreatePostObjectT = {
  isAma: boolean;
  location: {
    lat: number;
    lon: number;
  };
  media: MediaItem[];
  mention: { userId: string; username: string }[];
  title: string;
  text: string;
  createdAt: string;
  topics: string[];
  poll: createPollT;
  expirationTime: string;
};

export type CreatePostResponseT = {
  isAma: boolean;
  location: {
    lat: number;
    lon: number;
  };
  media: [];
  mention: [];
  text: string;
  title:string;
  createdAt: string;
  topics: string[];
  userId: string;
  userName: string;
  postId: string;
  updatedAt: string;
  cursor: string;
  post: string;
  type: string;
  postType: string;
};

export type pollOptionT = {
  option: string;
  text: string;
  voteCount: number;
};

export type createPollT = {
  expirationDay: number;
  optionArray: pollOptionT[];
  isExpired?: boolean;
  currentUserReaction?: string | null;
  totalVotes?: number;
};

export type pollT = {
  postId: string;
  optionArray: pollOptionT[];
  totalVotes: number;
  currentUserReaction: string | null;
  timeLeft: string;
  isExpired: boolean;
};

export type savePollT = {
  option: string;
  postId: string;
};

export type isAmaAllowedT = {
  code: number;
  message: string;
  data: {
    isAmaEnabledForUser: boolean;
    amaMessage: string | null;
  };
};

export type SidebarNavT = {
  path: string;
  name: currentTabEnum;
  icon: string;
  activeIcon: string;
  showBadge?: boolean;
};
