const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Task Manager API',
    version: '1.0.0',
    endpoints: { tasks: '/api/tasks' }
  });
});

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;


