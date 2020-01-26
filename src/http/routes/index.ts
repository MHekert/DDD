import { createUser } from './user/create/route';
import { deleteUser } from './user/delete/route';
import { getUsers } from './user/getMany/route';
import { getUser } from './user/getOne/route';
import { updateUser } from './user/update/route';

import { createBlog } from './blog/create/route';
import { deleteBlog } from './blog/delete/route';
import { getBlogs } from './blog/getMany/route';
import { getBlog } from './blog/getOne/route';
import { updateBlog } from './blog/update/route';
import { subscribeBlog } from './blog/subscribe/route';

import { insertBlogPost } from './blogPost/insert/route';
import { deleteBlogPost } from './blogPost/remove/route';

export const routes = [
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
  createBlog,
  deleteBlog,
  getBlogs,
  getBlog,
  updateBlog,
  subscribeBlog,
  insertBlogPost,
  deleteBlogPost,
];
