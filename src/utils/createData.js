import mongoose from 'mongoose';
import { createUserData, createTaskData } from './queryFunctions';

(async () => {
  await createUserData();
  await createTaskData();
  mongoose.connection.close();
})();