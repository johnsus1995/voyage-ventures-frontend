import PropTypes from "prop-types";
import styles from "./Register.module.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as authActions from "store/auth/actions";

const Register = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.password === formValues.confirm_password){
      dispatch(authActions.register({ formValues, navigate, toast })).unwrap();
    }else{
      toast.error("Passwords do not match!")
    }
  };

  return (
    <div className={`${styles.Register}`}>
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Register</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <MDBValidationItem feedback="*First name is required." invalid className="col-md-6">
                <MDBInput
                  label="First name"
                  type="text"
                  value={formValues.first_name}
                  name="first_name"
                  onChange={onInputChange}
                  required
                />
            </MDBValidationItem>

            <MDBValidationItem feedback="*Last name is required." invalid className="col-md-6">
                <MDBInput
                  label="Last name"
                  type="text"
                  value={formValues.last_name}
                  name="last_name"
                  onChange={onInputChange}
                  required
                />
            </MDBValidationItem>

            <MDBValidationItem feedback="*Email is required." invalid className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={formValues.email}
                  name="email"
                  onChange={onInputChange}
                  required
                />
            </MDBValidationItem>
            <MDBValidationItem feedback="*Password is required." invalid className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={formValues.password}
                  name="password"
                  onChange={onInputChange}
                  required
                />
            </MDBValidationItem>
            <MDBValidationItem feedback="*Confirm password is required." invalid className="col-md-12">
                <MDBInput
                  label="Confirm password"
                  type="password"
                  value={formValues.confirm_password}
                  name="confirm_password"
                  onChange={onInputChange}
                  required
                />
            </MDBValidationItem>
            <div className="col-12">
              {/* <MDBBtn style={{width:"100%"}} className="mt-2"> */}
              <MDBBtn className="login-btn mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Don't have an account? Register here.</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

Register.defaultProps = {
  className: "",
};

Register.propTypes = {
  className: PropTypes.string,
};

export default Register;
