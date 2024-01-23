import React, { useState, useContext } from 'react';
import {View,TextInput, Text} from 'react-native';
import loginStyle from '../styles/loginStyle.js';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";
import { CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import UserPool from '../cognito/UserPool.js';
import { AccountContext } from "../cognito/Account.js";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isEnabled, setIsEnabled] = useState(false);

    console.log(AccountContext);

    const {authenticate} = useContext(AccountContext);

    const navigate = useNavigate();
    const handleLoginPress = () => navigate("/");
    const handleSignupPress = () => navigate("/signup");

    const onSubmit = () => {
    
        authenticate(email, password)
        .then(data => {
            console.log("Logged In!", data);
            navigate("/");
        })
        .catch(err => {
            console.log("Failed to Login!", data);
        })
    };

    return (
        
        <View style={loginStyle.container}>
            <View style={loginStyle.topBanner}></View>
            <View style={loginStyle.midBanner}>
                <Text style={loginStyle.midText}> Login </Text>
            </View>
            <View style={loginStyle.lowBanner}>
                <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder='Username'
                style={loginStyle.inputStyle}
                />
                    <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder='Password'
                style={loginStyle.inputStyle}
                />
                <CustomButton style={loginStyle} text={"Login"} onPress={onSubmit}/>
                <CustomButton style={loginStyle} text={"Sign up"} onPress={handleSignupPress}/>
            </View>
        </View>
        
    )
}

export default LoginScreen;