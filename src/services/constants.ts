
export const API_BASE_URL = "http://192.168.X.Y:8000";

export const ENDPOINTS = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  WELCOME: "/welcome",
} as const;

export const TOKEN_KEY = "session_token";
