# NodeJS REST API, TypeScript & ExpressJS + Authentication

This is a REST API with authentication built using:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)

### NOTE: This REST API has been built for testing and educational purposes only. It has a limited functionality.

### Usage:
```bash
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
    ```json
    Example Request (JSON):
    {
      "username": "hki98",
      "email": "name@example.com",
      "password": "thatsasecret"
    }
    ```
  - `[POST] /auth/login` -> Login.
    ```json
    Example Request (JSON):
    {
      "email": "name@example.com",
      "password": "thatsasecret"
    }
    ```
- `Users:`
  - `[GET] /users` -> Get All Users.
    ```typescript
    isAuthenticated() Middlewares applied. Logged in user can list and view all users only.
    ```
  - `[DELETE] /users/:id` -> Delete User (Logged in user).
    ```typescript
    isAuthenticated() & isOwner() Middlewares applied. Logged in user can delete himself only.
    ```
  - `[PATCH] /users/:id` -> Update User (Logged in user & only usename for now).
    ```typescript
    isAuthenticated() & isOwner() Middlewares applied. Logged in user can update his username only.
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
I'm open to work, let's connect: [Haian K. Ibrahim](https://linkedin.com/in/haian-k-ibrahim) | [contact [at] haian.me](mailto:contact@haian.me)
