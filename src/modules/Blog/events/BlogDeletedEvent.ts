import { Event } from "src/shared/kernel/events/Event";
import { Blog } from "../domain/Blog";

export class BlogDeletedEvent extends Event<Blog> {}
