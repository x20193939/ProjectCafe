import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground} from 'react-native';

export default function App() {
    const handlePress = () => console.log("Text pressed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Welcome To FunGalaxy
      </Text>
      <StatusBar style="auto" />
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
      FGStacked: {
        width: 200,
        height: 300,
      } 
    });

  const DisplayAnImage = () => {
    return (
      <view style={styles.container}>
          <Image
            style={styles.FGStacked}
            source={require('./FGStacked.png')}
      />
      </view>
    )
  }
