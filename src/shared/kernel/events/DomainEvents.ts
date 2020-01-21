import { AggregateRoot } from "../AggregateRoot";
import { IDomainEvent } from "./IDomainEvent";

export class DomainEvents {
  private static handlersMap: any = {};
  private static markedAggregates: AggregateRoot<any>[] = [];

  public static markAggregateForDispatch (aggregate: AggregateRoot<any>) {
    if (!this.findMarkedAggregateByID(aggregate.id))
      this.markedAggregates.push(aggregate);
  }

  private static dispatchAggregateEvents (aggregate: AggregateRoot<any>) {
    aggregate.domainEvents.forEach((event: IDomainEvent) => this.dispatch(event));
  }

  private static removeAggregateFromMarkedDispatchList (aggregate: AggregateRoot<any>) {
    this.markedAggregates.filter(agg => agg.equals(aggregate));
  }

  private static findMarkedAggregateByID (id: string) {
    return this.markedAggregates.find(agg => agg.id === id);
  }

  public static dispatchEventsForAggregate (id: string) {
    const aggregate = this.findMarkedAggregateByID(id);

    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clearEvents();
      this.removeAggregateFromMarkedDispatchList(aggregate);
    }
  }

  public static register(callback: (event: IDomainEvent) => void, eventClassName: string) {
    if (!this.handlersMap.hasOwnProperty(eventClassName)) {
      this.handlersMap[eventClassName] = [];
    }
    this.handlersMap[eventClassName].push(callback);
  }

  public static clearHandlers(): void {
    this.handlersMap = {};
  }

  public static clearMarkedAggregates(): void {
    this.markedAggregates = [];
  }


  private static dispatch (event: IDomainEvent): void {
    const eventClassName = event.constructor.name;
    if (this.handlersMap.hasOwnProperty(eventClassName))
      this.handlersMap[eventClassName]
        .forEach((handler: (event: IDomainEvent) => void) => handler(event))
  }
}