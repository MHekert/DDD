import { User, UserProperties } from "./domain/User";
import { Password } from "./domain/Password";
import { IMapper } from "src/shared/IMapper";

export type UserDTO = Omit<UserProperties, 'password'> & { password: string, id: string };

export class UserMapper implements IMapper<User, UserDTO> {
  public toDTO(user: User): UserDTO {
    return {
      id: user.id,
      firstName: user.props.firstName,
      lastName: user.props.lastName,
      isEmailVerified: user.props.isEmailVerified,
      email: user.props.email,
      password: user.props.password.value,
    }
  }

  public toDomain(data: UserDTO) {
    const password = data.id ? Password.create(data.password) : Password.create(data.password, true);
    return User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      isEmailVerified: data.isEmailVerified,
      password,
    }, data.id);
  }
}