import React, { useState, useEffect } from 'react';
import { Alert, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-material-dropdown';

import { useNavigation } from '@react-navigation/native';

import config from "../../config/config.json";

import { logoImg, bgImg, back, rectangle } from '../../assets/img/index';
import {styles} from '../../assets/css/styles';

export default function Requisitar(){

    const [utilizadorid, setUtilizadorId] = useState(null);
    const [equipamentoid, setEquipamentoId] = useState(null);
    const [datarequisicao, setDataRequisicao] = useState('');
    const [datadevolucao, setDataDevolucao] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [temponecessario, setTempoNecessario] = useState(null);

    const [CheckBox1, setCheckBox1] = useState(false);
    const [CheckBox2, setCheckBox2] = useState(false);

    const [ tipoequipamento, setTipoEquipamento ] = useState(null);
    const [ DropDownData, setDropDownData ] = useState([]);

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function AlertSend(){
        Alert.alert(
            'Pedido Enviado com Sucesso !',
            '( Se o teu pedido for confirmado serás notificado por mensagem na Aplicação )'
        )
        navigation.navigate('Menu');
    }

    function AlertErrSend2(){
        Alert.alert(
            'Verifica se preencheste todos os campos necessários'
        )
        navigation.navigate('Requisitar');
    }

    function Successful(){
        Alert.alert(
            'Pedido criado com sucesso.'
        )
        navigation.navigate('AdminEquipamentos');
    }

    // Ao renderizar a screen executa a função para set do ID do utilizador e da hora e data atual
    useEffect(()=>{
        const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        setDataRequisicao(
            year + '-' + meses[month] + '-' + date 
            + ' ' + hours + ':' + min + ':' + sec
        );
        getInfo();
    },[]);

    async function getInfo()
    {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUtilizadorId(json.id);
    }

    async function listEquipamments(){

        if ( CheckBox1 === false && CheckBox2 === false){
            setTipoEquipamento(null);
        } else if ( CheckBox1 === true ) {
            setTipoEquipamento(1);
        } else {
            setTipoEquipamento(2);
        }

        if (tipoequipamento === null){
            AlertErrSend2();
        } else {
            let response = await fetch(`${config.urlRoot}listEquipamments`,{
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

                    drop_down_data.push({ id: responseJson[i].id, value: 
                        "Marca:" + responseJson[i].marca + 
                        " | Modelo:" + responseJson[i].modelo +
                        " | Estado: Disponivel"});
                }
                setDropDownData({drop_down_data});
            })
        }
    }

    async function sendForm(){
        const estado = 1;
        
        if (descricao === null || temponecessario === null){
            AlertErrSend2();
        } else {
            let response = await fetch(`${config.urlRoot}registerRequisicao`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    utilizador_id: utilizadorid,
                    equipamento_id: equipamentoid,
                    data_requisicao: datarequisicao,
                    data_devolucao: datadevolucao,
                    descricao: descricao,
                    tempo_necessario: temponecessario,
                    estado: estado
                })
            });
            Successful();
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
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>REQUISITAR EQUIPAMENTO</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", marginTop: 20}}>Equipamento a Requisitar:</Text>
                </View>   

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                  
                    <CheckBox
                        disabled={false}
                        value={CheckBox1}
                        onValueChange={(Value) => setCheckBox1(Value)}
                        onChange={() => setCheckBox2(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Computador</Text>
                    <CheckBox
                        disabled={false}
                        value={CheckBox2}
                        onValueChange={(Value) => setCheckBox2(Value)}
                        onChange={() => setCheckBox1(false)}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>AudioVisual</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>                    
                    <TouchableOpacity style={styles.button1} onPress={() => listEquipamments()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Listar Equipamentos</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: 350, height: 40, marginLeft: 10, marginTop: -10}}>
                    <Dropdown
                        label='Seleciona o Equipamento que pretendes'
                        selectedItemColor="#D63578"
                        data={DropDownData.drop_down_data}
                        onChangeText={(value, index, data) => setEquipamentoId(data[index].id)}
                    />
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>                  
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Para que efeito precisas do Equipamento:</Text>
                    <TextInput 
                        style={[styles.input, {fontSize: 10}]}
                        placeholder="Descreve aqui tudo aquilo que irás fazer com o Equipamento"
                        onChangeText={text => setDescricao(text)}          
                    />
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>                  
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000"}}>Quanto tempo irás precisar do Equipamento:</Text>
                    <TextInput 
                        style={[styles.input, {fontSize: 10}]}
                        placeholder="Descreve aqui quanto tempo irás precisar do Equipamento"
                        onChangeText={text => setTempoNecessario(text)}
                    />
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>                    
                    <TouchableOpacity style={styles.button1} onPress={() => sendForm()}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Enviar Pedido</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}