import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Registar(){
    const navigation = useNavigation();

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function AlertSend(){
        Alert.alert(
            'Registado com Sucesso !'
        )
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 10 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 150, height: 150 }}/>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>REGISTO</Text>

            <View>
                <TextInput 
                    style={styles.input}
                    placeholder=" * Username:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Nome:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Telemovel:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Email:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Morada:"
                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder=" * Password:"
                />

                <TouchableOpacity style={styles.button} onPress={AlertSend}>
                    <Text style={{ fontSize: 18, color: "#fff" }}>Registar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navigateLogin}>
                    <Text style={{ fontSize: 18, color: "#fff" }}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 5}}/>

        </View>
    );
}