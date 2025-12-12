# ConnectCare – Doctor Appointment Booking Platform

Live Website: https://connect-care-web.netlify.app/

ConnectCare is a full-stack web application that allows users to browse doctors, view doctor details, and book appointments online. The project follows a clear client–server architecture using modern web technologies.

---

## Tech Stack

### Frontend (Client)

- React (Vite)
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication

### Backend (Server)

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- REST API

---

## Project Structure

## Project Structure

connectcare/
|-- client/
| |-- src/
| | |-- components/
| | |-- pages/
| | |-- routes/
| | |-- assets/
| | `-- App.jsx
|   `-- package.json
|
|-- server/
| |-- index.js
| |-- package.json
| `-- vercel.json
|
`-- README.md

---

## Features

- View all doctors from database
- View single doctor details
- Appointment booking logic
- Firebase-based authentication
- RESTful backend API
- Responsive UI
- Secure client–server communication

---

## API Endpoints

GET /doctors  
Returns all doctors

GET /doctors/:id  
Returns a single doctor by ID

---

## Environment Variables

### Server (.env)

PORT=3000  
MONGODB_URI=your_mongodb_connection_string

### Client (.env)

VITE_FIREBASE_API_KEY=your_firebase_key  
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain

---

## Installation and Setup

### Clone the Repository

git clone https://github.com/Tanjimabinta/connectcare.git  
cd connectcare

---

### Run the Server

cd server  
npm install  
npm start

Server runs on http://localhost:3000

---

### Run the Client

cd client  
npm install  
npm run dev

Client runs on http://localhost:5173

---

## Deployment

- Frontend can be deployed on Vercel or Netlify
- Backend can be deployed on Vercel or any Node.js hosting
- Database hosted on MongoDB Atlas

---

## Security Notes

- Authentication handled by Firebase
- Sensitive credentials stored in environment variables
- Do not commit .env files

---

## Future Improvements

- Doctor availability scheduling
- Appointment confirmation system
- Admin dashboard
- Payment integration
- Role-based access control

---

## License

This project is created for educational and portfolio purposes.
