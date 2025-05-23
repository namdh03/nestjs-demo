import { PickType } from '@nestjs/mapped-types';

import { CreateResumeDto } from './create-resume.dto';

export class UpdateResumeDto extends PickType(CreateResumeDto, ['status'] as const) {}
