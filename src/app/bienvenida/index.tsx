import { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { router } from "expo-router";
import { getToken, removeToken } from "../../services/storageService";
import { getWelcomeMessage } from "../../services/authService";

export default function BienvenidaScreen() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => { (async () => setToken(await getToken()))(); }, []);

  async function handleWelcome() {
    if (!token) return Alert.alert("Bienvenida", "No hay token. Inicia sesión.");
    try {
      const res = await getWelcomeMessage(token);
      Alert.alert("Bienvenida", res.message);
    } catch (e: any) {
      Alert.alert("Bienvenida", e.message || "Error al obtener el mensaje");
    }
  }

  async function handleLogout() {
    await removeToken();
    router.replace("/login");
  }

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>¡Bienvenido!</Text>
      <Button title="Mostrar mensaje de bienvenida" onPress={handleWelcome} />
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}
