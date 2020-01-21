import { Event } from "src/shared/kernel/events/Event";
import { User } from "../domain/User";

export class UserCreatedEvent extends Event<User> {}
