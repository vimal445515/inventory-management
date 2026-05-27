import { User } from "../../generated/prisma/client";
export interface UserRequest {
  name: string;
  password: string;
  email: string;
  role: string;
}
export interface IUserRepostory<T> {
  create(
    data: UserRequest,
  ): Promise<Pick<User, "id" | "name" | "email" | "role">>;
  findOne(id: number): Promise<User | null>;
}
