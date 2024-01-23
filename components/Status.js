import React, { useState, useContext, useEffect} from "react";
import { AccountContext } from "../cognito/Account";
import {Text} from 'react-native';

const Status = () => {
    const [status, setStatus] = useState(false);
    const [userID, setUserID] = useState("");
    const [username, setUsername] = useState("");

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                setStatus(true);
                setUserID(session.accessToken.payload.sub);
                console.log("Username: " + session.accessToken.payload.preferred_username);
                console.log("userID: " + session.accessToken.payload.sub);
                console.log("session: " + session);
                setUsername(session.accessToken.payload.preferred_username);
            })
    },[]);
    return (
        <Text>{status ? username + " Signed in": "Not Logged in"}</Text>
    )
};

export default Status;