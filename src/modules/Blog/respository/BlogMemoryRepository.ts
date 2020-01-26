
import { MemoryRepository } from '../../../shared/repositories/MemoryRepository';
import { Blog } from '../domain/Blog';
import { BlogDTO, BlogMapper } from '../BlogMapper';
import { PostMapper } from '../PostMapper';

export class BlogMemoryRepository extends MemoryRepository<Blog, BlogDTO> {
  postMapper: PostMapper;
  constructor(items: BlogDTO[], blogMapper: BlogMapper, postMapper: PostMapper) {
    super(items, blogMapper);
    this.postMapper = postMapper;
  }
}