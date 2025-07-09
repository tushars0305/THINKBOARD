import express from "express";
import { createNote, updateNote ,getAllNotes ,deleteNote } from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.get("/:id", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);