import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {router} from './routes/Routes'
const routers = createBrowserRouter(createRoutesFromElements(router))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={routers}/>
  </StrictMode>,
)
