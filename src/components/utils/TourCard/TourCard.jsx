import PropTypes from "prop-types";
import styles from "./TourCard.module.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TourCard = (props) => {
  const {
    className = "empty-class",
    image,
    desc,
    title,
    tags,
    id,
    name,
  } = props;
  return (
    <div className={`${styles.TourCard} ${className}`}>
      <MDBCard>
        <MDBCardImage
          src={image}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div className="top-lef">{name}</div>
        <span className="text-start tag-card">
          {tags?.map((tag, index) => (
            <p key={index}>{`#${tag}`}</p>
          ))}
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">Description...</MDBCardText>
          <Link to={`tour/${id}`}>Read more</Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

TourCard.defaultProps = {
  variant: "default",
  className: "",
};

TourCard.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default TourCard;
