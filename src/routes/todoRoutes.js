import express from 'express';
import { createTodo, getAllTodos, getOneTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = express.Router();


router.post("/", createTodo);
router.get("/", getAllTodos);
router.get("/:id", getOneTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;