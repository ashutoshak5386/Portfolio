import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Github from "./Pages/Github"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Connection from "./Pages/Connection"
import Experience from "./Pages/Experience"
import Certifications from "./Pages/Certifications"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";







const Layout = () => {
  return(
    <div>
      <Header />
      <About/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Connection/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children: [
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
