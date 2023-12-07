import React from 'react';
import {View, Text} from 'react-native';
import yourPoolStyle from '../styles/yourPoolsStyle.js';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";

const YourPoolsScreen = () => {
    const navigate = useNavigate();
    const handlePress = () => navigate("/");
    
    return (
        <View style={yourPoolStyle.container}>
            <CustomButton style={yourPoolStyle} text={"back to Homepage"} onPress={handlePress}/>
            <Text>Your Pools</Text>
        </View>
        
    )
}

export default YourPoolsScreen;