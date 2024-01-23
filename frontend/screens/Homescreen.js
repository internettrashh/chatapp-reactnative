import { View, Text ,StyleSheet,Dimensions, SafeAreaView,ImageBackground} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import  bak from '../assets/backgroundimage.jpeg';
const {width, height, } = Dimensions.get('window');
export default function Homescreen() {
  return (
    <View style={styles.main}>

    <ImageBackground source={bak} style={{ flex: '1',width: '100%', height: '100%'}}>
    <View style={styles.lottie}>
     <LottieView 
    source={require('../assets/Animation - 1706030344129.json')} 
    autoPlay 
    loop 
    style={{ width: width*0.9, height:  width }} // adjust the width and height as needed
/>
    </View>
    </ImageBackground>
    </View>
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
      
    }
})