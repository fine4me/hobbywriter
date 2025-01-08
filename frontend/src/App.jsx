import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignupForm from "./component/Signup";
import SignInForm from "./component/Signin"

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />
        
        {/* Signup route */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
