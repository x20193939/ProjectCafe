import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Platform} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Welcome To FunGalaxy
      </Text>
      <Image source={require('./assets/Images/FGStacked.png')} resizeMode="cover"/>
      {/* <StatusBar style="auto" />  */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86A8e7',
    justifyContent: "center",
    alignItems: "center",
   
  },
  /* Image: {
    height: '200',
    width: '300',
    resizeMode: 'contain',
  } */
});
