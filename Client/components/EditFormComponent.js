import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SelectListControl from './common/SelectListControl';
import { selectOptionsFault, selectOptionRepair } from '../helpers/selectOptions';


const EditFormComponent = ({
  submitRequest, updateControl, fault, repairOrMaintenance, errors,
  buttonValue, brand, modelnumber, description,
}) => (
  <div>
    <div className="card-fluid marg-top30y userdashbord-card-dimension-react">
      <Link to="/requests" className="anchorbtn">
          Click here to view all your requests
        <i className="fa fa-arrow-circle-right" />
      </Link>
      <form onSubmit={submitRequest} id="requestform">
        <div className="form-header">
          <div>
            <span id="logo1">Make a reques</span>
            <span id="logo2">t</span>
          </div>
          <div className="cardlogo-icon">
            <span>
              <a href="#">
                <i className="fa fa-calendar" />
              </a>
            </span>
          </div>
        </div>
        <span>
          <hr />
        </span>
        <div className="form-group marg10">
          <label htmlFor="name">Brand</label>
          <input type="text" name="brand" id="brand" value={brand} onChange={updateControl} className={classnames('', { controlerror: errors.brand })} />
          {errors.brand && (<div className="invalidfeedback">{errors.brand}</div>)}
        </div>
        <div className="form-group marg10">
          <label htmlFor="modelnumber">Model Number</label>
          <input type="text" name="modelnumber" id="modelnumber" value={modelnumber} onChange={updateControl} className={classnames('', { controlerror: errors.brand })} />
          {errors.modelnumber && (<div className="invalidfeedback">{errors.modelnumber}</div>)}
        </div>
        <div className="form-group marg10">
          <label htmlFor="fault">Fault</label>
          <SelectListControl
            name="fault"
            value={fault}
            onChange={updateControl}
            placeholder="Selecthere"
            options={selectOptionsFault}
          />
          {errors.fault && (<div className="invalidfeedback">{errors.fault}</div>)}
        </div>
        <div className="form-group marg10">
          <label htmlFor="type">Type</label>

          <SelectListControl
            name="other"
            value={repairOrMaintenance}
            onChange={updateControl}
            options={selectOptionRepair}
          />
          {errors.other && (<div className="invalidfeedback">{errors.other}</div>)}
        </div>
        <div className="form-group marg10">
          <label htmlFor="password">Describe the issue</label>
          <textarea name="description" id="description" value={description} cols="30" onChange={updateControl} rows="10" placeholder="Enter a maximum of 250 characters" className={classnames('', { controlerror: errors.brand })} />
          {errors.description && (<div className="invalidfeedback">{errors.description}</div>)}
        </div>
        <p className="marg10">
          <button type="submit" id="usersubmit">{buttonValue}</button>
        </p>
      </form>
    </div>
  </div>
);

EditFormComponent.propTypes = {
  submitRequest: PropTypes.func.isRequired,
  updateControl: PropTypes.func.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modelnumber: PropTypes.string.isRequired,
  buttonValue: PropTypes.string.isRequired,
  fault: PropTypes.string.isRequired,
  repairOrMaintenance: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default EditFormComponent;
