import { BlogMemoryRepository } from './respository/BlogMemoryRepository';
import { BlogService } from './app/BlogService';
import { BlogMapper } from './BlogMapper';
import { PostMapper } from './PostMapper';

const postMapper = new PostMapper();
const blogMapper = new BlogMapper(postMapper);

const blogMemoryRepository = new BlogMemoryRepository([], blogMapper, postMapper);

export const blogService = new BlogService(blogMemoryRepository, postMapper);
