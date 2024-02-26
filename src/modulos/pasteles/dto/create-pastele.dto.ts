import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePasteleDto {
    @IsString()
    @MinLength(1)
    Pastelid: string;

    @IsString()
    @MinLength(10)
    nombre: string;

    @IsString()
    @IsOptional()
    thumbnailUrl: string;

    @IsString()
    @IsOptional()
    Description: string;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsString()
    @MinLength(3)
    creador?: string;
}
