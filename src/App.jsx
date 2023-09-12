import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './componet/Home/Home'
import About from './componet/About/About'
import Portfolio from './componet/Portfolio/Portfolio'
import Conatct from './componet/Conatct/Conatct';
function App() {
    const routers = createHashRouter([
        {
            path: '', element: <Layout />, children: [
                { index: true, element: <Home /> },
                { path: 'about', element: <About /> },
                { path: 'por', element: <Portfolio /> },
                { path: 'contact', element: <Conatct /> },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={routers} />
        </>
    );
}

export default App;
