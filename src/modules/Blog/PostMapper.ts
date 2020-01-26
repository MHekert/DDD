import { Post, PostProperties } from "./domain/Post";
import { IMapper } from "../../shared/IMapper";

export type PostDTO = PostProperties & { id?: string };

export class PostMapper implements IMapper<Post, PostDTO> {
  public toDTO(post: Post): PostDTO {
    return {
      id: post.id,
      author: post.props.author,
      content: post.props.content,
      createdAt: post.props.createdAt,
    }
  }

  public toDomain(data: PostDTO) {
    return Post.create({
      author: data.author,
      content: data.content,
      createdAt: data.createdAt,
    }, data.id);
  }
}
