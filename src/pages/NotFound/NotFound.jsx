import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={`${styles.NotFound}`}>
      <h1>404</h1>
      <p>
        Page not found! <Link to="/">Go to home page?</Link>
      </p>
    </div>
  );
};

NotFound.defaultProps = {
  className: "",
};

NotFound.propTypes = {
  className: PropTypes.string,
};

export default NotFound;
