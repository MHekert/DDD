import { Event } from "src/shared/kernel/events/Event";
import { User } from "../domain/User";

export class UserDeletedEvent extends Event<User> {}
