import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Register from "./components/Register";
import Login from "./components/Login";
import Questionnaire from "./components/Questionnaire"; // Import the Questionnaire component

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/questionnaire', // Add this route
    element: <Questionnaire />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
