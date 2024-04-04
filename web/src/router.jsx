import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home/Home';
import Stats from "./pages/Scala/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/stats",
        element: <Stats />
    }
])