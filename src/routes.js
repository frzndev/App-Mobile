import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Inicio from'./pages/Inicio';
import Login from './pages/Login';
import Registar from './pages/Registar';
import Esquecer from './pages/Esquecer';
import Mensagem from './pages/Mensagem';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import AdminMenu from './pages/AdminMenu';
import Requisitar from './pages/Requisitar';
import Devolucao from './pages/Devolucao';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Inicio" component={Inicio} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Registar" component={Registar} />
                <AppStack.Screen name="Esquecer" component={Esquecer} />
                <AppStack.Screen name="Mensagem" component={Mensagem} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="Admin" component={Admin} />
                <AppStack.Screen name="AdminMenu" component={AdminMenu} />
                <AppStack.Screen name="Requisitar" component={Requisitar} />
                <AppStack.Screen name="Devolucao" component={Devolucao} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}