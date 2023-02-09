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
  // MDBDropdownItem,
  // MDBDropdownMenu,
  // MDBDropdownToggle,
  // MDBDropdown,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { className } = props;
  const [show, setShow] = useState(false);

  const { user } = useSelector((state) => state.auth);

  console.log(user);
  return (
    <div className={`${styles.Navbar} ${className}`}>
      <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
        <MDBContainer>
          <MDBNavbarBrand href="/" className="logo">
            World
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="toggle-navigation"
            onClick={() => setShow(!show)}
            style={{ color: "#606080" }}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="/">
                  <p className="nav-link">Home</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {!!user?.data?._id && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/add-tour">
                      <p className="nav-link">Add tour</p>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/dashboard">
                      <p className="nav-link">Dashboard</p>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}
              {user?.data?._id ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/">
                    <p className="nav-link">Logout</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p className="nav-link">Login</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
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
