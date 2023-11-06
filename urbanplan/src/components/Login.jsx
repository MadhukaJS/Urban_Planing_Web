import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    if (isLogin) {
      // Handle login logic with email and password
    } else {
      // Handle registration logic with email and password
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{isLogin ? 'Login' : 'Register'}</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAuth}
                >
                  {isLogin ? 'Login' : 'Register'}
                </button>
              </form>
              <p
                onClick={() => setIsLogin(!isLogin)}
                className="mt-3 text-primary"
                style={{ cursor: 'pointer' }}
              >
                {isLogin ? 'Create an account' : 'Already have an account?'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
