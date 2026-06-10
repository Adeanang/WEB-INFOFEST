import { Request, Response } from "express";
import { prisma } from "../lib/db";

// GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                id: "asc"
            }
        });

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengambil data user",
            error
        });
    }
};

// GET USER BY ID
export const showUserById = async (
    req: Request<{ id: string }>,
    res: Response
) => {
    const id = parseInt(req.params.id);

    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User tidak ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengambil data user",
            error
        });
    }
};

// CREATE USER
export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, foto } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Nama, email dan password wajib diisi"
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email sudah digunakan"
            });
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                foto
            }
        });

        res.status(201).json({
            success: true,
            message: "User berhasil dibuat",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal membuat user",
            error
        });
    }
};

// UPDATE USER
export const updateUserById = async (
    req: Request<{ id: string }>,
    res: Response
) => {
    const id = parseInt(req.params.id);

    const { name, email, password, foto } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                password,
                foto
            }
        });

        res.status(200).json({
            success: true,
            message: "User berhasil diupdate",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengupdate user",
            error
        });
    }
};

// DELETE USER
export const deleteUserById = async (
    req: Request<{ id: string }>,
    res: Response
) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.user.delete({
            where: { id }
        });

        res.status(200).json({
            success: true,
            message: "User berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal menghapus user",
            error
        });
    }
};
