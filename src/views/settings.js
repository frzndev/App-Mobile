import React, { useState, useEffect }  from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import config from "../../config/config.json";

import { logoImg, bgImg, back, rectangle, seta, settings, mensagem } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Menu(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    const [idUser, setIdUser] = useState(null);
    const [passwordAntiga, setPasswordAntiga] = useState(null);
    const [novaPassword, setNovaPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [Msg, setMsg] = useState(null);

    useEffect(() => {
        async function getIdUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    });

    async function sendForm() {
        let response = await fetch(`${config.urlRoot}verifyPassword`, {
        method: 'POST',
        body: JSON.stringify({
            id: idUser,
            passwordAntiga: passwordAntiga,
            novaPassword: novaPassword,
            confPassword: confPassword
        }), 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        });
        let json = await response.json();
        setMsg(json);
    }

    return (

        <ImageBackground source={bgImg} style={styles.backgroundImage}>

        <View style={styles.back}>    
                <TouchableOpacity onPress={navigateMenu}>
                    <Image source={back} style={{ width: 35, height: 30 }}/>
                </TouchableOpacity>
        </View>

        <View style={styles.container}>  

            <Image source={logoImg} style={{ width: 180, height: 140}}/>

            <ImageBackground source={rectangle} style={{width: 370, height: 340}}>
            
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                <Text style={{ fontSize: 30, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Alterar Password</Text>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password Antiga:" onChangeText={text => setPasswordAntiga(text)} />
                <TextInput style={[styles.input, {marginTop: 10}]} secureTextEntry={true} placeholder="Nova Password:" onChangeText={text => setNovaPassword(text)} />
                <TextInput style={[styles.input, {marginTop: 10}]} secureTextEntry={true} placeholder="Confirmar Password:" onChangeText={text => setConfPassword(text)} />
                <Text style={{marginTop: 5, marginBottom: 5, color: "#D63578"}} >{Msg}</Text>
                <TouchableOpacity style={styles.button1} onPress={() => sendForm()}>
                <Text style={{fontSize: 14, color: "#fff", textAlign: 'center', marginTop: 10}} >Alterar Password</Text>
                </TouchableOpacity>
            </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}