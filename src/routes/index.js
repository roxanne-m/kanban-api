import express from 'express';

import { usersPage, addUsers } from '../controllers';
import { addTask, deleteTask, tasksPage, updateTask } from '../controllers/tasks';

const indexRouter = express.Router();

indexRouter.put('/tasks', updateTask);
indexRouter.delete('/tasks', deleteTask);
indexRouter.post('/tasks', addTask);
indexRouter.get('/tasks', tasksPage);
indexRouter.get('/users', usersPage);
indexRouter.post('/users', addUsers);


export default indexRouter;