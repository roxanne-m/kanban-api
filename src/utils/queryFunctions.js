import debug from 'debug';
import '../models/connect';

import { Messages, Users } from '../models/models';

const logger = debug('dev');

const data = [
  { name: 'orji', message: 'second message' },
  { name: 'chidimo', message: 'first message' },
];
const dataUsers = [
  {firstName: 'Garrett', lastName: 'Freddo'},
  {firstName: 'Sarah', lastName: 'Singer'}
]

export const createMessageData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
    const { name, message } = d;
    const m = Messages({ name, message });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const createUserData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
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

export const deleteUserData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { lastName } = d;
    try {
      await Users.deleteOne({ lastName });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteMessageData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { name } = d;
    try {
      await Messages.deleteOne({ name });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});