export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

export const getAccessToken = () => {
  if (typeof window === "undefined") return "";

  const jsonString = localStorage.getItem(ACCESS_TOKEN_KEY);

  return jsonString ? JSON.parse(jsonString) : undefined;
};

export const setToken = (accessToken = "") => {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(accessToken));
};
