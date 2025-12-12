import { useState } from "react";
import { View, Text, TextInput, Alert, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { register } from ".././src/services/authService";
import { isValidEmail, isStrongPassword, notEmpty } from ".././src/services/validation";

export default function RegisterScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!notEmpty(fullname)) return Alert.alert("Validación", "El nombre no puede estar vacío");
    if (!isValidEmail(email)) return Alert.alert("Validación", "Email no válido");
    if (!isStrongPassword(pswd)) 
      return Alert.alert("Validación", "Contraseña débil (mínimo 6 caracteres, mezcla letras y números)");

    setLoading(true);

    try {
      const res = await register({ fullname, email, pswd });

      Alert.alert("Registro", "Registro exitoso. Bienvenido!");
      router.replace("/tabs");
    } catch (e: any) {
      console.log("Error en registro:", e);
      Alert.alert("Registro", e.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>

      <TextInput
        placeholder="Nombre completo"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
      />

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
      <Pressable style={styles.button} onPress={handleRegister} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? "Registrando..." : "REGISTRARSE"}
        </Text>
      </Pressable>

      {}
      <Pressable style={styles.secondaryButton} onPress={() => router.push("/login")}>
        <Text style={styles.secondaryButtonText}>
          YA TENGO CUENTA, IR A LOGIN
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    marginTop: 5,
  },
  secondaryButtonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
});