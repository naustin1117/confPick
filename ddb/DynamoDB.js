import { DynamoDB } from 'aws-sdk';

// Initialize DynamoDB with your AWS credentials and region
const dynamoDB = new DynamoDB({
  region: 'us-east-1', // replace with your AWS region
  accessKeyId: 'AKIA2U26TWACSE7AEZL6', // replace with your AWS access key ID
  secretAccessKey: 'hJEuVDeCIaBbOloN0DfMyw2PFwmd8DJTKCpdOFog', // replace with your AWS secret access key
});

export default dynamoDB;