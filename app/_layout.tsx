import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import { usePathname } from "expo-router";
import { getToken } from "../src/services/storageService";

export default function RootLayout() {
  const pathname = usePathname();
  const [hasToken, setHasToken] = useState<boolean>(false);


  useEffect(() => {
    (async () => {
      const token = await getToken();
      setHasToken(!!token);
    })();
  }, [pathname]);

 
  const hideIfNoToken = hasToken ? undefined : { display: "none" as const };

  return (
    <Drawer
      screenOptions={{
        headerShown: hasToken,
        headerStyle: { backgroundColor: "#a42121" },
        headerTintColor: "#ffffff",
        drawerActiveTintColor: "#a42121",
        drawerLabelStyle: { fontWeight: "600" },
       
        swipeEnabled: hasToken,
      }}
    >
      
      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="register"
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />

     
      <Drawer.Screen
        name="bienvenida/portada"
        options={{
          title: "Bienvenida",
          drawerItemStyle: hideIfNoToken,
        }}
      />
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Portfolio",
          drawerItemStyle: hideIfNoToken,
        }}
      />
      <Drawer.Screen
        name="list"
        options={{
          title: "Lista de Animes",
          drawerItemStyle: hideIfNoToken,
        }}
      />
    </Drawer>
  );
}