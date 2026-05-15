import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { register } from "../src/services/authService";
import {
  isValidEmail,
  isStrongPassword,
  notEmpty,
} from "../src/services/validation";

export default function RegisterScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    console.log("=== BOTÓN REGISTRO PULSADO ===");
    console.log("Datos:", { fullname, email, pswd });

    if (!notEmpty(fullname)) {
      console.log("Nombre vacío");
      window.alert("El nombre no puede estar vacío");
      return;
    }
    if (!isValidEmail(email)) {
      console.log("Email no válido");
      window.alert("El email introducido no es válido");
      return;
    }
    if (!isStrongPassword(pswd)) {
      console.log("Contraseña débil");
      window.alert(
        "Contraseña débil: mínimo 6 caracteres con letras y números"
      );
      return;
    }

    setLoading(true);
    try {
      console.log("Llamando a register...");
      const res = await register({ fullname, email, pswd });
      console.log("Registro OK:", res);
      window.alert("Registro exitoso. Ahora puedes iniciar sesión");
      router.replace("/login");
    } catch (e) {
      console.log("Error en registro:", e);
      const message = e instanceof Error ? e.message : String(e);
      window.alert("Registro fallido: " + message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Rellena los datos para registrarte</Text>

        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          placeholder="Nombre y apellidos"
          value={fullname}
          onChangeText={setFullname}
          style={styles.input}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="ejemplo@correo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="Mín. 6 caracteres con letras y números"
          value={pswd}
          onChangeText={setPswd}
          secureTextEntry
          style={styles.input}
        />

        <Pressable
          style={styles.button}
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Registrando..." : "Registrarme"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.secondaryButtonText}>
            Ya tengo cuenta, ir al login
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#f5f6fa",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#a42121",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#a42121",
    marginTop: 12,
  },
  secondaryButtonText: {
    color: "#a42121",
    fontSize: 15,
    fontWeight: "600",
  },
});
