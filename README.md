# Homestay Review Analyzer

## Project Description

Homestay Review Analyzer is a full-stack web application that allows users to submit, manage, and analyze homestay reviews. The application performs basic sentiment analysis and stores all reviews in a MongoDB database using Mongoose.

---

## Features

- Add new reviews
- View all reviews
- View a single review
- Update reviews
- Delete reviews
- Review statistics
- Sentiment analysis (Positive, Negative, Neutral)

---

## Tech Stack

Frontend
- React / Next.js
- Tailwind CSS

Backend
- Node.js
- Express.js

Database
- MongoDB
- Mongoose

---

## Database Choice

This project uses **MongoDB** with **Mongoose**.

### Why MongoDB?

- NoSQL document database
- Easy integration with Node.js
- Flexible schema
- Suitable for storing review data
- Fast CRUD operations

---

## Database Schema

(Insert your schema diagram image here)

![Schema Diagram](schema-diagram.png)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get review by ID |
| POST | /api/reviews | Create review |
| PUT | /api/reviews/:id | Update review |
| DELETE | /api/reviews/:id | Delete review |
| GET | /api/reviews/stats/summary | Review statistics |

---

## Set Up the Database

1. Clone the repository

git clone <your-github-link>

2. Install backend dependencies

npm install

3. Create a `.env` file

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/homestayDB

4. Start MongoDB

5. Start backend

npm run dev

6. Start frontend

npm run dev

---

## Author

Kashish shah
