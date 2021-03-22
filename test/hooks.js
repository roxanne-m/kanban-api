
import mongoose from 'mongoose';
import { createUserData, deleteUSerData } from '../src/utils/queryFunctions';

before(async () => {
  await createData();
});

after(async () => {
  await deleteData();
  mongoose.connection.close();
});