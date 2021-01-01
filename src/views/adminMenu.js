import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { logoImg, bgImg, back, rectangle, seta, settings, mensagem } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function AdminMenu(){

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function navigateMensagem(){
        navigation.navigate('Mensagem');
    }

    function navigateSettings(){
        navigation.navigate('Settings');
    }

    const [user,setUser]=useState(null);
    const [numero,setNumero]=useState(null);

    useEffect(()=>{
        async function getInfo()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.nome);
            setNumero(json.login);
        }
        getInfo();
    },[]);

    async function logout() {
        await AsyncStorage.clear();
        navigateLogin();
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

            <ImageBackground source={rectangle} style={{width: 370, height: 640}}>
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Bem-Vindo, </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>{user}</Text>
                </View>                

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Numero: </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>{numero}</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{ fontSize: 30, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>MENU ADMIN</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Contas</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 100}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Atribuições</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 65}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Devoluções</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 65}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Equipamentos</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 43}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 100, marginLeft: -35}}>                    
                    
                    <TouchableOpacity style={{marginLeft: 40}} onPress={navigateSettings}>
                        <Image source={settings} style={{width: 30, height: 30, marginRight: 15}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={() => logout()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 12}}>Terminar Sessão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 38}} onPress={navigateMensagem}>
                        <Image source={mensagem} style={{width: 40, height: 35, marginLeft: -25}}/>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}