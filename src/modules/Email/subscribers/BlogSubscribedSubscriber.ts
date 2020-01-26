import { IEventHandle } from '../../../shared/kernel/events/IEventHandle';
import { DomainEvents } from '../../../shared/kernel/events/DomainEvents'
import { BlogSubscribedEvent } from '../../Blog/events/BlogSubscribedEvent';
import { EmailService } from '../EmailService'

export class SendEmailOnBlogSubscribtion implements IEventHandle {
  private emailService: EmailService;

  constructor (emailService: EmailService) {
    this.setupSubscriptions();
    this.emailService = emailService;
  }

  setupSubscriptions() {
    DomainEvents.register(this.onBlogSubscribedEvent.bind(this), BlogSubscribedEvent.name);
  }

  private async onBlogSubscribedEvent (event: BlogSubscribedEvent) {
    const { item } = event;

    this.emailService.sendBulkEmail(item.props.subscribers);
  }
}
