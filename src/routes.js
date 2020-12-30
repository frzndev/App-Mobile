import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Inicio from'./views/Inicio';
import Login from './views/Login';
import Registar from './views/Registar';
import Esquecer from './views/Esquecer';
import Mensagem from './views/Mensagem';
import Menu from './views/Menu';
import Admin from './views/Admin';
import AdminMenu from './views/AdminMenu';
import Requisitar from './views/Requisitar';
import Devolucao from './views/Devolucao';

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