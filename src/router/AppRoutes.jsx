import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home";
import ProjectsDetail from "../pages/ProjectsDetail";

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsDetail />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default AppWrapper;
