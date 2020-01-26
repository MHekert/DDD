import { DomainException } from '../kernel/DomainException'
import { exceptionDefinitions } from './exceptionDefinitions'

export namespace Exceptions {
  export class emptyProperty extends DomainException {
    constructor(prop: string) {
      super(exceptionDefinitions.emptyProperty(prop))
    }
  }

  export class alreadyExists extends DomainException {
    constructor() {
      super(exceptionDefinitions.alreadyExists)
    }
  }

  export class saveFail extends DomainException {
    constructor() {
      super(exceptionDefinitions.saveFail);
    }
  }

  export class forbidden extends DomainException {
    constructor() {
      super(exceptionDefinitions.forbidden);
    }
  }

  export class notFound extends DomainException {
    constructor() {
      super(exceptionDefinitions.notFound);
    }
  }

  export class propertyTooShort extends DomainException {
    constructor(prop: string) {
      super(exceptionDefinitions.propertyTooShort(prop))
    }
  }

  export class propertyTooLong extends DomainException {
    constructor(prop: string) {
      super(exceptionDefinitions.propertyTooLong(prop))
    }
  }
}