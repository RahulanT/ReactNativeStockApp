import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Bottomnavigator from './bottomnavigator';
import titlepage from './titlepage';

const Stack = createStackNavigator();

export default function MainNavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="titlepage">
                <Stack.Screen name = "titlepage" component = {titlepage}/>
                <Stack.Screen name = "Bottomnavigator" component = {Bottomnavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
};

