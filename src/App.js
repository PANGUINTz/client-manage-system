import { Route, Routes } from "react-router-dom";
import RequireAuth from "./features/auth/RequireAuth";
import Login from "./features/auth/Login";
import MainLayout from "./layouts/MainLayout";
import Layout from "./components/Layouts";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="*" element={<MainLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
