import { Body, Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';

import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { Job, JobDocument } from 'src/jobs/entities/job.entity';
import { Subscriber, SubscriberDocument } from 'src/subscribers/entities/subscriber.entity';

import { MailerService } from '@nestjs-modules/mailer';

@Controller('mail')
export class MailController {
  constructor(
    private mailerService: MailerService,
    @InjectModel(Subscriber.name)
    private subscriberModel: SoftDeleteModel<SubscriberDocument>,
    @InjectModel(Job.name)
    private jobModel: SoftDeleteModel<JobDocument>,
  ) {}

  @Public()
  @Get()
  @ResponseMessage('Test email')
  @Cron(CronExpression.EVERY_WEEKEND)
  async handleTestEmail() {
    const subscribers = await this.subscriberModel.find();

    for (const subs of subscribers) {
      const subsSkills = subs.skills;
      const jobWithMatchingSkills = await this.jobModel.find({ skills: { $in: subsSkills } });
      if (jobWithMatchingSkills) {
        const jobs = jobWithMatchingSkills.map((item) => ({
          name: item.name,
          company: item.company,
          salary: `${item.salary}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ',
          skills: item.skills,
        }));

        await this.mailerService.sendMail({
          to: 'namdhse172173@fpt.edu.vn',
          from: '"Support Team" <support@example.com>',
          subject: 'Welcome to Nice App! Confirm your Email',
          template: 'new-job',
          context: {
            receiver: subs.name,
            jobs,
          },
        });
      }
    }
  }
}
