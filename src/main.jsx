import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pepper from './components/Search/Pepper.jsx';
import Search from '/src/components/Search/Search.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Search",
    element: <Search />,
  },
  {
    path: "Pepper/:id",
    element: <Pepper />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
