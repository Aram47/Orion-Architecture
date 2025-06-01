import { ProductRepository } from "../../repositories/ProductRepository/ProductRepository.js";

export class ProductService {
  constructor(readonly productRepository: ProductRepository) {}
}