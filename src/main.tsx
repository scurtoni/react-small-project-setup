import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import Page1 from './pages/Page1.tsx';
import Page2 from './pages/Page2.tsx';
import Page3 from './pages/Page3.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
  },
  {
    path: "/page2",
    element: <Page2/>,
  },
  {
    path: "/page3",
    element: <Page3/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
