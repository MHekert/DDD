import { IDomainEvent } from "./IDomainEvent";
import { IEntity } from "../Entity";

export abstract class Event<T extends IEntity> implements IDomainEvent {
  public dateTimeOccurred: Date;
  public item: T;

  constructor (item: T) {
    this.dateTimeOccurred = new Date();
    this.item = item;
  }
  
  getAggregateId (): string {
    return this.item.id;
  }
}