# Task Manager API

A production-ready REST API for managing tasks built with Node.js, Express, and SQLite.

## Quick Start

### Windows (PowerShell)

```powershell
cd task-manager-api
npm install
Copy-Item .env.example .env
npm run dev
```

Open http://localhost:3000

### Docker

```powershell
cd task-manager-api
docker-compose up -d
```

## Endpoints

- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

# Task Manager API

A production-ready REST API for managing tasks built with Node.js, Express, and SQLite.

## Features

- RESTful API design
- CRUD operations for tasks
- Input validation
- Error handling
- SQLite database
- Docker support
- Security best practices

## Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp .env.example .env
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Docker Deployment

```bash
docker-compose up -d
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## Example Requests

### Create a Task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete tutorial",
    "description": "Learn Cursor with Claude",
    "priority": "high",
    "status": "in-progress"
  }'
```

### Get All Tasks
```bash
curl http://localhost:3000/api/tasks
```

## Testing

```bash
npm test
```

## License

MIT


