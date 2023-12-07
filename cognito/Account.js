import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import UserPool from '../cognito/UserPool.js';

// const AccountContext = createContext({authenticate:()=>{}});
const AccountContext = createContext(null);

const Account = (props) => {
    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool: UserPool
            })
    
            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data);
                    resolve(data);
                    navigate("/");
                },
                onFailure: (data) => {
                    console.error("onFailure: ", data);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                }
            });
        });
    };
    return (
        <AccountContext.Provider value={{ authenticate }}>
            {props.children}
        </AccountContext.Provider>
    )
    };
export { Account, AccountContext };