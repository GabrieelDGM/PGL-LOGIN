import { useState } from "react";
import { View, Text, TextInput, Alert, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { login } from ".././src/services/authService";
import { saveToken } from ".././src/services/storageService";
import { isValidEmail, notEmpty } from ".././src/services/validation";

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
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      Alert.alert("Login fallido", message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 12, gap: 25 }}>
      <Text style={{ fontSize: 20, fontWeight: "800" }}>Iniciar sesión</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        value={pswd}
        onChangeText={setPswd}
        secureTextEntry
        style={styles.input}
      />

      {}
      <Pressable style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Entrando..." : "Entrar"}</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => router.push("/register")}>
        <Text style={styles.secondaryButtonText}>No tengo cuenta, registrarme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },
  secondaryButtonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
});
