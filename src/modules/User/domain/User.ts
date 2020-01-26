import { AggregateRoot } from '../../../shared/kernel/AggregateRoot';
import validator from 'validator';
import { UserExceptions } from '../exceptions/UserExceptions';
import * as events from '../events';
import { Password } from './Password';
import { Exceptions } from '../../../shared/exceptions/Exceptions';

export interface UserProperties {
  firstName: string;
  lastName: string;
  email: string;
  password: Password;
  isEmailVerified?: boolean;
}

export class User extends AggregateRoot<UserProperties> {
  constructor(props: UserProperties, id?: string) {
    super(props, id);
  }

  get value() {
    return this.props;
  }

  private static validate(props: UserProperties) {
    if (!validator.isEmail(props.email))
      throw new UserExceptions.notValidEmail();

    if (validator.isEmpty(props.lastName))
      throw new Exceptions.emptyProperty('email');

    if (validator.isEmpty(props.firstName))
      throw new Exceptions.emptyProperty('firstName');

    if (validator.isEmpty(props.lastName))
      throw new Exceptions.emptyProperty('lastName');
  }

  public static create(props: UserProperties, id?: string) {
    this.validate(props);

    props.isEmailVerified = Boolean(props.isEmailVerified);

    const user = new this(props, id);

    if (!Boolean(id)) 
      user.addDomainEvent(new events.UserCreatedEvent(user));
    
    return user;
  }

  public delete() {
    this.addDomainEvent(new events.UserDeletedEvent(this));
  }

  public edit(props: UserProperties) {
    User.validate(props);

    const user = new User(props, this.id);
    this.addDomainEvent(new events.UserEditedEvent(user));
    return user;
  }
}