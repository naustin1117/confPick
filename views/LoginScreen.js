import React from 'react';
import {View,TextInput, Text} from 'react-native';
import loginStyle from '../styles/loginStyle.js';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";

const LoginScreen = () => {
    const [usernameText, onUsernameChangeText] = React.useState("");
    const[passwordText, onPasswordChangeText] = React.useState("");

    const navigate = useNavigate();
    const handlePress = () => navigate("/");

    return (
        
        <View style={loginStyle.container}>
            <View style={loginStyle.topBanner}></View>
            <View style={loginStyle.midBanner}>
                <Text style={loginStyle.midText}> Login </Text>
            </View>
            <View style={loginStyle.lowBanner}>
                <TextInput
                onChangeText={onUsernameChangeText}
                value={usernameText}
                placeholder='Username'
                style={loginStyle.inputStyle}
                />
                    <TextInput
                onChangeText={onPasswordChangeText}
                value={passwordText}
                placeholder='Password'
                style={loginStyle.inputStyle}
                />

                {/* <CustomButton style={loginStyle} text={"Login"} path={'/login'} /> */}
                <CustomButton style={loginStyle} text={"Login"} onPress={handlePress}/>
                <CustomButton style={loginStyle} text={"Sign up"} />
            </View>
        </View>
        
    )
}

export default LoginScreen;