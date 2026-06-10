
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../lib/db.js";
import jwt from "jsonwebtoken";

export const login = async(req: Request, res: Response) => {
    //menagkap data yg dikirim dari client
    const {email, password} = req.body;
    //validasi input user
    if(!email || !password){
        return res.status(400).json({
            message: "email dan password harus diisi"
        });
    }
    //cek existing data
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

    //jika tidak ada maka tampilkan pesan error
    if(!existingUser){
        return res.status(400).json({
            message: "User tidak ditemukan"
        });
    }
    // jika ada maka cek password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    //jika password salah maka tampilkan pesan error
    if(!isPasswordValid){
        return res.status(400).json({
            message: "Password salah"
        });
    }

    const token = jwt.sign(
        { 
            userId: existingUser.id,
            email: existingUser.email

         }, 
         process.env.JWT_SECRET,
            { 
                expiresIn: "1h" 
            });
 
    //jika password benar maka kembalikan response berhasil
    return res.status(200).json({
        message: "Login berhasil",
        token,
        user: {
            name: existingUser.name,
            email: existingUser.email
        }
    });
}

export const register = async(req: Request, res: Response) => {
    //menagkap data yg dikirim dari client
    const {name, email, password} = req.body;

    //validasi input user
    if(!name || !email || !password){
        return res.status(400).json({
            message: "email pasword dan name harus diisi"
        });
    }

    try {
        //cek existing data
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        //jika sudah ada maka tampilkan pesan error
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        //jika belum ada maka buat user baru lalu simpan data ke database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                foto: ""
            }
        });

        //kembalikan response berhasil
        return res.status(201).json({
            message: "Register berhasil",
            data: newUser
        });

    } catch(error){
        return res.status(500).json({
            message: "Terjadi kesalahan server",
            error
        });
    }
}
