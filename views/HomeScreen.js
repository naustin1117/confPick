import React from 'react';
import {View, Text} from 'react-native';
import homeStyle from '../styles/homeStyle.js';
import CustomButton from "../components/CustomButton.js";
import {Link} from "react-router-native";

const HomeScreen = () => {
    return (
        <View style={homeStyle.container}>
            <View style={homeStyle.createPool}>
            </View>
            <View style={homeStyle.yourPools}>
            </View>
            <View style={homeStyle.Messages}>
                <Link to="/" underlayColor="#f0f4f7" style={homeStyle.navItem}>
                    <Text>HomeScreen</Text>
                </Link>
                <Link to="/login" underlayColor="#f0f4f7" style={homeStyle.navItem}>
                    <Text>Login</Text>
                </Link>
            </View>
        </View>
        
    )
}

export default HomeScreen;