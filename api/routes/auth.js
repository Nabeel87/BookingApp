import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is auth endPoint.");
})

router.get("/register", (req, res) => {
    res.send("Hello, this is auth register endPoint.");
})

export default router