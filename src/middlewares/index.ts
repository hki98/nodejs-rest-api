/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Middleware File
*/

import express from 'express';
import { get, merge } from 'lodash';

import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['HAIAN-AUTH'];

        if (!sessionToken) {
            return res.sendStatus(403);
        } else {
            const existingUser = await getUserBySessionToken(sessionToken);

            if (!existingUser) {
                return res.sendStatus(403);
            } else {
                merge(req, { identity: existingUser });

                return next();
            }
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};