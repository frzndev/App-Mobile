import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: "center",
        backgroundColor: "#2c3e50"
    },

    button: {
        backgroundColor: "#66194d",
        marginTop: 15,
        width: 250,
        height: 40,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    }
});