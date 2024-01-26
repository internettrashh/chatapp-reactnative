import React, { useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TextInput,Pressable, Alert,Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
import bak from '../assets/myback.jpeg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalContext } from '../context/index';


const { width } = Dimensions.get('window');

export default function Homescreen({ navigation }) {
   
  
    const {
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
      } = useContext(GlobalContext);
    
      function handleRegisterAndSignIn(isLogin) {
        if (currentUserName.trim() !== "") {
          const index = allUsers.findIndex(
            (userItem) => userItem === currentUserName
          );
    
          if (isLogin) {
            if (index === -1) {
              Alert.alert("Please register first");
            } else {
              setCurrentUser(currentUserName);
            }
          } else {
            if (index === -1) {
              allUsers.push(currentUserName);
              setAllUsers(allUsers);
              setCurrentUser(currentUserName);
            } else {
              Alert.alert("Already registered ! Please login");
            }
          }
    
          setCurrentUserName("");
        } else {
          Alert.alert("User name field is empty");
        }
    
        Keyboard.dismiss();
      }
    
      useEffect(() => {
        if (currentUser.trim() !== "") navigation.navigate("Chatscreen");
      }, [currentUser]);
    
      console.log(allUsers, currentUser);
    




    return (
         <ImageBackground source={bak} style={{ flex: '1',width: '100%', height: '100%'}} >
        <View style={styles.main}>

   
    <View style={styles.lottie}>
     <LottieView 
    source={require('../assets/Animation - 1706030344129.json')} 
    autoPlay 
    loop 
    style={{ width: width*0.9, height:  width }} // adjust the width and height as needed
/>
<View style={styles.content}>
        {showLoginView ? (
          <View style={styles.infoBlock}>
            <View style={styles.loginInputContainer}>
              <Text style={styles.heading}>Enter Your User Name</Text>
              <TextInput
                autoCorrect={false}
                placeholder="Enter your user name"
                style={styles.loginInput}
                onChangeText={(value) => setCurrentUserName(value)}
                value={currentUserName}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Pressable
                onPress={() => handleRegisterAndSignIn(false)}
                style={styles.button}
              >
                <View>
                  <Text style={styles.buttonText}>Register</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleRegisterAndSignIn(true)}
                style={styles.button}
              >
                <View>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.infoBlock}>
            <Text style={styles.heading}>Connect , Grow and Inspire</Text>
            <Text style={styles.subHeading}>
              Connect people around the world for free
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setShowLoginView(true)}
            >
              <View>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>








    </View>
    
    </View>
    </ImageBackground>
    );
}



const styles = StyleSheet.create({
  
    lottie:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        flex: 1
      
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
       
      },
      infoBlock: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
      },
      subHeading: {
        fontSize: 15,
        color: "#B4B0D2",
        marginBottom: 15,
      },
      loginInput: {
        borderRadius: 50,
        borderWidth: 1,
        padding: 8,
      },
      button: {
        backgroundColor: "#635FF6",
        padding: 15,
        marginVertical: 10,
        width: "34%",
        elevation: 1,
        borderRadius: 50,
      },
      buttonWrapper: {
        flexDirection: "row",
        gap: 10,
      },
      buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
      },
})