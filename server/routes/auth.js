import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("user not found with this username!!!");

        const correctPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !correctPassword && res.status(401).json("Invalid credentials");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );

        const { password, ...other } = user._doc;

        res.status(200).json({ ...other, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/logout", (req, res) => {});

export default router;
