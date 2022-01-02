import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components /AppText';

import ListItem from '../components /ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/Coffee.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>CAFE  LATTE</AppText>
                <AppText style={styles.price}>€3.00</AppText>
                <View style={styles.userContainer}>
                <ListItem
                image={require ("../assets/FGBluePurpleLong.png")}
                title="Sharon Farrell"
                subTitle="5 Listings"
                />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding: 20,
    },
    image:{
        width:"100%",
        height: 300,
    },
    price:{
        color: colors.backgroundColor,
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer:{
        marginVertical: 30
        ,
    },
})

export default ListingDetailsScreen;