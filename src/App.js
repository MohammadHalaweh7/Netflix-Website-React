import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Movies from './Components/Movies/Movies';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',element:<Layout />,children:[
        {index:true,element:<Home />},
        {path:'/movies',element:<Movies />},
        {path:'/login',element:<Login />},
        {path:'/register',element:<Register />},
        {path:'*',element:<Notfound />},
      ]
    }
  ])
  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>

  );
}

export default App;
