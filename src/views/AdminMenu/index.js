import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/img/logo.png';
import bgImg from '../../../assets/img/bg.png';
import back from '../../../assets/img/back.png';
import rectangle from '../../../assets/img/Rectangle.png';
import seta from '../../../assets/img/seta.png';
import settings from '../../../assets/img/settings.png';
import mensagem from '../../../assets/img/mensagem.png';

import {styles} from '../../../assets/css/styles';

export default function AdminMenu(){

    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
    }

    function navigateAdmin(){
        navigation.navigate('Admin');
    }

    function navigateMensagem(){
        navigation.navigate('Mensagem');
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
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Bem-Vindo, </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>Nuno Gomes</Text>
                </View>                

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>Numero: </Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>a38368</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{ fontSize: 30, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>MENU ADMIN</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Contas</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 100}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Atribuições</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 65}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Devoluções</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 65}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>                    
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginLeft: 40,}}>Gerir Equipamentos</Text>
                    <TouchableOpacity style={styles.button} onPress={navigateMenu}>
                        <Image source={seta} style={{ width: 40, height: 45, marginTop: -5, marginLeft: 43}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 100, marginLeft: -35}}>                    
                    
                    <TouchableOpacity style={{marginLeft: 40}}>
                        <Image source={settings} style={{width: 30, height: 30, marginRight: 15}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={navigateMenu}>
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