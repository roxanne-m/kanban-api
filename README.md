
### Run the server locally
1) clone the repo
2) cd into kanban-api
3) run npm install
4) start up mongodb
5) create a .env with CONNECTION_STRING="mongodb://localhost:27017" (obviously modify to the port you're using, make sure its in the right folder)
6) use yarn start to start the program
7) if for whatever reason yarn start is not working, try yarn startdev
8) The server will by default run on localhost 9000

To make the frontend interact with the backend, I'd highly reccomend using CORS

### ROUTES

The routes can all be found in the routes/index.js file in the repository, but this is a brief summary

#### TASKS:

path: /tasks

For the different tasks, there are 4 separate routes:
1) put (updates the task); arguments: type, assignee, title, description
2) delete (deletes the task); arguments: title
3) post (creates the task); arguments: type, assignee, title, description
4) get (retrieves the task); arguments: none

#### USERS:

path : /users

For the different users, there are 2 separate routes:
1) get (retrieves the user); arguments: none
2) post (creates the user); arguments: firstName, lastName

#### User model: 
```javascript
const userSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
})
```

#### Task model: 

```javascript
const taskSchema = new Schema({
  type: { 
    type: String, 
    enum : ['TO DO', 'IN PROGRESS', 'COMPLETE', 'IN REVIEW'], 
    default: 'TO DO', 
    },
    assignee: { type: String, required: false},
    title: {type: String, required: true},
    description: {type: String, required: false},
    dateDue: {type: Date, required: true},
})
```
   
