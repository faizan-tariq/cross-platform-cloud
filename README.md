## cross-platform-cloud

#### Microservice#1 (Java / Heroku)
* Java Spring Boot based microservice using h2 in-memory database deployed on Heroku using single dyno.(http://spring-get-players.herokuapp.com/players)

#### Microservice #2 (NodeJs / AWS Lamba)
* Amazon based microservice using AWS Lambda and AWS API Gateway using secure S3 cloud Storage. (https://r3aazmii2f.execute-api.us-east-1.amazonaws.com/dev?key=1)


### Cloud Native Pattern 
For understanding the concept and details of these patterns i followed following links:
https://docs.microsoft.com/en-us/azure/architecture/patterns/

#### 1) Gateway Routing
Implementation of Gateway Routing Cloud Pattern using AWS API Gateway (https://p2dwem8tr9.execute-api.us-east-1.amazonaws.com/test) providing a gateway to separate microservices indepdent of their underline technology 1) http://spring-get-players.herokuapp.com/players 2) https://jsonplaceholder.typicode.com/users/
There 2 seperate services are now being accessed via same api gateway as https://p2dwem8tr9.execute-api.us-east-1.amazonaws.com/test/adf/players and https://r3aazmii2f.execute-api.us-east-1.amazonaws.com/dev?key=1

#### 2) Ambassador
Created helper AWS lamba service using nodeJS that can send a request on behalf of a consumer service to S3 Bucket to fetch images.
(https://r3aazmii2f.execute-api.us-east-1.amazonaws.com/dev?key=1)
