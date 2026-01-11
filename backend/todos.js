const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json( { message: "Error fetching todos"});
    }
});

// POST a new todo
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
        });

        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    }   catch (err) {
        res.status(500).json({ message: "Error creating todo"});
    }
});

module.exports = router; 