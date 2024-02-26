import { PartialType } from '@nestjs/mapped-types';
import { CreateCreadoreDto } from './create-creadore.dto';

export class UpdateCreadoreDto extends PartialType(CreateCreadoreDto) {}
