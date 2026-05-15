import AsyncStorage from "@react-native-async-storage/async-storage";
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
const USERS_KEY = "offline_users";

interface OfflineUser {
  id: number;
  fullname: string;
  email: string;
  pswd: string;
}

async function getUsers(): Promise<OfflineUser[]> {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  return raw ? (JSON.parse(raw) as OfflineUser[]) : [];
}

async function saveUsers(users: OfflineUser[]): Promise<void> {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}
export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  const email = payload.email.trim().toLowerCase();
  const pswd = payload.pswd.trim();
  const fullname = payload.fullname.trim();
  const users = await getUsers();

  if (users.some((u) => u.email === email)) {
    throw new Error("Email already registered.");
  }

  const newUser: OfflineUser = {
    id: Date.now(),
    fullname,
    email,
    pswd,
  };

  users.push(newUser);
  await saveUsers(users);

  return {
    id: newUser.id,
    fullname: newUser.fullname,
    email: newUser.email,
  };
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const email = payload.email.trim().toLowerCase();
  const pswd = payload.pswd.trim();
  const users = await getUsers();
  const user = users.find((u) => u.email === email && u.pswd === pswd);

  if (!user) {
    throw new Error("Invalid user or password.");
  }

  const fakeToken = `offline-${user.id}-${Date.now()}`;

  return {
    userId: user.id,
    email: user.email,
    token: fakeToken,
  };
}

export async function getWelcomeMessage(token: string): Promise<string> {
  if (!token || !token.startsWith("offline-")) {
    throw new Error("Token inválido");
  }

  const parts = token.split("-");
  const userId = Number(parts[1]);
  const users = await getUsers();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  return `¡Estás logeado correctamente, ${user.fullname}. Enhorabuena!`;
}

/*
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
*/

/*export interface RegisterPayload {
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
  */

