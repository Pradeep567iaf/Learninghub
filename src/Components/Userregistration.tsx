import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Userregistration:React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <i className="fas fa-cubes fa-3x me-3" style={{ color: '#ff6219' }}></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Register an Account
              </h5>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control form-control-lg" id="email" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control form-control-lg" id="name" />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input type="tel" className="form-control form-control-lg" id="phone" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control form-control-lg"
                    id="password"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                     <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>

              <button type="button" className="btn btn-dark mb-4 px-5">
                Register
              </button>

              <Link to="/login" className="small text-muted">
                Already have an account? Login here
              </Link>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userregistration;
