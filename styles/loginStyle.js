import {StyleSheet} from "react-native";

const loginStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    topBanner:{
        flex: .32,

    },
    midBanner:{
        flex:.10,
        backgroundColor: "#65C456",
        borderRadius: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    lowBanner:{
        flex: .8,
        backgroundColor: '#818181',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -25,
        // justifyContent: 'center',
    },
    inputStyle:{
        backgroundColor: '#FFFFFF',
        height: 50,
        margin: 10,
        width: 350,
        padding: 10,
        borderRadius: 10
    },
    button:{
        color: "#FFFFFF",
        border: 2,
        borderColor: "#65C456",
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#65C456",
        alignItems: 'center',
        margin: 6,
        width: 350
    },
    midText:{
        fontSize: 30,
        padding: 5,
        textAlign: "center",
        fontFamily: ""
    }
});

export default loginStyle;