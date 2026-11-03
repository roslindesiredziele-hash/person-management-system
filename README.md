## Person Management System

Person Management System is a full-stack web application for storing and managing person records. It demonstrates client-server communication, REST API design, database persistence, reactive forms, automated testing, and sample data generation using Faker.

This is a learning project built to practise full-stack development with Angular, Express.js, SQLite, and TypeScript.

### Features

- Full CRUD operations through a REST API
- Angular frontend built with standalone components
- Reactive Forms for creating records
- Angular Signals for state management
- SQLite database persistence
- Express.js backend with route-based architecture
- Validation of incoming requests
- Faker-powered sample data generation
- Delete single records or clear the entire database
- Automated CRUD integration tests using Vitest and Supertest

### Files

- `src/server.ts` — Express application bootstrap and middleware configuration
- `src/routes/person-routes.ts` — API endpoints and request validation
- `src/models/person_model.ts` — Person and PersonDb interfaces
- `src/db.ts` — SQLite connection and table initialization
- `src/tests/person-routes.test.ts` — automated CRUD integration tests
- `ads/gendata.ts` — original data generation laboratory exercise
- `ads/genfake-data.ts` — SQLite database seeding utility using Faker
- `frontend/` — Angular application
- `data/app.sqlite3` — SQLite database file

### Requirements

- Node.js 20+ (tested on Node.js 26)
- npm
- SQLite
- Angular CLI (optional for development)

### Installation

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

### Run the backend

```bash
npm run dev
```

Server:

```text
http://localhost:2000
```

### Run the frontend

```bash
cd frontend
npm run dev
```

Application:

```text
http://localhost:4200
```

### Generate sample data

Generate 25 fake people:

```bash
npm run gfd
```

Generate a custom number of records:

```bash
npm run gfd -- 100
```

Example:

```bash
npm run gfd -- 500
```

Each generated person is inserted directly into the SQLite database.

### Run automated tests

```bash
npm test
```

The test suite verifies:

- GET `/api/persons`
- GET `/api/persons/:id`
- POST `/api/persons`
- PUT `/api/persons/:id`
- DELETE `/api/persons/:id`
- DELETE `/api/persons`

### Example

Request:

```http
POST /api/persons
```

Body:

```json
{
  "name": "John",
  "surname": "Doe",
  "age": 25,
  "pet": "Dog"
}
```

Response:

```json
{
  "id": 1,
  "name": "John",
  "surname": "Doe",
  "age": 25,
  "pet": "Dog"
}
```

### API notes

- IDs are generated automatically using SQLite AUTOINCREMENT.
- Names and surnames cannot be empty.
- Age must be a non-negative number.
- Pet names are optional.
- Invalid requests return appropriate HTTP status codes.
- DELETE `/api/persons` removes all records and resets the ID sequence.
- PUT `/api/persons/:id` returns the updated person using SQLite's `RETURNING` clause.

### Current limitations

- No authentication or authorization.
- No search or filtering functionality.
- No frontend editing interface.
- No pagination for large datasets.
- Database schema contains only a single entity (`Person`).

### Why implement this?

The purpose of this project is to practise full-stack web application development. The project covers REST API design, Angular component architecture, SQLite persistence, request validation, CRUD operations, integration testing, and sample data generation while maintaining a clean separation between frontend, backend, and database layers.