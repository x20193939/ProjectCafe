import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
/* import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from './app/components /AppButton';

import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from "@expo/vector-icons";
 */
import AppText from './app/components /AppText';
import Card from './app/components /Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components /Screen';
import Icon from "./app/components /Icon";
import ListItem from './app/components /ListItem';
import AccountScreen from './app/screens/AccountScreen';
import MenuScreen from './app/screens/MenuScreen';
import LoginScreen from './app/screens/LoginScreen';
import AppTextInput from './app/components /AppTextInput';
import AppPicker from './app/components /AppPicker';

const categories = [
  { label: "Beverages", value: 1 },
  { label: "Gourmet Sandwiches", value: 2 },
  { label: "Kids Food", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return <MenuScreen/>;
}
