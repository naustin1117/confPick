import React, { useState, useContext } from 'react';
import {View, Text, TextInput,TouchableOpacity, Switch} from 'react-native';
import createPoolStyle from '../styles/createPoolStyle.js';
import CustomButton from "../components/CustomButton.js";
import {useNavigate} from "react-router-native";
import DDBPut from '../ddb/ops/DDBPut.js';

const CreatePoolScreen = () => {
    const navigate = useNavigate();
    const handlePress = () => navigate("/");
    const handleCreate = () => {
        DDBPut(poolName)
    };

    const[poolName, setPoolName] = useState("");
    const[poolStatus, setPoolStatus] = useState(false);
    const[password, setPassword] = useState("");
    const[isPrivate, setIsPrivate] = useState(false);
        ///Call method to validate submissions and then submit a entry to dynamodb

    const toggleSwitch = () => setIsPrivate(previousState => !previousState);
    
    return (
        <View style={createPoolStyle.container}>
            <CustomButton style={createPoolStyle} text={"back to Homepage"} onPress={handlePress}/>
            <Text>Create Pools</Text>
            <TextInput
            onChangeText={setPoolName}
            value={poolName}
            placeholder='Pool Name'
            style={createPoolStyle.input}
            />
            {isPrivate && 
                <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder='Password'
                style={createPoolStyle.input}
                />
            }
            <Text>Private Pool</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isPrivate ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isPrivate}
            />
            <TouchableOpacity style={createPoolStyle.yourPools} onPress={handleCreate}>
                <Text>Create Pool</Text>
            </TouchableOpacity>
        </View>
        
    )
    }

export default CreatePoolScreen;