# REST API
## NodeJS, TypeScript & ExpressJS + Authentication

This is a REST API with authentication built using:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)

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
 
### PS: This REST API has been built for testing and educational purposes. It has a limited functionality.
