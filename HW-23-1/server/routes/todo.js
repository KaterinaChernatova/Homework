const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create
router.post('/', async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
        checked: req.body.checked || false
    });
    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (req.body.text) {
            todo.text = req.body.text;
        }
        if (req.body.checked !== undefined) {
            todo.checked = req.body.checked;
        }
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        await todo.remove();
        res.json({ message: 'Deleted Todo' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
