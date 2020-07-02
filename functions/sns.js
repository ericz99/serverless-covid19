const AWS = require('aws-sdk');
const SNS = new AWS.SNS({ region: 'us-east-1' });

// # publish message to subscribe topic
module.exports.publish = (data) => {
  var params = {
    Message: 'STRING_VALUE' /* required */,
    MessageAttributes: {
      '<String>': {
        DataType: 'STRING_VALUE' /* required */,
        BinaryValue:
          Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        StringValue: 'STRING_VALUE',
      },
      /* '<String>': ... */
    },
    MessageStructure: 'STRING_VALUE',
    PhoneNumber: 'STRING_VALUE',
    Subject: 'STRING_VALUE',
    TargetArn: 'STRING_VALUE',
    TopicArn: 'STRING_VALUE',
  };
};
