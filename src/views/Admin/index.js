import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/img/logo.png';
import bgImg from '../../../assets/img/bg.png';
import back from '../../../assets/img/back.png';

import styles from './styles';

export default function Admin(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function navigateAdminMenu(){
        navigation.navigate('AdminMenu');
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

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: -10}}>Administração</Text>

        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 200}}>

            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft: -165}}>Username Admin: </Text>

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

            <TouchableOpacity style={styles.button1} onPress={navigateAdminMenu}>
                <Text style={{ fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 10}}>Entrar</Text>
            </TouchableOpacity> 

        </View>

        </ImageBackground>
    );
}