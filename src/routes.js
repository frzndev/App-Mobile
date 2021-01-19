import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import { Inicio, Login, Registar, Esquecer, Mensagem, Settings, Menu, AdminMenu, Requisitar, Devolucao, AdminCandidaturas, AdminContas, AdminDevolucoes, AdminEquipamentos } from '../src/index';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Inicio" component={Inicio} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Registar" component={Registar} />
                <AppStack.Screen name="Esquecer" component={Esquecer} />
                <AppStack.Screen name="Mensagem" component={Mensagem} />
                <AppStack.Screen name="Settings" component={Settings} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="AdminMenu" component={AdminMenu} />
                <AppStack.Screen name="Requisitar" component={Requisitar} />
                <AppStack.Screen name="Devolucao" component={Devolucao} />
                <AppStack.Screen name="AdminCandidaturas" component={AdminCandidaturas} />
                <AppStack.Screen name="AdminContas" component={AdminContas} />
                <AppStack.Screen name="AdminDevolucoes" component={AdminDevolucoes} />
                <AppStack.Screen name="AdminEquipamentos" component={AdminEquipamentos} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}