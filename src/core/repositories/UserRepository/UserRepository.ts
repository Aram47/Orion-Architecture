import { AddUserDto } from "./dto/AddUserDto.js";
import { UpdateUserDto } from "./dto/UpdateUserDto.js";
import { UserEntity } from "../../entities/User/UserEntity.js";

export interface UserRepository {
  add(dto: AddUserDto): UserEntity;
  getById(id: string): UserEntity;
  getByName(name: string): UserEntity;
  getAll(): UserEntity[];
  remove(id: string): void;
  update(dto: UpdateUserDto): UserEntity;
}