import { Router } from "express";
import { createUserController } from "./UseCases/CreatUser";

const router = Router();

router.post("/users", (req, res) => {
  return createUserController.handle(req, res);
});

export { router };
