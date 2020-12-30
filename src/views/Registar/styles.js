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

    input: {
        backgroundColor: "#fff",
        marginTop: 3,
        width: 305,
        height: 40,
        fontWeight: "bold",
        borderRadius: 3
    },

    button: {
        backgroundColor: "#332003",
        width: 150,
        height: 40,
        borderRadius: 3,
        marginTop: 15
    }

});