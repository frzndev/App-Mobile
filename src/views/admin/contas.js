import React, { useState, useEffect } from 'react';
import { Alert, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-material-dropdown';

import { useNavigation } from '@react-navigation/native';

import config from "../../../config/config.json";

import { logoImg, bgImg, back, rectangle } from '../../../assets/img/index';
import {styles} from '../../../assets/css/styles';

export default function AdminContas(){

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('AdminMenu');
    }

    function AlertSend(){
        Alert.alert(
            'Erro ! Esqueceste-te de preencher algum dado !'
        )
        navigation.navigate('AdminContas');
    }

    const [ tipodeutilizador, setTipoDeUtilizador ] = useState(null);

    const [CheckBox1, setCheckBox1] = useState(false);
    const [CheckBox2, setCheckBox2] = useState(false);

    const [DropDownData, setDropDownData] = useState([]);
    
    async function sendFormList(){

        if ( CheckBox1 === false && CheckBox2 === false){
            setTipoDeUtilizador(null);
        } else if ( CheckBox1 === true ) {
            setTipoDeUtilizador(0);
        } else {
            setTipoDeUtilizador(1);
        }

        if (tipodeutilizador === null){
            AlertSend();
        } else {
            let response = await fetch(`${config.urlRoot}userlist`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    tipodeutilizador: tipodeutilizador
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                var count = Object.keys(responseJson).length;
                let drop_down_data = [];
                for(var i = 0; i < count; i++){

                    if ( responseJson[i].escola === '1' ) {
                        responseJson[i].escola = "ESA";
                    } else if ( responseJson[i].escola === '2' ) {
                        responseJson[i].escola = "ESE";
                    } else if ( responseJson[i].escola === '3' ) {
                        responseJson[i].escola = "ESTIG";
                    } else if ( responseJson[i].escola === '4' ) {
                        responseJson[i].escola = "ESACT";
                    } else if ( responseJson[i].escola === '5' ) {
                        responseJson[i].escola = "ESSA";
                    }

                    drop_down_data.push({ value: 
                        "ID:" + responseJson[i].id + 
                        " | Login: " + responseJson[i].login + 
                        " | Nome: " + responseJson[i].nome +
                        " | Escola: " + responseJson[i].escola});
                }
                setDropDownData({drop_down_data});
            })
        }
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
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>GERIR EQUIPAMENTOS</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", marginTop: 30}}>Tipo de Utilizador a Gerir:</Text>
                </View>     

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                    <CheckBox
                        disabled={false}
                        value={CheckBox1}
                        onValueChange={(Value) => setCheckBox1(Value)}
                        onChange={() => setCheckBox2(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Aluno</Text>
                    <CheckBox
                        disabled={false}
                        value={CheckBox2}
                        onValueChange={(Value) => setCheckBox2(Value)}
                        onChange={() => setCheckBox1(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Professor/Funcionario/Administrador</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                    
                    <TouchableOpacity style={styles.button1} onPress={() => sendFormList()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Verificar Contas</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: 350, height: 40, marginLeft: 15, marginTop: -10}}>
                    <Dropdown
                        label='Seleciona o Equipamento'
                        selectedItemColor="#D63578"
                        data={DropDownData.drop_down_data}              
                    />
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>                    
                    <TouchableOpacity style={styles.button1}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Alterar Conta</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}