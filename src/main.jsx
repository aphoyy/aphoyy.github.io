import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, Projects, About, Skills, Contact } from './routes'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/*",
        element: <Root />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/skills",
        element: <Skills />
    },
    {
        path: "/contact",
        element: <Contact />
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)