import express from "express";

import {
    getUsers,
    showUserById,
    createUser,
    updateUserById,
    deleteUserById
} from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", showUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;