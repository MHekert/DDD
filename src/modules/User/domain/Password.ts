import validator from 'validator';
import bcrypt from 'bcrypt';
import { UserExceptions } from '../exceptions/UserExceptions';
import { Exceptions } from '../../../shared/exceptions/Exceptions';

const passwordRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';

export interface Password {
  value: string;
  plain: boolean;
}

export class Password {
  private constructor(value: string) {
    this.value = value;
    this.plain = false;
  }

  public static create(password: string, plain = false) {
    if (!password) 
      throw new Exceptions.emptyProperty('password');

    if (!validator.isLength(password, { min: 6 }))
      throw new Exceptions.propertyTooShort('password');

    if (!validator.matches(password, passwordRegex))
      throw new UserExceptions.notComplexPassword();

    if (!plain) 
      return new this(password);

    return new this(this.hash(password))
  }

  private static hash(plainPassword: string) {
    return bcrypt.hashSync(plainPassword, 10)
  }

  public compare(plainPassword: string) {
    return bcrypt.compareSync(plainPassword, this.value);
  }
}