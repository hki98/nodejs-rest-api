/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Authentication Routes File
*/

import express from 'express';

import { register, login } from '../controllers/authentication';

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
};