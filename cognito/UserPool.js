import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_NKDECIdBP",
    ClientId: "53u1v9tdcsdkq80bqv05irjjpa"
}

export default new CognitoUserPool(poolData);