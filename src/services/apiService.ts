// src/services/apiService.ts
const API_BASE_URL = "http://192.168.X.Y:5000"; 

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function apiFetch<T>(
  path: string,
  options: { method?: HttpMethod; body?: unknown; token?: string | null } = {}
): Promise<T> {
  const { method = "GET", body, token } = options;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {}

  if (!res.ok) {
    const msg = data?.message || `Error ${res.status}`;
    throw new Error(msg);
  }
  return data as T;
}
