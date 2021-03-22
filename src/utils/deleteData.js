import mongoose from 'mongoose';
import { deleteUserData, deleteTaskData } from './queryFunctions';

(async () => {
  await deleteUserData();
  await deleteTaskData();
  mongoose.connection.close();
})();