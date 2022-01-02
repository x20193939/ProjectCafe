import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components /Card';
import colors from '../config/colors';
import Screen from '../components /Screen';

const menu = [
    {
        id: 1,
        title: 'Beverages',
        price: 3.50,
        image: require('../assets/Coffee.jpg')
    },
    {
        id: 2,
        title: 'Gourmet Sandwiches',
        description: 'cafe Latte',
        price: 7.50,
        image: require('../assets/Coffee.jpg')
    }
];
function MenuScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={menu}
                keyExtractor={menu => menu.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        description={item.description}
                        subTitle={"€" + item.price}
                        image={item.image} />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    },
})
export default MenuScreen;