/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Router File
*/

import express from 'express';

import authentication from './authentication';
import users from './users';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router)
    return router;
};