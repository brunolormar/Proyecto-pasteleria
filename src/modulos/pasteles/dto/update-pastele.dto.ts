import { PartialType } from '@nestjs/mapped-types';
import { CreatePasteleDto } from './create-pastele.dto';

export class UpdatePasteleDto extends PartialType(CreatePasteleDto) {}
