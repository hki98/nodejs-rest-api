/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Users Routes File
*/

import express from 'express';

import { getAllUsers } from '../controllers/users';
import { isAuthenticated } from '../middlewares';
export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
};