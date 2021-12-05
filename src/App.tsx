import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import {
  AuthenticationLayout,
  LoginPage,
  RegisterPage,
  SearchPage,
} from './components';
import GlobalStyle from './globalStyles';

const App = () => {
  const isAuth = false;

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <SearchPage /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/auth" element={<Navigate to="register" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
