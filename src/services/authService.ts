
import { apiFetch } from "./apiService";

export type RegisterPayload = { fullname: string; email: string; pswd: string };
export type LoginPayload = { email: string; pswd: string };
export type LoginResponse = { user: { id: string; fullname: string; email: string }; token: string };

export function register(payload: RegisterPayload) {
  return apiFetch("/auth/register", { method: "POST", body: payload });
}

export function login(payload: LoginPayload) {
  return apiFetch<LoginResponse>("/auth/login", { method: "POST", body: payload });
}


export function getWelcomeMessage(token: string) {
  return apiFetch<{ message: string }>("/welcome", { method: "GET", token });
}
