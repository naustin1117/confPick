import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import homeStyle from '../styles/homeStyle.js';
import {Link} from "react-router-native";
import {useNavigate} from "react-router-native";
import Status from '../components/Status.js';

const HomeScreen = () => {
    const navigate = useNavigate();
    const handleCreatePress = () => navigate("/createPool");
    const handlePoolPress = () => navigate("/yourPools")
    return (
        <View style={homeStyle.container}>
            <Status />
            <Link to="/login" underlayColor="#f0f4f7" style={homeStyle.navItem}>
                <Text>Login</Text>
            </Link>
            <TouchableOpacity style={homeStyle.createPool} onPress={handleCreatePress}>
                    <Text>Create Pool</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={homeStyle.yourPools} onPress={handlePoolPress}>
                <Text>Your Pools</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.messages}>
                <Text>Messages</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default HomeScreen;