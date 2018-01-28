# expressAPI
RESTful API using express 


Example project using Express, Mongoose & MongoDB. Requires mongoDB installation for running the project.

## Refer following links for details

    https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

    https://www.terlici.com/2014/09/29/express-router.html

## To Run:

    `node server.js`
    
    For restarting server if files are edited install nodemon & issue command
      
    `nodemon ./server.js localhost 8000`
    
      

## To add person:

      In postman open url http://localhost:8080/api/persons & create POST request with person

## To list persons:

      In postman send GET request to http://localhost:8080/persons

## To search person by name:

      Inpostman send GET request to http://localhost:8080/persons/findByName/<substringOfPersonName>




