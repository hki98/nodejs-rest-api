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