import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Root, Projects, About, Skills, Contact } from './routes';
import './scss/index.scss';
import './assets/fonts/DTM-Sans.otf';
import './assets/fonts/MERCY.otf';
import './assets/fonts/monsterfriendbackpro.otf';
import './assets/fonts/monsterfriendforepro.otf';

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/skills",
        element: <Skills />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
