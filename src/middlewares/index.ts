/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Middleware File
*/

import express from 'express';
import { get, merge } from 'lodash';

// Import getUserBySessionToken from users.ts DB file
import { getUserBySessionToken } from '../db/users';

// isOwner middlware checks if the user has the rights to make a delete and for his own account only
export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Try to get current user
    try {
        // Extract the user ID from the request
        const { id } = req.params;
        // Get the current authenticated user ID as a String
        const currentUserId = get(req, 'identity._id') as string;

        // If the id is missing
        if (!currentUserId) {
            // Send 400 HTTP error
            return res.status(403);
        } else {
            // Compare between the authenticated user ID and the user ID from the request
            if (currentUserId.toString() !== id) {
                // If no match send error
                return res.sendStatus(403);
            }
        }

        // Call Express Next Function
        next();
    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.sendStatus(400);
    }
};

// Authentication middleware, checks if the is user is authenticated
export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Try to check for authentication
    try {
        // Extract the session token cookie from the request
        const sessionToken = req.cookies['HAIAN-AUTH'];

        // If there is no cookie send error
        if (!sessionToken) {
            // Send 403 Forbidden HTTP error
            return res.sendStatus(403);
        } else {
            // Check for the session token in DB
            const existingUser = await getUserBySessionToken(sessionToken);

            // If the session token is not found then send error
            if (!existingUser) {
                // Send 403 Forbidden HTTP error
                return res.sendStatus(403);
            } else {
                // If the session token is found and correct then merge the user authentication info with the request using lodash
                merge(req, { identity: existingUser });
                // Return Express Next Function
                return next();
            }
        }
    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.sendStatus(400);
    }
};