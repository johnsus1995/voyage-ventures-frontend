import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Tour.module.scss";
import * as tourActions from "store/tour/actions";
import { selectedTour } from "store/tour/selectors";
import { isLoading } from "store/tour/selectors";
import moment from "moment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

const Tour = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => selectedTour(state));
  const isTourLoading = useSelector((state) => isLoading(state));

  useEffect(() => {
    dispatch(tourActions.fetchTourById(id));
  }, []);
  return (
    <div className={`${styles.Tour}`}>
      <MDBContainer>
        <MDBCard className="mb-3 mt2">
          <MDBCardImage
            position="top"
            src={tour?.image}
            alt={tour?.title}
            style={{ width: "100%", maxHeight: "600px" }}
          />

          <MDBCardBody>
            <h3>{tour?.title}</h3>
            <span>
              <p className="text-start">Created by: {"name"}</p>
            </span>
            <div style={{ float: "left" }}>
              <span className="text-start">
                {tour?.tags?.map((item) => `#${item}`)}
              </span>
            </div>
            <br/>
            <MDBCardText className="text-start mt-2">
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calendar-alt"
                size="lg"
              />
              <small className="text-muted">
                {moment(tour?.created_at).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
              {tour?.desc}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

Tour.defaultProps = {
  className: "",
};

Tour.propTypes = {
  className: PropTypes.string,
};

export default Tour;
