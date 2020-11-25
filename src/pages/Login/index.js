import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/bg.png';
import back from '../../assets/back.png';

import styles from './styles';

export default function Login(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function navigateRegistar(){
        navigation.navigate('Registar');
    }

    function navigateInicio(){
        navigation.navigate('Inicio');
    }

    function navigateEsquecer(){
        navigation.navigate('Esquecer');
    }

    return (

        <ImageBackground source={bgImg} style={styles.backgroundImage}>
        
        <View style={styles.back}>             

            <TouchableOpacity onPress={navigateInicio}>
                <Image source={back} style={{ width: 35, height: 30 }}/>
            </TouchableOpacity>

        </View>
            
        <View style={styles.container}>            

            <Image source={logoImg} style={{ width: 180, height: 140}}/>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: -10}}>Iniciar Sessão</Text>

        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft: -220}}>Username: </Text>

            <TextInput 
                style={styles.input}
                 placeholder="  aXXXXX"
            />

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginTop: 10, marginLeft: -220}}>Password: </Text>

            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="  ***********"
            />

        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>

            <TouchableOpacity style={styles.button2} onPress={navigateEsquecer}>
                <Text style={{ fontSize: 11, color: "#fff", textAlign: 'center', marginTop: 12}}>Esqueci-me da Password</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button1} onPress={navigateMenu}>
                <Text style={{ fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Entrar</Text>
            </TouchableOpacity>            

        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>

            <Text style={{ fontSize: 18, color: "#fff", marginBottom: 10}}>Ainda não tens conta ?</Text>

            <TouchableOpacity style={styles.button1} onPress={navigateRegistar}>
                <Text style={{ fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 9}}>Quero-me registar</Text>
            </TouchableOpacity>

        </View>

        </ImageBackground>
    );
}