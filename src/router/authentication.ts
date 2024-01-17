/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Authentication Routes File
*/

import express from 'express';
// Import register & login controllers
import { register, login } from '../controllers/authentication';

// Define the authentication routes
export default (router: express.Router) => {
    // Registration Route
    router.post('/auth/register', register);
    // Login Route
    router.post('/auth/login', login);
};