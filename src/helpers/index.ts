/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: Main Helper File (Authentication Encryption)
*/

import crypto from 'crypto';

const SECRET = 'HAIAN-REST-API'

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};