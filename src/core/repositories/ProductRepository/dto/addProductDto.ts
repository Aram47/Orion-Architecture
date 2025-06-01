export class AddProductDto {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly cost: number,
    readonly weight: number
  ) {}
}