import React, { useState, useEffect } from 'react';
import { Alert, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-material-dropdown';

import { useNavigation } from '@react-navigation/native';

import config from "../../../config/config.json";

import { logoImg, bgImg, back, rectangle } from '../../../assets/img/index';
import {styles} from '../../../assets/css/styles';

export default function AdminEquipamentos(){

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('AdminMenu');
    }

    function AlertErrSend(){
        Alert.alert(
            'Não conseguiste criar o teu equipamento.',
            'Verifica se preencheste todos os campos necessários'
        )
        navigation.navigate('AdminEquipamentos');
    }

    function AlertErrSend2(){
        Alert.alert(
            'Não conseguiste alterares o teu equipamento.',
            'Verifica se preencheste todos os campos necessários'
        )
        navigation.navigate('AdminEquipamentos');
    }

    function Successful(){
        Alert.alert(
            'Equipamento criado com sucesso.'
        )
        navigation.navigate('AdminEquipamentos');
    }
    
    const [ tipoequipamento, setTipoEquipamento ] = useState(null);
    const [ marca, setMarca ] = useState(null);
    const [ modelo, setModelo ] = useState(null);
    // const [ estado, setEstado ] = useState(null);
    const [response, setResponse] = useState(null);

    const [CheckBox1, setCheckBox1] = useState(false)
    const [CheckBox2, setCheckBox2] = useState(false)
    const [CheckBox3, setCheckBox3] = useState(false)
    const [CheckBox4, setCheckBox4] = useState(false)
    
    const [DropDownData, setDropDownData] = useState([])

    let data = [{
        value: 'Banana',
    }, {
        value: 'Mango',
    }, {
        value: 'Pear',
    }];

    // Função para enviar o Dados para o BackEnd
    async function verifyForm(){

        //Set Estado Tipo Equipamento
        if ( CheckBox1 === false && CheckBox2 === false){
            setTipoEquipamento(null);
            AlertErrSend();
        } else if ( CheckBox1 === true ) {
            setTipoEquipamento(1);
        } else {
            setTipoEquipamento(2);
        }

        if (tipoequipamento === null || marca === null || modelo === null){
            AlertErrSend();
        } else {
            sendForm();
            Successful();
        }
    }

    async function sendForm(){
        const estado = 1;

        let response = await fetch(`${config.urlRoot}registerequipamento`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tipoequipamento: tipoequipamento,
                marca: marca,
                modelo: modelo,
                estado: estado
            })
        });
    }

    async function sendFormAlterar(){

        if ( CheckBox3 === false && CheckBox4 === false){
            setTipoEquipamento(null);
        } else if ( CheckBox3 === true ) {
            setTipoEquipamento(1);
        } else {
            setTipoEquipamento(2);
        }

        if (tipoequipamento === null){
            AlertErrSend2();
        } else {
            let response = await fetch(`${config.urlRoot}listagem`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    tipoequipamento: tipoequipamento
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                var count = Object.keys(responseJson).length;
                let drop_down_data = [];
                for(var i = 0; i < count; i++){

                    if ( responseJson[i].estado === 1 ) {
                        responseJson[i].estado = "Disponivel";
                    } else if ( responseJson[i].estado === 2 ) {
                        responseJson[i].estado = "Ocupado";
                    } else {
                        responseJson[i].estado = "Em Espera";
                    }

                    drop_down_data.push({ value: 
                        "Marca:" + responseJson[i].marca + 
                        " | Modelo:" + responseJson[i].modelo + 
                        " | Estado:" + responseJson[i].estado });
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
                    <Text style={{ fontSize: 15, color: "#D63578", fontWeight: "bold", color: "#000", marginTop: 30}}>Registar Equipamento:</Text>
                </View>     

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                    <CheckBox
                        disabled={false}
                        value={CheckBox1}
                        onValueChange={(Value) => setCheckBox1(Value)}
                        onChange={ () => {setCheckBox2(false), setCheckBox1(true)}}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Computador</Text>

                    <CheckBox
                        disabled={false}
                        value={CheckBox2}
                        onValueChange={(Value) => setCheckBox2(Value)}
                        onChange={ () => {setCheckBox1(false), setCheckBox2(true)}}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>AudioVisual</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginTop: 10}}>Marca do Equipamento:</Text>
                    <TextInput 
                        style={[styles.input, {fontSize: 10}]}
                        onChangeText = { text => setMarca(text) }     
                    />               

                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginTop: 10}}>Modelo do Equipamento:</Text>
                    <TextInput 
                        style={[styles.input, {fontSize: 10}]}      
                        onChangeText = { text => setModelo(text) } 
                    />

                    <TouchableOpacity style={[styles.button1, {marginTop: 15}]} onPress={ () => verifyForm()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Criar Equipamento</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{ fontSize: 15, color: "#D63578", fontWeight: "bold", color: "#000", marginTop: 10}}>Alterar/Remover Equipamento:</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                        <CheckBox
                            disabled={false}
                            value={CheckBox3}
                            onValueChange={(Value) => setCheckBox3(Value)}
                            onChange={ () => setCheckBox4(false) }
                        />
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Computador</Text>
                        <CheckBox
                            disabled={false}
                            value={CheckBox4}
                            onValueChange={(Value) => setCheckBox4(Value)}
                            onChange={ () => setCheckBox3(false) }
                        />
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>AudioVisual</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={[styles.button1, {marginTop: 15}]} onPress={ () => sendFormAlterar()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 2}}>Pesquisar Equipamentos</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: 350, height: 40, marginLeft: 15, marginTop: -10}}>
                    <Dropdown
                        label='Seleciona o Equipamento'
                        selectedItemColor="#D63578"
                        data={DropDownData.drop_down_data}                
                    />
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <TouchableOpacity style={[styles.button1, {marginTop: 15}]}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Alterar Equipamento</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}