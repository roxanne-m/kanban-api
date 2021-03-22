import { Users } from '../models/models';

export const usersPage = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

export const addUsers = async (req, res, next) => {
  console.log(req.body.firstName, req.body.lastName);
  const { firstName, lastName } = req.body;
  try {
    const m = await Users({ firstName, lastName }).save();
    res.status(201).json({ success: true, user: m });
  } catch (err) {
    next(err);
  }
};