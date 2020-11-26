import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    back: {
        marginTop: 40,
        marginLeft: 20
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    button: {
        width: 370, 
        height: 40, 
        marginTop: 10,  
        marginLeft: 40,   
        borderRadius: 3
    }, 

    button1: {
        backgroundColor: "#332003",
        width: 200, 
        height: 45, 
        marginTop: 10,  
        borderRadius: 3
    },

    butoes: {
        marginLeft: 40,
        marginTop: 8
    }
    
});