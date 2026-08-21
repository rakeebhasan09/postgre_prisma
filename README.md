# Postgre Prisma API

## Start the API

1. Create a `.env` file in the project root and set the PostgreSQL connection string:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
PORT=5000
```

2. Apply the Prisma migrations:

```bash
npx prisma migrate dev
```

3. Start the development server:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

## Create a product

Send this request from Postman:

```http
POST http://localhost:5000/products
Content-Type: application/json
```

```json
{
    "title": "Keyboard",
    "description": "Mechanical keyboard",
    "price": 100,
    "stock": 10
}
```

`title`, `price`, and `stock` are required. `price` and `stock` must be integers.

## Troubleshooting Prisma errors

`clientVersion: "7.9.1"` is metadata from a Prisma error; it is not the error itself. Read the `message` field in the API response or the server terminal output.

- If `DATABASE_URL` is missing or invalid, correct `.env` and restart the server.
- If the database tables do not exist, run `npx prisma migrate dev`.
- If Postman reports `Cannot POST /products`, verify the URL and method exactly: `POST http://localhost:5000/products`.

Complete the workshop. data is 21-Aug-2026
