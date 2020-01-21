import uuid = require('uuid');

export interface IEntity {
  id: string;
  props: any;
};

export abstract class Entity<T> implements IEntity {
  public readonly id: string;
  public readonly props: T;

  constructor (props: T, id?: string) {
    this.id = id ? id : uuid.v1();
    this.props = props;
  }

  public equals (comperant?: Entity<T> | string) : boolean {

    if (comperant == null || comperant == undefined) {
      return false;
    }

    if (this === comperant) {
      return true;
    }

    if (typeof comperant === 'string')
      return this.id === comperant;
    
    return this.id === comperant.id;
  }
}