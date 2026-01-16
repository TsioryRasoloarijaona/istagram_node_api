# Express API Project

A RESTful API built with Express.js and Node.js.

## Features

- Express.js web framework
- RESTful API architecture
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- Environment variables with dotenv
- Error handling middleware

## Project Structure

```
insta_node_api/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── routes/          # Route definitions
│   └── server.js        # Application entry point
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore file
└── package.json        # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

Or for production:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Check server status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

See `.env.example` for all available environment variables.

## License

ISC
