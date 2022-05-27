import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { FakeUsersRespository } from "./../../repositories/implementations/FakeUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const fakeUsersRespository = new FakeUsersRespository();

const createUserUseCase = new CreateUserUseCase(
  fakeUsersRespository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
