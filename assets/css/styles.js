import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    login_msg:(text='none') => ({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginTop: 10,
        marginBottom: 15,
        display: text
    }),

    back: {
        marginTop: 40,
        marginLeft: 20
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
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
        width: 370, 
        height: 40, 
        marginTop: 10,  
        marginLeft: 40,   
        borderRadius: 3
    },

    button1: {
        backgroundColor: "#332003",
        width: 150,
        height: 40,
        borderRadius: 3
    },

    button2: {
        backgroundColor: "#673E01",
        marginRight: 10,
        width: 150,
        height: 40,
        borderRadius: 3
    }

});

export {styles};