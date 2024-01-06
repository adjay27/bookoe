import { createBrowserRouter } from "react-router-dom";
import App from './App'
import AboutPage from "./pages/LatestPage";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: App,

        children : [
            {
                path: "latest",
                Component: AboutPage
            }
        ]
    }
])

export default router;