import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";
import { login } from "../services/authService";
import { saveToken } from "../services/storageService";
import { isValidEmail, notEmpty } from "../services/validation";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!isValidEmail(email)) return Alert.alert("Login", "Email no válido");
    if (!notEmpty(pswd)) return Alert.alert("Login", "Introduce la contraseña");

    setLoading(true);
    try {
      const res = await login({ email, pswd });
      await saveToken(res.token);
      Alert.alert("Login", "Inicio de sesión exitoso");
      router.replace("/bienvenida");
    } catch (e: any) {
      Alert.alert("Login fallido", e.message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Iniciar sesión</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Contraseña" value={pswd} onChangeText={setPswd} secureTextEntry style={{ borderWidth: 1, padding: 8 }} />
      <Button title={loading ? "Entrando..." : "Entrar"} onPress={handleLogin} disabled={loading} />
      <Button title="No tengo cuenta, registrarme" onPress={() => router.push("/register")} />
    </View>
  );
}
