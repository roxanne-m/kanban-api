import mongoose from 'mongoose';
import { createMessageData, createUserData } from './queryFunctions';

(async () => {
  await createMessageData();
  await createUserData();
  mongoose.connection.close();
})();