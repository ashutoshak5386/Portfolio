import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Certifications from "./Pages/Certifications";
import Connection from "./Pages/Connection";
import Github from "./Pages/Github";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/certifications",
          element: <Certifications />
        },
        {
          path: "/Connect",
          element: <Connection />
        },
        {
          path: "/github",
          element: <Github/>
        },
      ]
    }
  ]
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
