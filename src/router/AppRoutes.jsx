import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home";
import ProjectDetail from "../pages/ProjectDetail";

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectDetail />} />
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
