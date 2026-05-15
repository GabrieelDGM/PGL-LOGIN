import { useState } from "react";
import {View,Text,TextInput,Alert,Pressable,StyleSheet,KeyboardAvoidingView,Platform,SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { login } from "../src/services/authService";
import { saveToken } from "../src/services/storageService";
import { isValidEmail, notEmpty } from "../src/services/validation";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(): Promise<void> {
    if (!isValidEmail(email)) {
      Alert.alert("Login", "El email introducido no es válido");
      return;
    }
    if (!notEmpty(pswd)) {
      Alert.alert("Login", "Introduce la contraseña");
      return;
    }

    setLoading(true);
    try {
      const res = await login({ email, pswd });
      // La API devuelve { userId, email, token }
      await saveToken(res.token);
      Alert.alert("Login", "Inicio de sesión exitoso");
      router.replace("/bienvenida/portada");
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      Alert.alert("Login fallido", message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <Text style={styles.subtitle}>Accede con tu cuenta para continuar</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="ejemplo@correo.com"
              placeholderTextColor="#9aa0a6"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              placeholder="Tu contraseña"
              placeholderTextColor="#9aa0a6"
              value={pswd}
              onChangeText={setPswd}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              loading && styles.buttonDisabled,
              pressed && !loading && styles.buttonPressed,
            ]}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </Pressable>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.divider} />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.secondaryButtonPressed,
            ]}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.secondaryButtonText}>
              No tengo cuenta, registrarme
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
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
  field: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    color: "#111827",
  },
  button: {
    backgroundColor: "#a42121",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: "#811919",
  },
  buttonDisabled: {
    backgroundColor: "#c98080",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#9ca3af",
    fontSize: 13,
  },
  secondaryButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#a42121",
    backgroundColor: "transparent",
  },
  secondaryButtonPressed: {
    backgroundColor: "#fbeaea",
  },
  secondaryButtonText: {
    color: "#a42121",
    fontSize: 15,
    fontWeight: "600",
  },
});
