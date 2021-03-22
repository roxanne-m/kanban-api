import { Schema, model, Mongoose } from 'mongoose';

const messageSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

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

const userSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
})

export const Messages = model('messages', messageSchema);
export const Users    = model('users', userSchema);
export const Tasks    = model('tasks', taskSchema);