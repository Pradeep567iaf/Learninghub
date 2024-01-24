import React from 'react';
import { Link } from 'react-router-dom';

const Forgetpassword: React.FC = () => {
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
                Forgot Password
              </h5>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Enter your email
                </label>
                <input type="email" className="form-control form-control-lg" id="email" />
              </div>

              <button type="button" className="btn btn-dark mb-4 px-5">
                Reset Password
              </button>

              <Link to="/login" className="small text-muted">
                Back to Login
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

export default Forgetpassword;
