# REST API
## NodeJS, TypeScript & ExpressJS + Authentication

This is a REST API with authentication built using:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)

### PS: This REST API has been built for testing and educational purposes only. It has a limited functionality.

### Usage:
```
git clone https://github.com/hki98/nodejs-rest-api.git
cd nodejs-rest-api
npm start
```

### Endpoints:
- `AUTHENTICATION:`
  - `[POST] /auth/register` -> Registration.
    ```
    Example Request (JSON):
    {
      "username": "hki98",
      "email": "name@example.com",
      "password": "thatsasecret"
    }
    ```
  - `[POST] /auth/login` -> Login.
    ```
    Example Request (JSON):
    {
      "email": "name@example.com",
      "password": "thatsasecret"
    }
    ```
- `Users:`
  - `[GET] /users` -> Get All Users.
  - `[DELETE] /users/:id` -> Delete User (Logged in user).
    ```
    isAuthenticated & isOwner Middlewares applied (middlewares/index.ts). Logged in user can delete himself only.
    ```
  - `[PATCH] /users/:id` -> Update User (Logged in user & only usename for now).
    ```
    isAuthenticated & isOwner Middlewares applied (middlewares/index.ts). Logged in user can update his username only.
    ```
 
### Packages Used
- ``` express ```
- ``` typescript ```
- ``` http ```
- ``` body-parser ```
- ``` cookie-parser ```
- ``` compression ```
- ``` cors ```
- ``` mongoose ```
- ``` crypto ```
- ``` lodash ```
- ``` nodemon ```
- ``` ts-node ```
