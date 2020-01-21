export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId (): string;
  item: any;
}