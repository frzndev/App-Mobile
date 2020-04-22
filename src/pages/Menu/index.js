import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Menu(){
    const navigation = useNavigation();

    function navigateLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>  

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Apresentar Reparação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Listar Reparações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateLogin}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Sair</Text>
            </TouchableOpacity>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 90}}/>
        </View>
    );
}