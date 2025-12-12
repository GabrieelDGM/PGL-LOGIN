import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function portada() {
  return (
    <ImageBackground
      source={require("./image/portada.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <Text style={styles.header}>Bienvenido a mi aplicacion digamos que esta bien creada, disfruta</Text>

        <Text style={styles.subtitle}>
            Aqui veras mi lista de hobbies y algunas cositas mas explora por tu cuenta...
          
        </Text>

        <Link href="/tabs" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ir al Portfolio</Text>
          </TouchableOpacity>
        </Link>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: "#a42121cc",
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "#000",
  },
  button: {
    backgroundColor: "#a42121cc",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
