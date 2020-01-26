import { uniq } from 'lodash';
import { AggregateRoot } from '../../../shared/kernel/AggregateRoot';
import validator from 'validator';
import { Exceptions } from '../../../shared/exceptions/Exceptions';
import * as events from '../events';
import { Post } from './Post';

export interface BlogProperties {
  name: string;
  author: string;
  subscribers: string[];
  posts: Post[];
}

export class Blog extends AggregateRoot<BlogProperties> {
  constructor(props: BlogProperties, id?: string) {
    super(props, id);
  }

  get value() {
    return this.props;
  }

  private static validate(props: BlogProperties) {
    if (validator.isEmpty(props.author))
      throw new Exceptions.emptyProperty('author');

    if (validator.isEmpty(props.name))
      throw new Exceptions.emptyProperty('name');

    if(!validator.isLength(props.name, { min: 4}))
      throw new Exceptions.propertyTooShort('name');

    if(!validator.isLength(props.name, { max: 20}))
      throw new Exceptions.propertyTooLong('name');
  }

  public static create(props: BlogProperties, id?: string) {
    this.validate(props);

    const blog = new this(props, id);

    if (!id) 
      blog.addDomainEvent(new events.BlogCreatedEvent(blog));
    
    return blog;
  }

  public delete() {
    this.addDomainEvent(new events.BlogDeletedEvent(this));
  }

  public edit(props: BlogProperties) {
    Blog.validate(props);

    const newProps = { ...this.props, ...props };
    const blog = new Blog(newProps, this.id)
    this.addDomainEvent(new events.BlogEditedEvent(blog));
    return blog;
  }

  public isAuthor(userId: string) {
    return userId === this.props.author;
  }

  public addPost(post: Post) {
    this.props.posts.push(post);
    this.addDomainEvent(new events.BlogEntryAddedEvent(this));
    return this;
  }

  public removePost(postId: string) {
    this.props.posts = this.props.posts.filter(post => !post.equals(postId));
    this.addDomainEvent(new events.BlogEntryAddedEvent(this));
    return this;
  }

  public subscribe(userId: string) {
    this.props.subscribers = uniq([...this.props.subscribers, userId]);
    this.addDomainEvent(new events.BlogSubscribedEvent(this));
    return this;
  }

  public unsubscribe(userId: string) {
    this.props.subscribers = this.props.subscribers.filter(sub => sub !== userId);
    return this;
  }
}