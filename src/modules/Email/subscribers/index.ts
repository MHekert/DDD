import { SendEmailOnUserCreated } from './UserCreatedSubscriber';
import { EmailService } from '../EmailService';

const emailService = new EmailService();

export const sendEmailOnUserCreated = () => {
  return new SendEmailOnUserCreated(emailService);
}
