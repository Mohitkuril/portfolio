import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

import "./index.css"; // Make sure this import exists
import ProjectDetails from "./Pages/Projects/ProjectDetails";



const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> },
    {path:"/project/:id", element:<ProjectDetails/>}
  ]);
};

const App = () => {
  return <AppRoutes />;
};

export default App;
 