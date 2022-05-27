import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
require("dotenv/config");
const MAIL_USER = process.env.NODEMAILER_USER;
const MAIL_PASS = process.env.NODEMAILER_PASS;

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
