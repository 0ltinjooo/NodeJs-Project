const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/db.js");

const router = express.Router();


router.post("/login", async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const user = await User.findOne({
            where: {
                username,
                email,
            },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }


        const token = jwt.sign({ id: user.id }, "your_secret_key", {
            expiresIn: "1h",
        });

        return res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
