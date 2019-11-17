# NodeJs skill test

## Setup
1. Inside the project folder run the following command:

    `$ npm install`
2. Run the server with the following command:
    
    `$ npm start`

After that it will start the server on the port 3000 by default.

The default host will be 
    
    http://localhost:3000

## Endpoints

### User
First, you need to have a user to interact with the system. So, you need to call the next endpoint to register your user.

    POST
    URL: /user
    BODY-FORMAT: x-www-form-urlencoded
    BODY:  
        NAME
        USERNAME
        PASSWORD

### Login
Once you have created a user, you need to login in order to be able to make requests to the API. So, you need to call the following endpoint.

    POST
    URL: /login
    BODY-FORMAT: x-www-form-urlencoded
    BODY:  
        USERNAME
        PASSWORD

This endpoint will return a token, that you will need to send in your requests, `the token expires every 24 hours.`

### Sort
There are some endpoints to sort the `original.txt` file in the order that the user want and after that the result will be stored on the file `sorted.txt`. Also you have acces to those files, just refer to the `Assets` section.

#### ASC
    GET
    URL: /asc
    DESCRIPTION: All the numbers of all the arrays have to be in ascending order.

#### DES
    GET
    URL: /des
    DESCRIPTION: All the numbers of all the arrays have to be in descending order.

#### MIX
    GET
    URL: /mix
    DESCRIPTION: The first array of the file will be in ascending order, the second onein descending order, the third one in ascending order and so on.


### Assets
The original array list will be read by the software from a file named original.txt, and the result of the sorting process have to be stored in a file named  sorted.txt,  the original and       the       sorted       files       will       accessible       in       the       endpoints:
* GET `/assets/sorted.txt`
* GET `/assets/original.txt`

The software will keep a log of every request, the log will store every IP and sort types requested to the server by the client, example: Ip: 192.160.0.1, sort: mixed. That log hasto be displayed in console and stored in a file named log.txt and the log.txt file also hasto be available in the endpoint:

* GET `/assets/log.txt`
