import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import N404 from './pages/N404';
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import Home from './pages/Home';





const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },

  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "*",
    element: <N404 />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "signin",
    element: <Signin />
  }
]);












const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App