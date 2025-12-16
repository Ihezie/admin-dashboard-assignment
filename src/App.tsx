import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import AppProvider from "./components/AppProvider";
import Success from "./pages/Success";

function App() {
  //Replace with actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/success" element={<Success />} />
          </Route>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
