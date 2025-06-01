export class UpdateUserDto {
  constructor(
    readonly name?: string,
    readonly surname?: string,
    readonly email?: string,
    readonly age?: number,
    readonly password?: string
  ) {}
}