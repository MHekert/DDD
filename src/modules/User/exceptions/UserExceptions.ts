import { DomainException } from '../../../shared/kernel/DomainException'
import { userExceptionDefinitions } from './userExceptionDefinitions'

export namespace UserExceptions {
  export class notValidEmail extends DomainException {
    constructor() {
      super(userExceptionDefinitions.notValidEmail)
    }
  }

  export class notComplexPassword extends DomainException {
    constructor() {
      super(userExceptionDefinitions.notComplexPassword)
    }
  }
}