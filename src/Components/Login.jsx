// Login.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';

function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '400px' }}> {/* Set a max-width for better styling */}
        <div className="form-signin text-center p-4 rounded shadow-sm bg-white"> {/* Add padding, rounded corners, and shadow */}
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" placeholder="name@example.com" />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <label>Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
