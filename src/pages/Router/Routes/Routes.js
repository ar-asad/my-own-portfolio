
import Home from "../../Home/Home/Home";
import HomeProjectDetails from "../../Home/Home/HomeProjectDetails/HomeProjectDetails";
import Main from "../../Layout/Main";
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
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/project/:id',
                element: <HomeProjectDetails></HomeProjectDetails>,
                // loader: ({ params }) => fetch(`/projectdata.json/${params.id}`)

            }
        ]
    }

]);
export default router;