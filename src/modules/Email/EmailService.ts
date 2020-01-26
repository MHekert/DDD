import { userMemoryRepository } from '../User'

export class EmailService {
  async sendEmail(recipient: string) {
    console.log('TODO', recipient);
  }

  async sendBulkEmail(ids: string[]) {
    const emails = await this.translateIdToEmail(ids);
    emails.forEach(this.sendEmail);
  }

  async translateIdToEmail(ids: string[]) {
    return userMemoryRepository.getEmails(ids);
  }
}