/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Helper File (Authentication Encryption)
*/

import crypto from 'crypto';

// Encryption secret key
const SECRET = 'HAIAN-REST-API'

// Create random 128 bytes base64 string
export const random = () => crypto.randomBytes(128).toString('base64');

// Get salt & password
export const authentication = (salt: string, password: string) => {
    // Merge salt, password & secret
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};