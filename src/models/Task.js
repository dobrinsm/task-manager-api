const db = require('../config/database');

class Task {
  static getAll(callback) {
    db.all('SELECT * FROM tasks ORDER BY created_at DESC', [], callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
  }

  static create(taskData, callback) {
    const { title, description, status, priority } = taskData;
    db.run(
      'INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)',
      [title, description, status || 'pending', priority || 'medium'],
      function(err) {
        callback(err, this ? this.lastID : null);
      }
    );
  }

  static update(id, taskData, callback) {
    const { title, description, status, priority } = taskData;
    db.run(
      `UPDATE tasks 
       SET title = ?, description = ?, status = ?, priority = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, description, status, priority, id],
      callback
    );
  }

  static delete(id, callback) {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
  }
}

module.exports = Task;


