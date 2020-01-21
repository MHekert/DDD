
import { MemoryRepository } from '../../../shared/repositories/MemoryRepository'
import { User } from '../domain/User'
import { UserDTO, UserMapper } from '../UserMapper';


export class UserMemoryRepository extends MemoryRepository<User, UserDTO> {
  constructor(items: UserDTO[], userMapper: UserMapper) {
    super(items, userMapper);
  }

  async exists(input: User) {
    return await super.exists(input) || Boolean(this.items.find(e => e.email === input.props.email));
  }
}