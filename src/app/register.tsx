import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";
import { register } from "../services/authService";
import { isValidEmail, isStrongPassword, notEmpty } from "../services/validation";

export default function RegisterScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!notEmpty(fullname)) return Alert.alert("Validación", "El nombre no puede estar vacío");
    if (!isValidEmail(email)) return Alert.alert("Validación", "Email no válido");
    if (!isStrongPassword(pswd)) return Alert.alert("Validación", "Contraseña débil (mínimo 6, letras y números)");

    setLoading(true);
    try {
      await register({ fullname, email, pswd });
      Alert.alert("Registro", "Registro exitoso. Ahora puedes iniciar sesión.");
      router.replace("/login");
    } catch (e: any) {
      Alert.alert("Registro", e.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Registro de usuario</Text>
      <TextInput placeholder="Nombre completo" value={fullname} onChangeText={setFullname} style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Contraseña" value={pswd} onChangeText={setPswd} secureTextEntry style={{ borderWidth: 1, padding: 8 }} />
      <Button title={loading ? "Registrando..." : "Registrarse"} onPress={handleRegister} disabled={loading} />
      <Button title="Ya tengo cuenta, ir a Login" onPress={() => router.push("/login")} />
    </View>
  );
}
