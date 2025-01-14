import { createBrowserRouter } from "react-router"
import LayOut from "./components/LayOut"
import About from "./components/About"
import HomeEmpty from "./components/HomeEmpty"


export const Router = createBrowserRouter([
    {
        path: '/', element: <LayOut /> ,
        errorElement: <div>error</div> ,
        children: [
            {path: 'HomeEmpty', element: <HomeEmpty/>},
            {path: 'About', element: <About/>},
        ]
    }
])
