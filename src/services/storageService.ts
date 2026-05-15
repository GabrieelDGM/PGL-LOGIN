import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY } from "./constants";


export async function saveToken(token: string): Promise<void> {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}


export async function getToken(): Promise<string | null> {
  return AsyncStorage.getItem(TOKEN_KEY);
}


export async function removeToken(): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_KEY);
}
