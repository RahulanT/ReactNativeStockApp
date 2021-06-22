import * as React from 'react';
import { View, Text , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import titlepage from './titlepage';
import homepage from './homepage';
import transactionhistpage from './transactionhist';
import portfolio from './portfolio';


const Stack = createStackNavigator();

export default function Thenavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="titlepage">
                <Stack.Screen name ="titlepage" component = {titlepage}/ >
                <Stack.Screen name ="homepage" component = {homepage}/>
                <Stack.Screen name ="portfolio" component = {portfolio}/>
                <Stack.Screen name ="transactionhist" component = {transactionhistpage}/>

            </Stack.Navigator>
        </NavigationContainer>
        );
};

