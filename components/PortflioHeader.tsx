import { View, Text, Image, StyleSheet } from "react-native";

export default function PortfolioHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../components/image/luffyDos.png")} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Sobre mí</Text>
        <Text style={styles.description}>
          Soy estudiante de desarrollo de aplicaciones multiplataforma,
          no se me da muy bien pero estoy aprendiendo y esforzandome cada dia para sacarlo adelante,
          tambien me gusta mucho los deportes,los animes, viajar etc.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ffffffff",
    borderBottomWidth: 1,
    borderColor: "#ffffffff",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#000000ff",
    borderColor: "red",
    borderWidth: 2,
    padding: 5,
  },
});
