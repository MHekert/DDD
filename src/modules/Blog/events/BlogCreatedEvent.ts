import { Event } from "src/shared/kernel/events/Event";
import { Blog } from "../domain/Blog";

export class BlogCreatedEvent extends Event<Blog> {}
