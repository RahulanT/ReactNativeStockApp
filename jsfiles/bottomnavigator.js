import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import titlepage from './titlepage';
import homepage from './homepage';
import searchpage from './searchpage';
import transactionhistpage from './transactionhist';
import portfolio from './portfolio';


const BottomStack = createBottomTabNavigator();

const Bottomnavigator = () => {
    return (
            <BottomStack.Navigator initialRouteName="homepage">
                {/* <Stack.Screen name ="titlepage" component = {titlepage}/ > */}
                <BottomStack.Screen name ="homepage" component = {homepage}/>
                <BottomStack.Screen name ="searchpage" component = {searchpage}/>
                <BottomStack.Screen name ="portfolio" component = {portfolio}/>

                {/* <Stack.Screen name ="transactionhist" component = {transactionhistpage}/> */}

            </BottomStack.Navigator>
        );
};

export default Bottomnavigator;
