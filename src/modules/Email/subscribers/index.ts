import { SendEmailOnUserCreated } from './UserCreatedSubscriber';
import { SendEmailOnBlogEntryAddition } from './BlogEntryAddedSubscriber';
import { SendEmailOnBlogSubscribtion } from './BlogSubscribedSubscriber';
import { EmailService } from '../EmailService';

const emailService = new EmailService();

export const sendEmailOnUserCreated = () => {
  return new SendEmailOnUserCreated(emailService);
}

export const sendEmailOnBlogEntryAddition = () => {
  return new SendEmailOnBlogEntryAddition(emailService);
}

export const sendEmailOnBlogSubscribtion = () => {
  return new SendEmailOnBlogSubscribtion(emailService);
}