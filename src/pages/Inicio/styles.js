import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    button1: {
        backgroundColor: "#332003",
        marginTop: 15,
        width: 200,
        height: 40,
        borderRadius: 3
    },

    button2: {
        backgroundColor: "#673E01",
        marginTop: 15,
        width: 200,
        height: 40,
        borderRadius: 3
    },
    
});