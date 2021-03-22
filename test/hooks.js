
import mongoose from 'mongoose';
import { createTaskData, createUserData, deleteTaskData, deleteUserData } from '../src/utils/queryFunctions';

before(async () => {
  await createTaskData();
  await createUserData();
});

after(async () => {
  await deleteUserData();
  await deleteTaskData();
  mongoose.connection.close();
});