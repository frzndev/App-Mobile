import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50"
    }
});