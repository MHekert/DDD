import { Event } from "src/shared/kernel/events/Event";
import { Blog } from "../domain/Blog";

export class BlogEntryAddedEvent extends Event<Blog> {}
