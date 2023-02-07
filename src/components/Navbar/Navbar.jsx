import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useState } from "react";

const Navbar = (props) => {
  const { className } = props;
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.Navbar} ${className}`}>
      <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
        <MDBContainer>
          <MDBNavbarBrand
            href="/"
            style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
          >
            AppName
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

Navbar.defaultProps = {
  variant: "default",
  className: "",
};

Navbar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;

// time-stamp 1:58