import { AddProductDto } from "./dto/addProductDto.js";
import { UpdateProductDto } from "./dto/updateProductDto.js";
import { ProductEntity } from "../../entities/Product/ProductEntity.js";

export interface ProductRepository {
  add(dto: AddProductDto): ProductEntity;
  getById(id: string): ProductEntity;
  getByName(name: string): ProductEntity;
  getAll(): ProductEntity[];
  remove(id: string): void;
  update(dto: UpdateProductDto): ProductEntity;
}