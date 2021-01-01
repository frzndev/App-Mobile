import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { logoImg, bgImg, back } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

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

        <ImageBackground source={bgImg} style={styles.backgroundImage}>
        
        <View style={styles.back}>  
            <TouchableOpacity onPress={navigateLogin}>
                <Image source={back} style={{ width: 35, height: 30 }}/>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>  
            <Image source={logoImg} style={{ width: 180, height: 140}}/>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: -10}}>Registar Conta</Text>
        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 150}}>

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginLeft: -220}}>Username: </Text>
            <TextInput 
                style={styles.input}
                placeholder=" Ex: aXXXXX"
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -220}}>Password: </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder=" *************"
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -140}}>Confirmar Password: </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder=" *************"
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -250}}>Email: </Text>
            <TextInput 
                style={styles.input}
                placeholder=" aXXXXX@alunos.ipb.pt"
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -110}}>Numero Mecanográfico: </Text>
            <TextInput 
                style={styles.input}
                placeholder=" Ex: aXXXXX"
            />

            <TouchableOpacity style={[styles.button1, {marginTop: 15}]} onPress={AlertSend}>
                <Text style={{ fontSize: 16, color: "#fff", textAlign: 'center', marginTop: 8}}>Registar</Text>
            </TouchableOpacity>

        </View>

        </ImageBackground>
    );
}