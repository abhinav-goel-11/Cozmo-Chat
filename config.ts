interface AppConfig {
  apiUrl: string;
  defaultToken: string;
  commentCharLimit: string;
  postCharacterLimit: string;
  postTitleCharacterLimit: string;
  postSeeMoreLimit: string;
  commentSeeMoreLimit: string;
  razorpayKeyId: string;
  sendbirdAppId: string;
  pollOptionLimit: String;
  giphyKey: string;
  fireBaseApiKey: string;
  fireBaseMessagingSenderId: string;
  fireBaseAppId: string;
  fireBaseMeasurementId: string;
}

const developmentConfig: AppConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL_DEV,
  defaultToken: process.env.NEXT_PUBLIC_DEFAULT_TOKEN_STAG,
  commentCharLimit: process.env.NEXT_PUBLIC_COMMENT_CHR_LIMIT,
  postCharacterLimit: process.env.NEXT_PUBLIC_POST_CHR_LIMIT,
  postTitleCharacterLimit: process.env.NEXT_PUBLIC_POST_TITLE_CHR_LIMIT,
  postSeeMoreLimit: process.env.NEXT_PUBLIC_POST_SEEMORE_LIMIT,
  commentSeeMoreLimit: process.env.NEXT_PUBLIC_COMMENT_SEEMORE_LIMIT,
  pollOptionLimit: process.env.NEXT_PUBLIC_POLL_OPTION_LIMIT,
  razorpayKeyId: process.env.NEXT_PUBLIC_RZP_TEST_KEY_ID,
  sendbirdAppId: process.env.NEXT_PUBLIC_SENDBIRD_APPID_DEV,
  giphyKey: process.env.NEXT_PUBLIC_GIPHY_KEY,
  fireBaseApiKey: process.env.NEXT_PUBLIC_FIRE_BASE_APIKEY,
  fireBaseAppId: process.env.NEXT_PUBLIC_FIRE_BASE_APPID,
  fireBaseMeasurementId: process.env.NEXT_PUBLIC_FIRE_BASE_MEASUREMENT_Id,
  fireBaseMessagingSenderId: process.env.NEXT_PUBLIC_FIRE_BASE_SENDER_Id,
};

const productionConfig: AppConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL_PROD,
  defaultToken: process.env.NEXT_PUBLIC_DEFAULT_TOKEN_PROD,
  commentCharLimit: process.env.NEXT_PUBLIC_COMMENT_CHR_LIMIT,
  postCharacterLimit: process.env.NEXT_PUBLIC_POST_CHR_LIMIT,
  postTitleCharacterLimit: process.env.NEXT_PUBLIC_POST_TITLE_CHR_LIMIT,
  postSeeMoreLimit: process.env.NEXT_PUBLIC_POST_SEEMORE_LIMIT,
  commentSeeMoreLimit: process.env.NEXT_PUBLIC_COMMENT_SEEMORE_LIMIT,
  pollOptionLimit: process.env.NEXT_PUBLIC_POLL_OPTION_LIMIT,
  razorpayKeyId: process.env.NEXT_PUBLIC_RZP_PROD_KEY_ID, //change to prod key id 🚨🚨🚨
  sendbirdAppId: process.env.NEXT_PUBLIC_SENDBIRD_APPID_PROD,
  giphyKey: process.env.NEXT_PUBLIC_GIPHY_KEY,
  fireBaseApiKey: process.env.NEXT_PUBLIC_FIRE_BASE_APIKEY,
  fireBaseAppId: process.env.NEXT_PUBLIC_FIRE_BASE_APPID,
  fireBaseMeasurementId: process.env.NEXT_PUBLIC_FIRE_BASE_MEASUREMENT_Id,
  fireBaseMessagingSenderId: process.env.NEXT_PUBLIC_FIRE_BASE_SENDER_Id,
};
const config: AppConfig = developmentConfig; //development

export default config;
