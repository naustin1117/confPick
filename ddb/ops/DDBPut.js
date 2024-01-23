import dynamoDB from "../DynamoDB";

const DDBPut = (poolName) => {
    const params = {
        TableName: 'AppCdkStack-MyDDBTablePoolsTable46BEE466-ADLV2FB9OB1V',
        Item: {
            PoolID: {S: "1234567"},
            PoolName: {S: poolName}
        },
    };

    dynamoDB.putItem(params, (err, data) => {
        if (err) {
            console.error('Error writing to DynamoDB: ', err);
        } else {
            console.log('Successfully wrote to DynamoDB: ', data)
        }
    })
}

export default DDBPut;