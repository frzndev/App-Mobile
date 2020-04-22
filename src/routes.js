import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Menu from './pages/Menu';
import Reparacao from './pages/Reparacao';
import Listar from './pages/Listar';
import Admin from './pages/Admin';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="Reparacao" component={Reparacao} />
                <AppStack.Screen name="Listar" component={Listar} />
                <AppStack.Screen name="Admin" component={Admin} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}