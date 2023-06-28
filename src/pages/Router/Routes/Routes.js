import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Services from "../../Services/Services";
import Skills from "../../Skills/Skills";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }

]);
export default router;