import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const qrValue = "https://github.com/GabrieelDGM/PGL-Navigation.git";

export default function qrcode() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Codigo QR</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={250}
          />
          </View>
          <Text style={styles.subtitle}>Escanealo Adri y veras mi repositorio SIIU </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 25,
    fontWeight: "200",
    marginBottom: 15,
    textAlign: "center",
  },
  qrContainer: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    color: "#000000ff",
    borderColor: "black",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 25,
    color: "#000000ff",
    textAlign: "center",
  },
});

