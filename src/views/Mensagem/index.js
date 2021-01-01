import React from 'react';
import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/img/logo.png';
import bgImg from '../../../assets/img/bg.png';
import back from '../../../assets/img/back.png';
import rectangle from '../../../assets/img/Rectangle.png';
import mensagem from '../../../assets/img/mensagem.png';
import ava1 from '../../../assets/img/ava1.png';
import ava2 from '../../../assets/img/ava2.png';
import ava3 from '../../../assets/img/ava3.png';
import ava4 from '../../../assets/img/ava4.png';

import {styles} from '../../../assets/css/styles';

export default function Mensagem(){
    const navigation = useNavigation();

    function navigateMenu(){
        navigation.navigate('Menu');
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
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold", textAlign: 'center'}}>Tens, </Text>
                    <Text style={{ fontSize: 18, color: "#D63578", fontWeight: "bold", textAlign: 'center'}}>2 Mensagens Novas</Text>
                </View>     

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>           
                    <Image source={ava1} style={{width: 64, height: 64, marginLeft: 30, marginTop: 25}}/>           
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#D63578", marginLeft: -30}}>ADMIN - Roberto</Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>Lorem Ipsum is simply dummy text of the printing </Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>and typesetting industry. Lorem Ipsum has ...</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>           
                    <Image source={ava2} style={{width: 64, height: 64, marginLeft: 30}}/>           
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#D63578", marginLeft: -30}}>ADMIN - Andreia</Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>Lorem Ipsum is simply dummy text of the printing </Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>and typesetting industry. Lorem Ipsum has ...</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>           
                    <Image source={ava3} style={{width: 64, height: 64, marginLeft: 30}}/>           
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#D63578", marginLeft: -30}}>ADMIN - Luis</Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>Lorem Ipsum is simply dummy text of the printing </Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>and typesetting industry. Lorem Ipsum has ...</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>           
                    <Image source={ava4} style={{width: 64, height: 64, marginLeft: 30}}/>           
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#D63578", marginLeft: -30}}>ADMIN - Kevin</Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>Lorem Ipsum is simply dummy text of the printing </Text>
                        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#000", marginLeft: -30}}>and typesetting industry. Lorem Ipsum has ...</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>                    
                    
                    <TouchableOpacity style={styles.button1}>
                        <Text style={{fontSize: 13, color: "#fff", textAlign: 'center', marginTop: 12}}>Nova Mensagem</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>

        </ImageBackground>

    );
}