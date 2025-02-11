// axiosInstance.ts
import axios, { AxiosInstance } from "axios";
import Utils from "../utils/Utils";
import config from "../config";

const instance: AxiosInstance = axios.create({
  baseURL: config.apiUrl, //change last word to DEV or PROD
  timeout: 10000,
});
// Set default headers for all requests
instance.defaults.headers.common["Content-Type"] = "application/json";

// Function to get the token from localStorage
const getUserTokenFromStorage = (): string | null => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    try {
      const userData = JSON.parse(userDataString);
      const accessToken = userData.accessToken;
      return accessToken || null;
    } catch (error) {
      console.error("Error parsing userData:", error);
    }
  }
  return null;
};

// Function to set the Authorization header with the token
const setAuthorizationHeader = (token?: string) => {
  const userToken = token ? token : getUserTokenFromStorage();
  if (userToken) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
  } else {
    // Remove the Authorization header if the token is null
    delete instance.defaults.headers.common["Authorization"];
  }
};

// Function to handle token refresh on unauthorized requests
const handleUnauthorized = (error) => {
  if (error.response && error.response.status === 401) {
    // Implement your token refresh logic here
    // You can make a refresh token API call and set the new token in local storage
    // After that, call setAuthToken with the new token.
  }
  return Promise.reject(error);
};



// Add response and error interceptors
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors here
    if (error.response) {
      // Handle HTTP error responses (status code is not 2xx)
      if (error.response.status === 401) {
        console.error("got 401 from server", error);
        const token = Utils.getToken()
        if(token){
          Utils.signOut();
          window.location.reload();
          // setIsLogin(false);
        }
      }
      console.error("HTTP Error:", error.response.status);
      console.error("Error Data:", error.response.data);
    } else if (error.request) {
      // Handle request errors (no response received)
      console.error("Request Error:", error.request);
    } else {
      // Handle other errors
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export { instance, setAuthorizationHeader };
