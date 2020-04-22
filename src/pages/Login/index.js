import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Login(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 50 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 250, height: 250 }}/>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>LOGIN</Text>

            <View>
                <TextInput 
                    style={styles.input}
                    placeholder=" Digite seu Username:"
                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder=" Digite sua Password"
                />
                <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                    <Text style={{ fontSize: 18, color: "#fff" }}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 90}}/>

        </View>
    );
}