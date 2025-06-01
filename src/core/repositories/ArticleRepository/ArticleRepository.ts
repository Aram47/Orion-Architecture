import { AddArticleDto } from "./dto/AddArticleDto.js";
import { UpdateArticleDto } from "./dto/UpdateArticleDto.js";
import { ArticleEntity } from "../../entities/Article/ArticleEntity.js";

export interface ArticleRepository {
  add(dto: AddArticleDto): ArticleEntity;
  getById(id: string): ArticleEntity;
  getByName(name: string): ArticleEntity;
  getAll(): ArticleEntity[];
  remove(id: string): void;
  update(dto: UpdateArticleDto): ArticleEntity;
}