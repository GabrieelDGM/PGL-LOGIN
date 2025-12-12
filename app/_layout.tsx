import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
      }}
    >
      {}
      <Drawer.Screen
        name="bienvenida/portada"
        options={{
          title: "Portada",
        }}
      />

      {}
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Portfolio",
        }}
      />

      {}
      <Drawer.Screen
        name="list"
        options={{
          title: "Lista de Animes",
        }}
      />
    </Drawer>
  );
}
