import PropTypes from "prop-types";
import styles from "./AddOrEditTour.module.scss";
import {} from "mdb-react-ui-kit"

const AddOrEditTour = () => {
  return (
    <div className={`${styles.AddOrEditTour}`} style={{marginTop:"100px"}}>
      Add edit tour
    </div>
  );
};

AddOrEditTour.defaultProps = {
  className: "",
};

AddOrEditTour.propTypes = {
  className: PropTypes.string,
};

export default AddOrEditTour;
