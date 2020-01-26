import { IEventHandle } from '../../../shared/kernel/events/IEventHandle';
import { DomainEvents } from '../../../shared/kernel/events/DomainEvents'
import { BlogEntryAddedEvent } from '../../Blog/events/BlogEntryAddedEvent';
import { EmailService } from '../EmailService'

export class SendEmailOnBlogEntryAddition implements IEventHandle {
  private emailService: EmailService;

  constructor (emailService: EmailService) {
    this.setupSubscriptions();
    this.emailService = emailService;
  }

  setupSubscriptions() {
    DomainEvents.register(this.onBlogEntryAddedEvent.bind(this), BlogEntryAddedEvent.name);
  }

  private async onBlogEntryAddedEvent (event: BlogEntryAddedEvent){
    const { item } = event;

    this.emailService.sendBulkEmail([item.props.author]);
  }
}
