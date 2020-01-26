import { BlogMemoryRepository } from '../respository/BlogMemoryRepository'
import { BlogDTO } from '../BlogMapper';
import { Exceptions } from '../../../shared/exceptions/Exceptions';
import { DomainEvents } from '../../../shared/kernel/events/DomainEvents';
import { BlogProperties } from '../domain/Blog';
import { PostMapper } from '../PostMapper';
import { PostProperties } from '../domain/Post';

export interface BlogService {
  repository: BlogMemoryRepository;
  postMapper: PostMapper;
}

export class BlogService {
  constructor(repository: BlogMemoryRepository, postMapper: PostMapper) {
    this.repository = repository;
    this.postMapper = postMapper;
  }

  async create(data: BlogDTO) {
    const blog = this.repository.mapper.toDomain(data);

    if ((await this.repository.exists(blog))) {
      throw new Exceptions.alreadyExists();
    }

    try {
      await this.repository.save(blog);
      DomainEvents.dispatchEventsForAggregate(blog.id);
      return this.repository.mapper.toDTO(blog);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async delete(senderId: string, toDeleteId: string) {
    const toDeleteBlog = await this.repository.getById(toDeleteId);

    if (!toDeleteBlog) 
      throw new Exceptions.notFound();
  
    if (!toDeleteBlog.isAuthor(senderId)) 
      throw new Exceptions.forbidden();

    toDeleteBlog.delete();
    try {
      await this.repository.delete(toDeleteBlog.id);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async update(senderId: string, toUpdateId: string, props: BlogProperties) {
    const toUpdateBlog = await this.repository.getById(toUpdateId);

    if (!toUpdateBlog) 
      throw new Exceptions.notFound();
  
    if (!toUpdateBlog.isAuthor(senderId)) 
      throw new Exceptions.forbidden();

    const updatedBlog = toUpdateBlog.edit(props);
    try {
      await this.repository.save(updatedBlog);
      return this.repository.mapper.toDTO(updatedBlog);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async getById(blogId: string) {
    const blog = await this.repository.getById(blogId);
    if (!blog) return null;

    return this.repository.mapper.toDTO(blog)
  }

  async get() {
    const blogs = await this.repository.get();
    return blogs.map(this.repository.mapper.toDTO);
  }

  async addPost(blogId: string, props: PostProperties) {
    const blog = await this.repository.getById(blogId);

    if (!blog) 
      throw new Exceptions.notFound();

    const post = this.postMapper.toDomain(props);
    blog.addPost(post);

    try {
      await this.repository.save(blog);
      DomainEvents.dispatchEventsForAggregate(blog.id);
      return this.postMapper.toDTO(post);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async removePost(senderId: string, blogId: string, postId: string) {
    const blog = await this.repository.getById(blogId);
    if (!blog) 
      throw new Exceptions.notFound();

    const post = blog.props.posts.find(post => post.equals(postId))
    if (!(blog.isAuthor(senderId) || post?.isAuthor(senderId))) 
      throw new Exceptions.forbidden();

    blog.removePost(postId);

    try {
      this.repository.save(blog);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }

  async subscribe(userId: string, blogId: string, subscribe = true) {
    const blog = await this.repository.getById(blogId);
    if (!blog) 
      throw new Exceptions.notFound();

    if (subscribe) {
      blog.subscribe(userId);
    } else {
      blog.unsubscribe(userId);
    }

    try {
      await this.repository.save(blog);
      // if (subscribe) 
      DomainEvents.dispatchEventsForAggregate(blogId);
    } catch (e) {
      throw new Exceptions.saveFail();
    }
  }
}