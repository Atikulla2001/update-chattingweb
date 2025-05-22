import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import N404 from './pages/N404';
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import Home from './pages/Home';
import Message from './pages/Message';
import Rootlayout from './components/Rootlayout';





const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "message", Component: Message },


    ],
  },
  {
    path: "*",
    Component: N404
  },
  {
    path: "/signup",
    Component: Signup
  },
  {
    path: "/signin",
    Component: Signin
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/message",
    Component: Message
  },
]);












const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App