export class AddArticleDto {
  constructor(
    readonly creatorId: number,
    readonly content: string
  ) {}
}