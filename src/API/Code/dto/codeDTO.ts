import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CodeDTO {
  @IsNotEmpty()
	@IsString()
  @MinLength(13)
  @MaxLength(24)
	public readonly code: string;
}