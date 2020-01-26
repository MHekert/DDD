import { Blog, BlogProperties } from "./domain/Blog";
import { PostMapper, PostDTO } from './PostMapper';
import { Post } from './domain/Post'

export type BlogDTO = Omit<BlogProperties, 'posts'> & { id: string, posts: PostDTO[] };

export class BlogMapper {
  private postMapper: PostMapper;

  constructor(postMapper = new PostMapper()) {
    this.postMapper = postMapper;
  }

  public toDTO(blog: Blog): BlogDTO {
    const posts = blog.props.posts?.map(post => this.postToDTO(post));
    return {
      id: blog.id,
      name: blog.props.name,
      author: blog.props.author,
      subscribers: blog.props.subscribers || [],
      posts: posts || [],
    }
  }

  public toDomain(data: BlogDTO) {
    const posts = data.posts?.map(post => this.postToDomain(post));
    return Blog.create({
      name: data.name,
      author: data.author,
      subscribers: data.subscribers || [],
      posts: posts || [],
    }, data.id);
  }

  public postToDomain(post: PostDTO) {
    return this.postMapper.toDomain(post);
  }

  public postToDTO(post: Post) {
    return this.postMapper.toDTO(post);
  }
}