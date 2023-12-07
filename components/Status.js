import React, { useState, useContext, useEffect} from "react";
import { AccountContext } from "../cognito/Account";
import {Text} from 'react-native';

const Status = () => {
    const [status, setStatus] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session);
                setStatus(true);
            })
    },[]);
    return (
        <Text>{status ? "Signed in": "Not Logged in"}</Text>
    )
};

export default Status;