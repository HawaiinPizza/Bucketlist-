var AWS = require("aws-sdk");

AWS.config.update({
        region: "us-east-1",
        endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

function insert(){
        var params={
                TableName: "Records",
                Item:{
                        "artist": { S: "Weezer" }
                        ,"title":{S: "Weezer"}
                        ,"genre":{S: "Alternative Rock"}
                        ,"length":{S: "YE"}




                }

        }
        dynamodb.putItem(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
        });
}
function read(){
        var params={
                TableName: "Records",
                Key:{
                        "title":"Weezer",
                        "artist":"Weezer",
                }
        }

        var docClient = new AWS.DynamoDB.DocumentClient();

        docClient.get(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
        });


}
read()
