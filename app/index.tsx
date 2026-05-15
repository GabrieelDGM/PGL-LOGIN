import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Redirect } from "expo-router";
import { getToken } from "../src/services/storageService";

export default function Index() {
  const [checked, setChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      setHasToken(Boolean(token));
      setChecked(true);
    })();
  }, []);

  if (!checked) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#a42121" />
      </View>
    );
  }

  return <Redirect href={hasToken ? "/bienvenida/portada" : "/login"} />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
});
