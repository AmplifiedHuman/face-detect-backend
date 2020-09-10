# Face Detect Backend

Backend of the [Face Detect Project](https://amplifiedhuman.github.io/face-detect/), built with Node.js, Express.js, and Knex.js.
Password are safely encrytped using brcrypt.

## Installation
1.  Clone the repo using
    
```
git clone https://github.com/AmplifiedHuman/face-detect-backend.git
```
    
2.  Install dependencies
    
```
npm install
```

3. Setup environment variables, create a .env file with the following variables
```
API_KEY=
HOST=
USER=
PASSWORD=
DB=
```

4.  Start the development server   
```
npm start
```

5.  API Link 
```
Visit http://localhost:3001
```

## Endpoints

### Login
Authenticate user given email and password

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  `{
    "email": "John@gmail.com",
    "password": "cookies"
}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": 16,
    "name": "John",
    "email": "John@gmail.com",
    "entries": "18",
    "joined": "2020-08-31T07:27:46.990Z"
}`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"Invalid Credentials"}`
    
### Register
Register user given email, name and password, user email must be unique.
    
* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

  `{
    "email": "Johny123@gmail.com",
    "password": "cookies",
    "name": "Johny"
}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": 30,
    "name": "Johny",
    "email": "Johny123@gmail.com",
    "entries": "0",
    "joined": "2020-09-10T07:15:07.586Z"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"Unable to register user"}`

### Face detection
Given image link, return face detection data.
* **URL**

  /imageURL

* **Method:**

  `POST`

* **Data Params**

  `{
    "input": "https://cdn.vox-cdn.com/thumbor/zcdhPZbwtnwiator3LCNdKmGihw=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13762264/fake_ai_faces.png"
}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** Please refer the [Clarifai Docs](https://www.clarifai.com/models/face-detection) 
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"Unable to call image API"}`
    
### User infomation
Given id, get basic user information
* **URL**

  /profile/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": 30,
    "name": "Johny",
    "email": "Johny123@gmail.com",
    "entries": "1",
    "joined": "2020-09-10T07:15:07.586Z"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{"Unable to get user"}`

### Update Image Entry
Given id, updated entries of the current user, returns the updated count.

* **URL**

  /image

* **Method:**

  `PUT`

* **Data Params**

  `{
    "id": "30"
}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    1
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"Unable to update entries"}`
    

