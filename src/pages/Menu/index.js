import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/bg.png';
import back from '../../assets/back.png';
import rectangle from '../../assets/Rectangle.png';
import seta from '../../assets/seta.png';
import settings from '../../assets/settings.png';
import mensagem from '../../assets/mensagem.png';

import styles from './styles';

export default function Menu(){
    const navigation = useNavigation();

    function navigateInicio(){
        navigation.navigate('Inicio');
    }

    function navigateLogin(){
        navigation.navigate('Login');
    }

    function navigateReparacao(){
        navigation.navigate('Reparacao');
    }

    function navigateListar(){
        navigation.navigate('Listar');
    }

    function navigateAdmin(){
        navigation.navigate('Admin');
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

            <ImageBackground source={rectangle} style={{width: 370, height: 640}}>
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Bem-Vindo, </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>Nuno Gomes</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Numero: </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>a38368</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Requisitar Equipamento</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateReparacao}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 20}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Devolver Equipamento</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateReparacao}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 30}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Login como Administrador</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateReparacao}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: -5}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 200, marginLeft: -35}}>                    
                    
                    <TouchableOpacity style={styles.butoes} onPress={navigateReparacao}>
                        <Image source={settings} style={{width: 30, height: 30, marginRight: 15}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={navigateLogin}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 12}}>Terminar Sessão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.butoes} onPress={navigateReparacao}>
                        <Image source={mensagem} style={{width: 40, height: 35, marginLeft: -25}}/>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}