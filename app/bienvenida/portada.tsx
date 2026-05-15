import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { Link, router } from "expo-router";
import { getToken, removeToken } from "../../src/services/storageService";
import { getWelcomeMessage } from "../../src/services/authService";

export default function Portada() {
  const [checking, setChecking] = useState(true);
  const [loadingMsg, setLoadingMsg] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (!token) {
        router.replace("/login");
        return;
      }
      setChecking(false);
    })();
  }, []);

  async function handleCheckToken() {
    setLoadingMsg(true);
    try {
      const token = await getToken();
      if (!token) {
        window.alert("No hay token. Vuelve a iniciar sesión");
        router.replace("/login");
        return;
      }
      const message = await getWelcomeMessage(token);
      window.alert(message);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      window.alert("Error: " + message);
    } finally {
      setLoadingMsg(false);
    }
  }

  async function handleLogout() {
    const ok = window.confirm("¿Seguro que quieres cerrar sesión?");
    if (ok) {
      await removeToken();
      router.replace("/login");
    }
  }

  if (checking) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#a42121" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("./image/portada.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.header}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>
          Has iniciado sesión correctamente. Explora la app desde el menú lateral.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCheckToken}
          disabled={loadingMsg}
        >
          <Text style={styles.buttonText}>
            {loadingMsg ? "Comprobando..." : "Comprobar token"}
          </Text>
        </TouchableOpacity>

        <Link href="/tabs" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ir al Portfolio</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
  },
  header: {
    fontSize: 38,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#f3f4f6",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#a42121cc",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: "100%",
    marginBottom: 12,
  },
  logoutButton: {
    backgroundColor: "#374151cc",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
});
