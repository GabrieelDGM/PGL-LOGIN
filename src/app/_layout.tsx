
import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import { Redirect } from "expo-router";
import { getToken } from "../services/storageService";

export default function RootLayout() {
  const [token, setToken] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const t = await getToken();
      setToken(t ?? null);
    })();
  }, []);

  if (token === undefined) return null;       // Espera a leer el token
  if (!token) return <Redirect href="/login" />; // Sin token → login

  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="index" options={{ title: "Portada" }} />
      <Drawer.Screen name="tabs" options={{ title: "Portfolio" }} />
      <Drawer.Screen name="list" options={{ title: "Lista de Animes" }} />
    </Drawer>
  );
}
