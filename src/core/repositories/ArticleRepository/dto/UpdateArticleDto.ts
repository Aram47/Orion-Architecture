export class UpdateArticleDto {
  constructor(
    readonly creatorId?: number,
    readonly content?: string
  ) {}
}