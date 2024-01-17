/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Users Routes File
*/

import express from 'express';
// Import getAllUsers, deleteUser & updateUser from users controller
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
// Import isAuthenticated from authenctication middleware
import { isAuthenticated, isOwner } from '../middlewares';

// Define the users routes
export default (router: express.Router) => {
    // Get All Users route
    router.get('/users', isAuthenticated, getAllUsers);
    // Delete a user route
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    // Update a user route
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};