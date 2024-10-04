import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/shared/MainLayout.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      path: "/student-dashboard",
      element: <h1>Student Dashboard</h1>
    },
    {
      path: "/faculty-management",
      element: <h1>Faculty</h1>
    },
    {
      path: "/course-registration",
      element: <h1>course</h1>
    }
  ]
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
