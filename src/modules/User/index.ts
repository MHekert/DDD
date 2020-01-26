import { UserMemoryRepository } from './respository/UserMemoryRepository';
import { UserService } from './app/UserService';
import { UserMapper } from './UserMapper';

const userMapper = new UserMapper();
export const userMemoryRepository = new UserMemoryRepository([], userMapper);

export const userService = new UserService(userMemoryRepository);
