import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordComponent from './components/ResetComponent';
import HomePage from './pages/HomePage';
import MyComponent from './components/MyComponent';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/reset-password" element={<ResetPasswordComponent />} />
      </Routes>
    </Router>
  );
}

export default App;

