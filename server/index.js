import express from './config/express';
import socket from './config/socket';


//Determine environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//Environment variables
export const port = process.env.PORT || 3000;

//Instantiate web app
export const app = express();

//Set Port
export const server = app.listen(port);

//Socket handling
export const io = socket(server);



console.log(process.env.NODE_ENV + ' server running at: '  + port);





