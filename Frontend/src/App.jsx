import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'
import MainLayout from './components/MainLayout'
import Home from './components/Home'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
      path: '/',
      element: <Home />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])


function App() {
  

  return (
    <>
     <RouterProvider router={browserRouter} />
     
    </>
  )
}

export default App