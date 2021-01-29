import React, { useState, useEffect } from 'react';
import { Alert, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-material-dropdown';

import config from "../../config/config.json";

import { logoImg, bgImg, back, rectangle, calendar } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Devolucao(){

    const [utilizadorid, setUtilizadorId] = useState(null);
    const [equipamentoid, setEquipamentoId] = useState(null);

    const [ DropDownData, setDropDownData ] = useState([]);

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function AlertSend(){
        Alert.alert(
            'Pedido Enviado com Sucesso !',
            '( Serás notificado por mensagem na Aplicação de como e quando efetuares a devolução )'
        )
        navigation.navigate('Menu');
    }

    useEffect(()=>{
        getInfo();
        list();
    },[]);

    async function getInfo()
    {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUtilizadorId(json.id);
    }

    async function list(){
        let response = await fetch(`${config.urlRoot}listRequiredEquipamments`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                utilizador_id: utilizadorid
            })
        });
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
                
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>DEVOLVER EQUIPAMENTO</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", marginTop: 30}}>Equipamentos para Devolver:</Text>
                </View>

                <View style={{width: 350, height: 40, marginLeft: 10, marginTop: -10}}>
                    <Dropdown
                        label='Seleciona o Equipamento a devolver'
                        selectedItemColor="#D63578"
                        data={DropDownData.drop_down_data}
                        onChangeText={(value, index, data) => setEquipamentoId(data[index].id)}
                    />
                </View>

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 100}}>                    
                    <TouchableOpacity style={styles.button1} onPress={AlertSend}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 3}}>Enviar Pedido de Devolução</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}