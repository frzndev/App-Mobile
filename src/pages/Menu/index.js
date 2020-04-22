import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Menu(){
    const navigation = useNavigation();

    function navigateReparacao(){
        navigation.navigate('Reparacao');
    }

    function navigateListar(){
        navigation.navigate('Listar');
    }

    function navigateAdmin(){
        navigation.navigate('Admin');
    }

    function navigateLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>  

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 50 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 250, height: 250 }}/>

            <TouchableOpacity style={styles.button} onPress={navigateReparacao}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Apresentar Reparação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateListar}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Listar Reparações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateAdmin}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateLogin}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Sair</Text>
            </TouchableOpacity>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 60}}/>

        </View>
    );
}