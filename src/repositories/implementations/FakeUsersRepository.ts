import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class FakeUsersRespository implements IUsersRepository {
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  public async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
