// import logo from './logo.svg';
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
    <AppRoutes />
  </AuthProvider>
  );
}
export default App;
