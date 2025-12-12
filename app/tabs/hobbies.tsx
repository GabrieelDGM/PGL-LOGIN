import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Hobbies() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cosas que me gustan</Text>

        <ScrollView style={styles.list}>
            <Text style={styles.item}>Me gusta el anime</Text>
            <Text style={styles.item}>Me series y peliculas</Text>
            <Text style={styles.item}>Me gusta la montaña y la playita</Text>
            <Text style={styles.item}>Me gusta viajar</Text>
            <Text style={styles.item}>Me gusta mantenerme bien fisicamente</Text>
            <Text style={styles.item}>Me gusta pasar tiempo familiar</Text>
            <Text style={styles.item}>Me gusta la musica variada</Text>
            <Text style={styles.item}>Me gusta el futbol, HALA MADRID</Text>
            <Text style={styles.item}>Me gusta sacar a pasear a mi perro</Text>
            
        </ScrollView>

     </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,    
        backgroundColor: '#ffffffff',
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        textTransform: "capitalize",
        textAlign: "center",
        
    },
    list: {
        marginTop: 20,
    },
    item: {
    borderWidth: 3,
    borderColor: "red",
    padding: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 7,
    borderRadius: 15,
    },
});

