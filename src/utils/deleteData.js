import mongoose from 'mongoose';
import { deleteMessageData, deleteUserData } from './queryFunctions';

(async () => {
  await deleteMessageData();
  await deleteUserData();
  mongoose.connection.close();
})();