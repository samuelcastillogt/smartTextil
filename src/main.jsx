import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './pages/Home.jsx'
import Inventary from './pages/Inventary.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inventary",
    element: <Inventary />,
  },
]);
createRoot(document.getElementById('root')).render(
<>
  <RouterProvider router={router} />
</>

)
