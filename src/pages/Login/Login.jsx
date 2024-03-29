import PropTypes from "prop-types";
import styles from "./Login.module.scss";
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
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as authActions from "store/auth/actions";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => ({ ...state.auth }));

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(authActions.login({ data: formValues }));
    // console.log(res);
    if (res.payload.success) {
      navigate("/");
    }else{
      toast.error(res.payload.message)
    }
  };

  return (
    <div className={`${styles.Login}`}>
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <MDBValidationItem feedback="Email is required." invalid>
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={formValues.email}
                  name="email"
                  onChange={onInputChange}
                  required
                />
              </div>
            </MDBValidationItem>
            <MDBValidationItem feedback="Password is required." invalid>
              <div className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={formValues.password}
                  name="password"
                  onChange={onInputChange}
                  required
                  validation="Password is required"
                />
              </div>
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
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account? Sign-up here.</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

Login.defaultProps = {
  className: "",
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
