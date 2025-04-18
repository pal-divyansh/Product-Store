# Product Store - MERN Stack Application

A full-stack e-commerce application built with MongoDB, Express.js, React.js, and Node.js.

## Features

- Product Management (Create, Read, Update, Delete)
- Modern UI with Chakra UI
- Responsive Design
- State Management with Zustand
- RESTful API
- MongoDB Database Integration

## Tech Stack

### Frontend
- React.js
- Vite
- Chakra UI
- React Router DOM
- Zustand (State Management)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Project Structure

```
ProductStore/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controller/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js
├── frontend/
│   └── productStore/
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   ├── ProductCard.jsx
│       │   │   └── Navbar.jsx
│       │   ├── pages/
│       │   │   ├── HomePage.jsx
│       │   │   └── CreatePage.jsx
│       │   ├── store/
│       │   │   └── product.js
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── public/
│       └── package.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ProductStore.git
cd ProductStore
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend/productStore
npm install
```

4. Create a .env file in the root directory:
```
MONGO_URI=your_mongodb_connection_string
```

5. Create a .env file in the frontend/productStore directory:
```
VITE_API_URL=http://localhost:5000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend/productStore
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

- GET /api/products - Get all products
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product

## Deployment

The application can be deployed on:
- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/your-username/ProductStore](https://github.com/your-username/ProductStore) #   P r o d u c t - S t o r e  
 