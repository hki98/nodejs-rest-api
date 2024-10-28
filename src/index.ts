/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: App Main Index File
*/

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

// Initiate Express app
const app = express();

// Use CORS
app.use(cors({
    credentials: true,
}));

// Use Compression
app.use(compression());
// Use Cookie Parser
app.use(cookieParser());
// Use Body Parser
app.use(bodyParser.json());

// Create HTTP Server
const server = http.createServer(app);

// Listen to the connection PORT
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// MongoDB Connection URL
const MONGO_URL = "";

// Use Promise
mongoose.Promise = Promise;
// Connect MongoDB
mongoose.connect(MONGO_URL);
// Catch connection errors
mongoose.connection.on('error', (error: Error) => {
    console.log(error);
});

// Use main router
app.use('/', router());
