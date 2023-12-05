import React from 'react';
import {View, Text} from 'react-native';
import createPoolStyle from '../styles/createPoolStyle.js';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";

const CreatePoolScreen = () => {
    const navigate = useNavigate();
    const handlePress = () => navigate("/");
    return (
        <View style={createPoolStyle.container}>
            <CustomButton style={createPoolStyle} text={"back to Homepage"} onPress={handlePress}/>
            <Text>Create Pools</Text>
        </View>
        
    )
}

export default CreatePoolScreen;