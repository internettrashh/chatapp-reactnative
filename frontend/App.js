import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import Messagescreen from './screens/Messagescreen';
import Chatscreen from './screens/Chatscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Globalstate from './context/index';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Globalstate>
      <StatusBar hidden={true} />
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Homescreen}options={{headerShown :false}} />
        <Stack.Screen name="Chatscreen" component={Chatscreen} options={{headerShown :false}}/>
        <Stack.Screen name="Messagescreen" component={Messagescreen} options={{headerShown :false}}/>
    </Stack.Navigator>
    </NavigationContainer>
   
    </Globalstate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
