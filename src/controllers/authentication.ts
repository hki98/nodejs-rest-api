/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Authenticaion Controller File
*/

import express from 'express';

// Import getUserByEmail & createUser from users.ts DB File
import { getUserByEmail, createUser } from '../db/users';
// Import random & authentication from main Helper File
import { random, authentication } from '../helpers';

// Login Controller
export const login = async (req: express.Request, res: express.Response) => {
    // Try logging in the user
    try {
        // Extract email & passwords from request body
        const { email, password } = req.body;

        // Check if any param is missing
        if (!email || !password) {
            // Send 400 HTTP error
            return res.sendStatus(400);
        } else {
            // Get the user using email from DB and include authenticaiton @salt & @password
            const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

            // If there is no user with this email
            if (!user) {
                // Send 400 HTTP error
                return res.sendStatus(400);
            } else {
                // Generate the hash
                const expectedHash = authentication(user.authentication.salt, password);

                // Compare the generated hash with the stored hash
                if (user.authentication.password !== expectedHash) {
                    // If no match then send 403 Forbidden HTTP error
                    return res.sendStatus(403);
                } else {
                    // User Authenticated

                    // Generate new salt;
                    const salt = random();

                    // Generate session token
                    user.authentication.sessionToken = authentication(salt, user._id.toString());

                    // Save the new authentication values
                    await user.save();

                    // Set the session token cookie
                    res.cookie('HAIAN-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

                    // Send the user details as JSON in the response
                    return res.status(200).json(user).end();
                }
            }
        }
    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.sendStatus(400);
    }
};

// Registration Controller
export const register = async (req: express.Request, res: express.Response) => {
    // Try registering the user
    try {
        // Extract email, password & username from request body
        const { email, password, username } = req.body;

        // Check if any param is missing
        if (!email || !password || !username) {
            // Send 400 HTTP error
            return res.sendStatus(400).end();
        }

        // Check if there is an existing user with the same email
        const existingUser = await getUserByEmail(email);

        // If found send error
        if (existingUser) {
            // Send 400 HTTP error
            res.sendStatus(400).end();
        } else {
            // Generate authentication salt
            const salt = random();

            // Create the user in the DB with authentication info
            const user = await createUser({
                email,
                username,
                authentication: {
                    salt,
                    password: authentication(salt, password),
                }
            });

            // Send the created user details as JSON in response
            return res.status(200).json(user).end();
        }


    } catch (error) {
        // Log the error
        console.log(error);
        // Send 400 HTTP error
        return res.status(400).end();
    }
}