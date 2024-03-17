import { IsString, MinLength } from "class-validator";


export class CreateCreadoreDto {
    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(10)
    nombre: string;

}