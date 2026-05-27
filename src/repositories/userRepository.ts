import { User } from "../../generated/prisma/client";
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { Product } from "../../generated/prisma/client";
import { IUserRepostory, UserRequest } from "../modles/IUserRepository";

@injectable()
export class UserRepository implements IUserRepostory<User> {
  async create(
    data: UserRequest,
  ): Promise<Pick<User, "id" | "name" | "email" | "role">> {
    return prisma.user.create({
      data,
      select: { name: true, id: true, email: true, role: true },
    });
  }

  async findOne(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}
