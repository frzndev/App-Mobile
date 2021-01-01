import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Image, Text, BackHandler, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { logoImg, bgImg, rectangle, seta, settings, mensagem } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Menu(){
    const navigation = useNavigation();

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function navigateMensagem(){
        navigation.navigate('Mensagem');
    }

    function navigateRequisitar(){
        navigation.navigate('Requisitar');
    }

    function navigateDevolucao(){
        navigation.navigate('Devolucao');
    }

    function navigateAdmin(){
        navigation.navigate('AdminMenu');
    }
    
    function navigateSettings(){
        navigation.navigate('Settings');
    }

    const [display, setDisplay] = useState('none');
    const [user,setUser]=useState(null);
    const [numero,setNumero]=useState(null);

    useEffect(()=>{
        getInfo();
    },[]);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Aviso", "Deseja mesmo sair da Aplicação sem Terminar Sessão ?", [{
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
                { 
                    text: "Sim", onPress: () => {
                        BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
        );
    
        return () => backHandler.remove();
    }, []);

    async function getInfo()
    {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        if ( json.tipodeutilizador === 1 ) {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
        setUser(json.nome);
        setNumero(json.login);
    }

    async function logout() {
        await AsyncStorage.clear();
        navigateLogin();
    }

    return (

        <ImageBackground source={bgImg} style={styles.backgroundImage}>
        
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
                    <Text style={{ fontSize: 30, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>MENU</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Requisitar Equipamento</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateRequisitar}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 20}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Devolver Equipamento</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateDevolucao}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 30}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={[styles.login_msg(display), {flexDirection: 'row', alignItems: 'center', marginTop: 10}]}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Menu Administrador</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateAdmin}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: -5}}/>
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