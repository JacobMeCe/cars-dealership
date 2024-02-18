import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string;
}

// DTO siempre es clase, no es una interfaz