/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Users Controller File
*/

import express from 'express';
// Import getUsers from users.ts DB file
import { deleteUserById, getUsers } from '../db/users';

// Return all registered users
export const getAllUsers = async (req: express.Request, res: express.Response) => {
    // Try getting all users
    try {
        // Call the getUsers from users.ts DB file
        const users = await getUsers();
        // Return the registered users as JSON in response
        return res.status(200).json(users);
    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.sendStatus(400);
    }
};

// Delete user
export const deleteUser = async (req: express.Request, res: express.Response) => {
    // Try deleting the user
    try {
        // Extract the user id from the request
        const { id } = req.params;

        // Delete the user using the ID, here we are using a middleware so there is no need for any validations
        const deletedUser = await deleteUserById(id);

        // Return the deleted user info
        return res.json(deletedUser)
    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.sendStatus(400);
    }
};