import React from "react";
const Welcomemessage: React.FC = () => {
    return (
      <div className="welcome-message d-flex flex-column justify-content-center h-100 mb-4" style={{backgroundColor: 'red', backgroundImage: 'linear-gradient(red, yellow)'}}>
        <div className="px-3 py-4 p-md-5 mx-md-4">
          <div>
            <h4 className="mb-4">We are more than just a Business</h4>
            <p className="small mb-0">
              We are delighted to welcome you to our Organisation, a place where
              excellence in education is our top priority. At Learninghub, we
              believe that every student has the potential for success, and our
              mission is to unlock that potential through high-quality education
              and personalized guidance.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Welcomemessage;