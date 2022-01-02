import React from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';

import Screen from '../components /Screen';
import ListItem from '../components /ListItem';
//rsf is a shortcut creates a function component 
import colors from '../config/colors';
import Icon from '../components /Icon';
import ListItemSeperatorComponent from '../components /ListItemSeperator';

const menuItems = [
    {
        title: "My Menu",
        icon: {
            name: "format-list-bulleted",
            backgroundcolor: colors.secondary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundcolor: colors.backgroundColor
        }
    }

]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Sharon Farrell"
                    subTitle="info@fungalaxy.ie"
                    image={require('../assets/FGStacked.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperatorComponent}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundcolor={item.icon.backgroundcolor} />
                            } />
                    }
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }/>
        </Screen>

    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    },
})
export default AccountScreen;