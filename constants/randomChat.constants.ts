import ReportIcon from "../assets/svg-icon/reportAction.svg";
export const intersets = [
  { id: 2, text: "Games", icon: "🕹" },
  { id: 1, text: "Memes", icon: "🤣" },
  { id: 3, text: "Movies", icon: "🍿" },
  { id: 4, text: "Flirt", icon: "😘" },
  { id: 5, text: "Travel", icon: "✈️" },
  { id: 6, text: "Music", icon: "🎶" },
  { id: 7, text: "Food", icon: "😋" },
  { id: 8, text: "Roleplay", icon: "🎭" },
  { id: 9, text: "Anime", icon: "🍥" },
  { id: 10, text: "Others", icon: "🧩" },
];

export const FAKE_USER_MAX = 50;
export const FAKE_USER_MIN = 20;

export const Typing_Delay = 600;

export const enum randomChatActionsEnum {
  report = "report_user",
}

export const randomChatActions = {
  [randomChatActionsEnum.report]: {
    name: "Report user",
    icon: ReportIcon,
    value: randomChatActionsEnum.report,
  },
};
