import React from 'react';
import {View,TextInput, Text} from 'react-native';
import loginStyle from '../styles/loginStyle';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";
import UserPool from '../cognito/UserPool.js';
import {CognitoUserAttribute} from 'amazon-cognito-identity-js';

const SignupScreen = () => {
    const [usernameText, onUsernameChangeText] = React.useState("");
    const [passwordText, onPasswordChangeText] = React.useState("");
    const [emailText, onEmailChangeText] = React.useState("");

    const navigate = useNavigate();

    const handlePress = () => navigate("/login");

    const onSubmit = () => {
        
        var dataEmail = { Name: "preferred_username", Value: "testtest"};
        var attributeList = [];
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);
        UserPool.signUp(emailText, passwordText, attributeList, null, (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            console.log(data);
            navigate("/");
        })

    };


    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.topBanner}></View>
            <View style={loginStyle.midBanner}>
                <Text style={loginStyle.midText}> Sign up </Text>
            </View>
            <View style={loginStyle.lowBanner}>
                <TextInput
                onChangeText={onUsernameChangeText}
                value={usernameText}
                placeholder='Username'
                style={loginStyle.inputStyle}
                />
                <TextInput
                onChangeText={onEmailChangeText}
                value={emailText}
                placeholder='Email'
                style={loginStyle.inputStyle}
                />
                    <TextInput
                onChangeText={onPasswordChangeText}
                value={passwordText}
                placeholder='Password'
                style={loginStyle.inputStyle}
                />

                <CustomButton style={loginStyle} text={"Sign up"} onPress={onSubmit}/>
                <CustomButton style={loginStyle} text={"Already Signed up"} onPress={handlePress}/>
            </View>
        </View>
  )
}

export default SignupScreen