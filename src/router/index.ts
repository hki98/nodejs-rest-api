/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Router File
*/

import express from 'express';

// Import authentication router
import authentication from './authentication';
// Import users router
import users from './users';

// Initiate main app router
const router = express.Router();

// Define main app routes
export default (): express.Router => {
    authentication(router);
    users(router)
    return router;
};