import { DomainException } from '../../../shared/kernel/DomainException'
import { userExceptionDefinitions } from './userExceptionDefinitions'

export namespace Exceptions {
  export class notValidEmail extends DomainException {
    constructor() {
      super(userExceptionDefinitions.notValidEmail)
    }
  }

  export class tooShortPassword extends DomainException {
    constructor() {
      super(userExceptionDefinitions.tooShortPassword)
    }
  }

  export class notComplexPassword extends DomainException {
    constructor() {
      super(userExceptionDefinitions.notComplexPassword)
    }
  }
  
  export class emptyProperty extends DomainException {
    constructor(prop: string) {
      super(userExceptionDefinitions.emptyProperty(prop))
    }
  }

  export class alreadyExists extends DomainException {
    constructor() {
      super(userExceptionDefinitions.alreadyExists)
    }
  }

  export class saveFail extends DomainException {
    constructor() {
      super(userExceptionDefinitions.saveFail);
    }
  }

  export class forbidden extends DomainException {
    constructor() {
      super(userExceptionDefinitions.forbidden);
    }
  }

  export class notFound extends DomainException {
    constructor() {
      super(userExceptionDefinitions.notFound);
    }
  }
}