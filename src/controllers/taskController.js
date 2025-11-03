const Task = require('../models/Task');
const { validationResult } = require('express-validator');

exports.getAllTasks = (req, res, next) => {
  Task.getAll((err, tasks) => {
    if (err) return next(err);
    res.json({ success: true, data: tasks });
  });
};

exports.getTaskById = (req, res, next) => {
  Task.getById(req.params.id, (err, task) => {
    if (err) return next(err);
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.json({ success: true, data: task });
  });
};

exports.createTask = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  Task.create(req.body, (err, taskId) => {
    if (err) return next(err);
    Task.getById(taskId, (err2, task) => {
      if (err2) return next(err2);
      res.status(201).json({ success: true, data: task });
    });
  });
};

exports.updateTask = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  Task.update(req.params.id, req.body, (err) => {
    if (err) return next(err);
    Task.getById(req.params.id, (err2, task) => {
      if (err2) return next(err2);
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
      res.json({ success: true, data: task });
    });
  });
};

exports.deleteTask = (req, res, next) => {
  Task.delete(req.params.id, (err) => {
    if (err) return next(err);
    res.json({ success: true, message: 'Task deleted successfully' });
  });
};


