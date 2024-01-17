# NodeJS REST API, TypeScript & ExpressJS + Authentication

This is a REST API with authentication built using:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)

### NOTE: This REST API has been built for testing and educational purposes only. It has a limited functionality.

### Usage:
```
git clone https://github.com/hki98/nodejs-rest-api.git
cd nodejs-rest-api
npm start

You can modify some code (Optional):
- The [ MONGO_URL ] const in (src/index.ts).
- The [ SECRET ] const in (src/helpers/index.ts).
- The [ COOKIE ] name in (src/controllers/authentication.ts).
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
    ```
    isAuthenticated Middlewares applied. Logged in user can list and view all users only.
    ```
  - `[DELETE] /users/:id` -> Delete User (Logged in user).
    ```
    isAuthenticated & isOwner Middlewares applied. Logged in user can delete himself only.
    ```
  - `[PATCH] /users/:id` -> Update User (Logged in user & only usename for now).
    ```
    isAuthenticated & isOwner Middlewares applied. Logged in user can update his username only.
    ```
    [Check: isAuthenticated & isOwner](src/middlewares/index.ts)
    
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

---
