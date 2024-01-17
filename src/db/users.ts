/*
    @project: NodeJS REST API
    @author: Haian K. Ibrahim (@hki98)
    @year: 2024

    @file: DB Functions File
*/

import mongoose from "mongoose";

// Create MongoDB Schema
const UserSchema = new mongoose.Schema({
    // Username: string & required
    username: { type: String, required: true },
    // Email: string & required
    email: { type: String, required: true },
    // Authentication object containing @password, @salt & @sessionToken
    authentication: {
        // password: string, required & not selected
        password: { type: String, required: true, select: false },
        // salt: string & not selected
        salt: { type: String, select: false },
        // sessionToken: string & not selected
        sessionToken: { type: String, select: false },
    },
});

// Create MonogDB Model
export const UserModel = mongoose.model('User', UserSchema);

// Get all users from DB
export const getUsers = () => UserModel.find();

// Get the user using the provided email
export const getUserByEmail = (email: string) => UserModel.findOne({ email });

// Get the user using the provided session token
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
});

// Get the user using the provided ID
export const getUserById = (id: string) => UserModel.findById(id);

// Create a new user
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());

// Delete a user using the provided ID
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });

// Update a user using the provided ID
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);