import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import logoIpb from '../../assets/ipb.png';

import styles from './styles';

export default function Reparacao(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function AlertSend(){
        Alert.alert(
            'Pedido Enviado com Sucesso !'
        )
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13, marginBottom: 10 }}>Centro de Reparação de Eletrodomésticos</Text>

            <Image source={logoImg} style={{ width: 150, height: 150 }}/>

            <View>
                <TextInput 
                    style={styles.input}
                    placeholder=" * Nome Completo:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Telemovel:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Email:"
                />
                <TextInput 
                    style={styles.input}
                    placeholder=" * Morada:"
                />
                <TextInput 
                    style={{backgroundColor: "#fff", marginTop: 15, width: 250, height: 80, fontWeight: "bold", borderRadius: 3, fontSize: 11}}
                    placeholder=" * Descrição do Equipamento (Marca / Avaria):"  
                />

                <TouchableOpacity style={styles.button} onPress={AlertSend}>
                    <Text style={{ fontSize: 18, color: "#fff" }}>Enviar Pedido</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                    <Text style={{ fontSize: 18, color: "#fff" }}>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>

            <Image source={logoIpb} style={{width: 300, height: 50, marginTop: 20}}/>

        </View>
    );
}