import React from 'react';
import { Link } from 'react-router-dom';

const SuccessfulRegistrationComponent = () => (
  <div className="secondarybackground">
    <div className="container">
      <div className="card increasedcard">
        <div className="centerdiv">
          <p>
            <strong>
Registration was successful click
              <span>
                <Link className="significantlink" to="/"> here </Link>
              </span>
              to login
            </strong>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SuccessfulRegistrationComponent;
