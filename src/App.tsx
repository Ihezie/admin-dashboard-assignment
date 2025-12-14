import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  //Replace with actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
