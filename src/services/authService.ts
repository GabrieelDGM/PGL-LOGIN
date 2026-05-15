import { apiFetch } from "./apiService";
import { ENDPOINTS } from "./constants";

export interface RegisterPayload {
  fullname: string;
  email: string;
  pswd: string;
}

export interface LoginPayload {
  email: string;
  pswd: string;
}

export interface RegisterResponse {
  id: number;
  fullname: string;
  email: string;
}

export interface LoginResponse {
  userId: number;
  email: string;
  token: string;
}

export function register(payload: RegisterPayload): Promise<RegisterResponse> {
  return apiFetch<RegisterResponse>(ENDPOINTS.REGISTER, {
    method: "POST",
    body: payload,
  });
}

export function login(payload: LoginPayload): Promise<LoginResponse> {
  return apiFetch<LoginResponse>(ENDPOINTS.LOGIN, {
    method: "POST",
    body: payload,
  });
}

export function getWelcomeMessage(token: string): Promise<string> {
  return apiFetch<string>(ENDPOINTS.WELCOME, {
    method: "GET",
    token,
  });
}
