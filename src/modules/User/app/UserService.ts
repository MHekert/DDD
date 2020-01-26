import { UserMemoryRepository } from '../respository/UserMemoryRepository'
import { UserDTO } from '../UserMapper';

import { Exceptions } from '../../../shared/exceptions/Exceptions'
import { DomainEvents } from 'src/shared/kernel/events/DomainEvents';
import { UserProperties } from '../domain/User';


export interface UserService {
  repository: UserMemoryRepository;
}

export class UserService {
  constructor(repository: UserMemoryRepository) {
    this.repository = repository;
  }

  async create(data: UserDTO) {
    const user = this.repository.mapper.toDomain(data);

    if ((await this.repository.exists(user))) {
      throw new Exceptions.alreadyExists();
    }

    try {
      await this.repository.save(user);
      DomainEvents.dispatchEventsForAggregate(user.id);
      return this.repository.mapper.toDTO(user);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async delete(senderId: string, toDeleteId: string) {
    const toDeleteUser = await this.repository.getById(toDeleteId);

    if (!toDeleteUser) 
      throw new Exceptions.notFound();
  
    if (!toDeleteUser.equals(senderId)) 
      throw new Exceptions.forbidden();

    toDeleteUser.delete();
    try {
      await this.repository.delete(toDeleteUser.id);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async update(senderId: string, toUpdateId: string, props: UserProperties) {
    const toUpdateUser = await this.repository.getById(toUpdateId);

    if (!toUpdateUser) 
      throw new Exceptions.notFound();
  
    if (!toUpdateUser.equals(senderId)) 
      throw new Exceptions.forbidden();

    const updatedUser = toUpdateUser.edit(props);
    try {
      await this.repository.save(updatedUser);
      return this.repository.mapper.toDTO(updatedUser);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async getById(userId: string) {
    const user = await this.repository.getById(userId);
    if (!user) return null;

    return this.repository.mapper.toDTO(user)
  }

  async get() {
    const users = await this.repository.get();
    return users.map(this.repository.mapper.toDTO);
  }
}