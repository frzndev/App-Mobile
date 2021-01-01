import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { logoImg, bgImg, ipb } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Inicio(){
    const navigation = useNavigation();

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function navigateRegistar(){
        navigation.navigate('Registar');
    }

    return (
        <ImageBackground source={bgImg} style={styles.backgroundImage}>

            <View style={styles.container}>     
                <Text style={styles.container ,{ color: "#fff", fontWeight: "bold", fontSize: 13, marginTop: 300}}>Gestão de Empréstimos e de Manutenção</Text>
                <Text style={styles.container ,{ color: "#fff", fontWeight: "bold", fontSize: 13}}>de Equipamentos Informáticos</Text>
                <Text style={styles.container ,{ color: "#fff", fontWeight: "bold", fontSize: 13}}>e AudioVisuais</Text>
                <Image source={logoImg} style={styles.container ,{ width: 350, height: 350, marginTop: 50 }}/>
            </View>
            
            <View style={styles.container}>
                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 200 }}>Faz login e candidata-te já a receber um</Text>
                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>computador para as tuas aulas online</Text>

                <TouchableOpacity style={[styles.button1, {marginTop: 15, width: 200}]} onPress={navigateRegistar}>
                    <Text style={{ fontSize: 16, color: "#fff", textAlign: 'center', marginTop: 7}}>Quero-me Registar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button2, {marginTop: 15, width: 200, marginLeft: 10}]} onPress={navigateLogin}>
                    <Text style={{ fontSize: 16, color: "#fff", textAlign: 'center', marginTop: 7}}>Já tenho Conta</Text>
                </TouchableOpacity>            
            </View>

            <View style={styles.container}>
                <Image source={ipb} style={{width: 376, height: 73, marginTop: 90}}/>
            </View>
        </ImageBackground>
    );
}