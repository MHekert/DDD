import { createUser } from './user/create/route';
import { deleteUser } from './user/delete/route';
import { getUsers } from './user/getMany/route';
import { getUser } from './user/getOne/route';

export const routes = [
  createUser,
  deleteUser,
  getUsers,
  getUser,
]