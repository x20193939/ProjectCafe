import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import App from '../../App';
import AppButton from '../components /AppButton';

function WelcomeScreen(props) {
    return (
      <ImageBackground 
      blurRadius={15}
      style={styles.background}
      source={require("../assets/FGBackground.png")}
      >
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/FGStacked.png")}/>
            <Text style={styles.tagline}>Welcome to Fun Galaxy!</Text>
           </View>
           <View style={styles.buttonsContainer}>
            <AppButton title="login"/>
            <AppButton title="Register" color="secondary"/>
           </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1, 
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer:{
        padding: 20,
        width: "100%",
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
        fontSize: 200,
        
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: "#fff"
    
        

    },   
})

export default WelcomeScreen;