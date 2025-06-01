export class UserEntity {
  constructor(
    readonly name: string,
    readonly surname: string,
    readonly email: string,
    readonly age: number,
    readonly password: string
  ) {}
}