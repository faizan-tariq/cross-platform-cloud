const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    signatureVersion: 'v4'
});

exports.handler = async (event) => {
    const bucketName = process.env['s3Bucket'];
    const s3PreSignedUrl = s3.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: 'assets/'+event.key+'.png',
        Expires: 60*60*24*7
    });
    const response = {
        statusCode: 200,
        body: s3PreSignedUrl
    };
    return response;
};
