# Tomato Frontend

The frontend of the Tomato project is built using React. This part of the project provides the user interface for interacting with the platform, including browsing items, managing the cart, and placing orders.

## Live Preview

[Click here for a live preview of the frontend page](https://food-delivery-frontend-kxrg.onrender.com).[Takes a minute to load, since deployed in a free server]

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Frontend](#running-the-frontend)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page:** Overview of the site with featured items.
- **Menu:** Displays the list of available items.
- **Contact Us:** Contact details and form.
- **Mobile App Details:** Information on the mobile app.
- **Authentication:** Secure login and registration using JWT.
- **Cart Page:** Manage items in the cart.
- **Order Status Page:** Track the status of orders.
- **My Orders Page:** View past orders.
- **Place Order Page:** Finalize and place an order.

## Project Structure

```bash
frontend/
│
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Pages for Home, Menu, Contact Us, etc.
│   ├── App.js        # Main application component
│   ├── index.js      # Entry point for the React app
│   └── ...           # Other React files and assets
│
├── public/          # Static files
│
└── README.md        # Documentation for the Frontend
```

## Installation

1. Navigate to frontend Folder
```bash 
cd admin
```
2. Install Dependencies:
```bash
npm install
```

## Running the Admin Panel
1. Start the development server:
```bash
npm start
```
The admin panel will run on http://localhost:5173.