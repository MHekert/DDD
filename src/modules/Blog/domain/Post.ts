import validator from 'validator';
import { Entity } from 'src/shared/kernel/Entity';
import { Exceptions } from '../../../shared/exceptions/Exceptions';

export interface PostProperties {
  author: string;
  content: string;
  createdAt?: Date;
}

export class Post extends Entity<PostProperties> {
  constructor(props: PostProperties, id?: string) {
    super(props, id);
  }

  get value() {
    return this.props;
  }

  public static create(props: PostProperties, id?: string) {
    if (validator.isEmpty(props.content))
      throw new Exceptions.emptyProperty('content');
    
    if (!id)
      props.createdAt = new Date();

    const post = new this(props, id);
    
    return post;
  }

  public isAuthor(userId: string) {
    return userId === this.props.author;
  }
}