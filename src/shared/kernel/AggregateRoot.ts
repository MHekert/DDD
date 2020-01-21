import { Entity } from "./Entity";
import { IDomainEvent } from "./events/IDomainEvent";
import { DomainEvents } from "./events/DomainEvents";

export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: IDomainEvent[] = [];

  constructor(props: T, id?: string) {
    super(props, id);
  }

  get domainEvents() {
    return this._domainEvents;
  }

  protected addDomainEvent (domainEvent: IDomainEvent) {
    this._domainEvents.push(domainEvent);
    DomainEvents.markAggregateForDispatch(this);
  }

  public clearEvents () {
    this._domainEvents = [];
  }
}