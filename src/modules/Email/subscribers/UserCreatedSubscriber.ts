import { IEventHandle } from '../../../shared/kernel/events/IEventHandle';
import { DomainEvents } from '../../../shared/kernel/events/DomainEvents'
import { UserCreatedEvent } from '../../User/events/UserCreatedEvent';
import { EmailService } from '../EmailService'

export class SendEmailOnUserCreated implements IEventHandle {
  private emailService: EmailService;

  constructor (emailService: EmailService) {
    this.setupSubscriptions();
    this.emailService = emailService;
  }

  setupSubscriptions() {
    DomainEvents.register(this.onUserCreatedEvent.bind(this), UserCreatedEvent.name);
  }

  private async onUserCreatedEvent (event: UserCreatedEvent){
    const { item } = event;

    this.emailService.sendEmail(item.props.email)
  }
}
