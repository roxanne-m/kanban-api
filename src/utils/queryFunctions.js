import debug from 'debug';
import '../models/connect';

import { Messages, Tasks, Users } from '../models/models';

const logger = debug('dev');

const dataTasks = [
  { title: 'fakeTitle', description: 'fakeDescription', assignee: 'fakeAssignee', type:'TODO' },
  { title: 'fakeTitle1', description: 'fakeDescription1', assignee: 'fakeAssignee1', type:'TODO' },
];
const dataUsers = [
  {firstName: 'Garrett', lastName: 'Freddo'},
  {firstName: 'Sarah', lastName: 'Singer'}
]

export const createUserData = async () => new Promise(resolve => {
  const stop = dataUsers.length;

  dataUsers.forEach(async (d, index) => {
    const { firstName, lastName } = d;
    const m = Users({ firstName, lastName });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const createTaskData = async () => new Promise(resolve => {
  const stop = dataTasks.length;

  dataTasks.forEach(async (d, index) => {
    const { title, description, type, assignee } = d;
    const m = Tasks({ title, description, type, assignee  });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteUserData = async () => new Promise(resolve => {
  const stop = dataUsers.length;
  dataUsers.forEach(async (d, index) => {
    const { lastName } = d;
    try {
      await Users.deleteOne({ lastName });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteTaskData = async () => new Promise(resolve => {
  const stop = dataUsers.length;
  dataUsers.forEach(async (d, index) => {
    const { title } = d;
    try {
      await Users.deleteOne({ title });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});
