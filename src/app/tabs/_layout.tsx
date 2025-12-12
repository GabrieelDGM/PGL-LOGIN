import { Tabs } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import PortfolioHeader from "../../../components/PortflioHeader";

export default function TabsLayout() {
    return (

        
        <View style={styles.container}>
            <PortfolioHeader />

            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#ffffffff",
                        height: 65,
                        paddingBottom: 5,
                    },
                }}
            >
                <Tabs.Screen
                    name="hobbies"
                    options={{
                        title: "Mis Hobbies",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../../../assets/image/goku.png")}
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 15,
                                    
                                }}
                            />
                        ),
                    }}
                />


                <Tabs.Screen
                    name="qrcode"
                    options={{
                        title: "Mi Repositorio",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../../../assets/image/saitama.png")}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    
                                }}
                            />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
