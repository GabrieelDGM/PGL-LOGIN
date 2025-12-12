import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="index"
        options={{ title: "Portada" }}
          
        
      />

      <Drawer.Screen
        name="tabs"
        options={{ title: "Portfolio" }}
        // para ocultar un archivo seria
        // drawerItemStyle = {Display: 'none'}
      />

      <Drawer.Screen
        name="list"
        options={{ title: "Lista de Animes" }}
      />
    </Drawer>
  );
}
