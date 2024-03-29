import { View, Text,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import GlobalState from '../context';
import { GlobalContext } from '../context';
import { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';


export default function Chatscreen() {
    const { currentUser } = useContext(GlobalContext);
  return (
    <View style={styles.mainWrapper}  options={{ headerShown: false }}>
        <View style={styles.topContainer}>
            <View style={styles.header } >
            <Text style={styles.heading}>welcome{currentUser}!</Text>
           <Pressable>
            
           <AntDesign name="logout" size={30} color="black" />
           </Pressable>
           </View>
        </View>
        <View style={styles.listContainer}></View>
        <View style={styles.bottomContainer}></View>
        </View>
  );
}


















const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: "#eee",
      flex: 1,
    },
    topContainer: {
      backgroundColor: "",
      height: 70,
      width: "100%",
      padding: 20,
      justifyContent: "center",
      marginBottom: 15,
      flex: 0.3,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: 30,
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
    listContainer: {
      flex: 3.4,
      paddingHorizontal: 10,
    },
    bottomContainer: {
      flex: 0.3,
      padding: 10,
    },
    button: {
      backgroundColor: "#703efe",
      padding: 12,
      width: "100%",
      elevation: 1,
      borderRadius: 50,
    },
    buttonText: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 20,
    },
  });