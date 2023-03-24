import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./Home.module.scss";
import * as tourActions from "redux/tour/actions";
import { useDispatch, useSelector } from "react-redux";
import { allTours } from "redux/tour/selectors";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import TourCard from "components/utils/TourCard";

const Home = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => allTours(state));

  useEffect(() => {
    dispatch(tourActions.fetchAllTours());
  }, []);

  return (
    <div className={`${styles.Home}`}>
      <MDBRow className="mt-5">
        {/* <MDBTypography className="text-center mb-0" tag="h2">
          No tours found
        </MDBTypography> */}
        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours.length && tours?.map((tour, index) => (
                <TourCard
                  key={index}
                  image={tour?.image || ""}
                  desc={tour?.desc}
                  title={tour?.title}
                  tags={tour?.tags}
                  id={tour?._id}
                  name={tour?.user?.name}
                />
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

Home.defaultProps = {
  className: "",
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
