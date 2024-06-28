import { Router } from "express";
import {
  todoCreate,
  todoAll,
  todoDelete,
  todoUpdate,
} from "../controller/todo.controller.js";

const todoRouter = Router();

todoRouter.post("/create", todoCreate);

todoRouter.get("/all/:id", todoAll);

todoRouter.delete("/delete/:id", todoDelete);
todoRouter.put("/update/:id", todoUpdate);
//todoRouter.get("/get-todo/:id", todoAll);
export default todoRouter;
