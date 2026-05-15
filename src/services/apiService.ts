import { API_BASE_URL } from "./constants";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface ApiOptions {
  method?: HttpMethod;
  body?: unknown;
  token?: string | null;
}


export interface ApiResponse<T> {
  message: string;
  object: T | null;
  statusCode: number;
}


export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const { method = "GET", body, token } = options;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data: ApiResponse<T> | null = null;
  try {
    data = (await response.json()) as ApiResponse<T>;
  } catch {
    // Ignora errores de parseo si no hay cuerpo o JSON inválido.
  }

  if (!response.ok) {
    const message = data?.message || `Error ${response.status}`;
    throw new Error(message);
  }

  if (!data) {
    throw new Error("Respuesta vacía del servidor");
  }

  return data.object as T;
}
