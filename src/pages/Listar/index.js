import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Listar(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    state = {

        headerData: ['Nome', 'Telemovel', 'Email', 'Morada', 'Descrição'],

        tableContents: [
            ['Cristiano Santos', '93333', 'cristiano@gmail.com', 'Rua das Peras', 'Microondas não aquece'],
            ['Manuel Andrade', '91111', 'manuel@gmail.com', 'Rua das Maças', 'Maquina de Lavar não lava'],
            ['Rui Pinto', '96666', 'rui@gmail.com', 'Rua das Bananas', 'Aspirador não aspira']
        ] 
    
    };

    return (
        <View style={styles.container}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 30 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 150, height: 150, marginBottom: 20 }}/>

            <View style={{ color: "#fff" }}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#66194d'}}>
                    <Row data={state.headerData} textStyle={{ color: "#fff", fontWeight: "bold", textDecorationLine: "underline", textAlign: "center", padding: 5}}/>
                    <Rows data={state.tableContents} textStyle={{ color: "#fff", padding: 5 }} />
                </Table>
            </View>

            <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                <Text style={{ fontSize: 18, color: "#fff" }}>Voltar para o Menu</Text>
            </TouchableOpacity>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 40}}/>

        </View>
    );
}