# Tomato 🍅

Tomato is a full-stack website built using the MERN stack (MongoDB, Express, React, Node.js) with integrated Stripe payment processing. The project consists of a frontend for user interaction, a backend for server-side operations, and a separate admin panel for managing the application.

## Live Preview

[Click here for a live preview of the project](https://food-delivery-frontend-kxrg.onrender.com).[Takes a minute to load, since deployed in a free server]

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### Frontend
- **Home Page:** Overview of the site with featured items.
- **Menu:** Displays the list of available items.
- **Contact Us:** Contact details and form.
- **Mobile App Details:** Information on the mobile app.
- **Authentication:** Secure login and registration using JWT.
- **Cart Page:** Manage items in the cart.
- **Order Status Page:** Track the status of orders.
- **My Orders Page:** View past orders.
- **Place Order Page:** Finalize and place an order.

### Backend
- **Node.js with Express:** Handles API requests and responses.
- **MongoDB:** Database for storing user data, orders, and items.

### Admin Panel
- **Add Items Page:** Admins can add new items to the menu.
- **List Items Page:** View and manage existing items.
- **Orders Page:** View and update the status of customer orders.

## Project Structure

```bash
tomato/
│
├── frontend/       # React app for the user interface
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
│
├── backend/        # Node.js and Express server
│   └── src/
│       ├── models/
│       ├── routes/
│       └── ...
│
├── admin/          # React app for the admin panel
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
│
└── README.md       # Project documentation
```


### Installation

1. Clone the repository

```bash 
git clone https://github.com/ganeshpendela/tomato.git
cd tomato 
```
2. Install dependencies for each part of the project:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# Admin panel
cd ../admin
npm install
```
3. Set up environment variables:
    - Create a .env file in the backend folder and add your MongoDB URI, Stripe keys, and any other necessary environment variables.

### Project Execution

1. Start the Backend Server
```bash
cd backend
npm start
```
The backend will run on http://localhost:4000

2. Start the frontend development server:
```bash 
cd frontend
npm start
```
The frontend will run on http://localhost:5174
3. Start the admin panel development server:
```bash
cd admin
npm start
```
The admin panel will run on http://localhost:5173

## Technologies Used

- **Frontend:** React, JWT for authentication
- **Backend:** Node.js, Express.js, MongoDB
- **Payment Integration:** Stripe
- **Version Control:** Git


