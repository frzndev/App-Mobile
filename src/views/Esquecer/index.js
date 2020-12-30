import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/img/logo.png';
import bgImg from '../../../assets/img/bg.png';
import back from '../../../assets/img/back.png';

import styles from './styles';

export default function Esquecer(){
    const navigation = useNavigation();

    function navigateRegistar(){
        navigation.navigate('Registar');
    }

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function AlertSend(){
        Alert.alert(
            'Email de Recuperação Enviado com Sucesso !'
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

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: -10}}>Recuperar Password</Text>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginTop: 50}}>Insere o teu Email para poderes </Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, }}>Recuperar a tua Password</Text>

        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft: -250}}>Email: </Text>

            <TextInput 
                style={styles.input}
                 placeholder="  aXXXXX@alunos.ipb.pt"
            />

            <TouchableOpacity style={styles.button1} onPress={AlertSend}>
                <Text style={{ fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Enviar Email</Text>
            </TouchableOpacity>

        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>

            <Text style={{ fontSize: 18, color: "#000", marginBottom: 10}}>Ainda não tens conta ?</Text>

            <TouchableOpacity style={styles.button1} onPress={navigateRegistar}>
                <Text style={{ fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 9}}>Quero-me registar</Text>
            </TouchableOpacity>

        </View>

        </ImageBackground>
    );
}