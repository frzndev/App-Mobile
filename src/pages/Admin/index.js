import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Admin(){
    const navigation = useNavigation();

    function navigateAdminReparacao(){
        navigation.navigate('AdminReparacao');
    }

    function navigateAdminUtilizadores(){
        navigation.navigate('AdminUtilizadores');
    }

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 50 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 250, height: 250 }}/>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>ADMIN</Text>

            <TouchableOpacity style={styles.button} onPress={navigateAdminReparacao}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Listar Reparações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateAdminUtilizadores}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Listar Utilizadores</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Voltar para o Menu</Text>
            </TouchableOpacity>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 60}}/>

        </View>
    );
}