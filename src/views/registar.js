import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import SelectInput from 'react-native-select-input-ios';

import { useNavigation } from '@react-navigation/native';

import config from "../../config/config.json";

import { logoImg, bgImg, back } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Registar(){

    const [ user, setUser ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ confPassword, setConfPassword ] = useState(null);
    const [ nome, setNome ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ telefone, setTelefone ] = useState(null);
    const [ escola, setEscola ] = useState(null);
    const tipodeutilizador = 0;

    const options = [
        { value: 0, label: 'Seleciona a tua Escola' },
        { value: 1, label: 'ESA' },
        { value: 2, label: 'ESE' },
        { value: 3, label: 'ESTIG' },
        { value: 4, label: 'ESACT' },
        { value: 5, label: 'ESSA' }
    ];

    const navigation = useNavigation();

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function AlertSend(){
        Alert.alert(
            'Registado com Sucesso !'
        );
        navigation.navigate('Login');
    }

    // Função para validar os dados introduzidos
    async function verifyForm(){
        if ( user === null || password === null || confPassword === null || nome === null || email === null || escola === null ){
            Alert.alert(
                'Tens de preencher todos os dados pretendidos !'
            );
        } else {
            if ( password === confPassword ){
                sendForm();
                AlertSend();
            } else {
                Alert.alert(
                    'As Passwords Não Coincidem'
                );
            }
        }
    }

    // Função para enviar o Dados para o BackEnd
    async function sendForm(){
        let response = await fetch(`${config.urlRoot}register`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: user,
                password: password,
                nome: nome, 
                email: email,
                telefone: telefone,
                escola: escola,
                tipodeutilizador: tipodeutilizador
            })
        });
    }

    return (

        <ImageBackground source={bgImg} style={styles.backgroundImage}>
        
        <View style={styles.back}>  
            <TouchableOpacity onPress={navigateLogin}>
                <Image source={back} style={{ width: 35, height: 30 }}/>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>  
            <Image source={logoImg} style={{ width: 180, height: 140 }}/>
        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 150}}>
            
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: 15}}>Registar Conta</Text>

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginLeft: -100}}>Número Mecanográfico: * </Text>
            <TextInput 
                style={styles.input}
                placeholder="Ex: aXXXXX"
                onChangeText={text => setUser(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -210}}>Password: * </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="*************"
                onChangeText={text => setPassword(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -130}}>Confirmar Password: * </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="*************"
                onChangeText={text => setConfPassword(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -240}}>Nome: * </Text>
            <TextInput 
                style={styles.input}
                placeholder="Ex: Alfredo Gomes"
                onChangeText={text => setNome(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -240}}>Email: * </Text>
            <TextInput 
                style={styles.input}
                placeholder="Ex: aXXXXX@alunos.ipb.pt"
                onChangeText={text => setEmail(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -225}}>Telefone: </Text>
            <TextInput 
                style={styles.input}
                placeholder="Ex: 9XXXXXXXX"
                onChangeText={text => setTelefone(text)}
            />

            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, marginTop: 2, marginLeft: -230}}>Escola: * </Text>
            <SelectInput 
                value={0} 
                options={options} 
                style={{ backgroundColor: "#fff", borderRadius: 3, width: 305, height: 40, marginTop: 3 }}
                labelStyle={{ height: 40 }}
                onSubmitEditing={(value) => setEscola(value)}
            />

            <TouchableOpacity style={[styles.button1, {marginTop: 15}]} onPress={() => verifyForm()}>
                <Text style={{ fontSize: 16, color: "#fff", textAlign: 'center', marginTop: 8}}>Registar</Text>
            </TouchableOpacity>

        </View>

        </ImageBackground>

    );
}