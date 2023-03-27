import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import * as tourActions from "store/tour/actions";
import { useDispatch, useSelector } from "react-redux";
import { allTours, isLoading } from "store/tour/selectors";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBSpinner,
  MDBTypography,
} from "mdb-react-ui-kit";
import TourCard from "components/utils/TourCard";

const Home = () => {
  const dispatch = useDispatch();
  const isAllToursLoading = useSelector((state) => isLoading(state));
  const tours = useSelector((state) => allTours(state));
  const [page, setPage] = useState(2);

  useEffect(() => {
    const options = {
      query:page
    }
    dispatch(tourActions.fetchAllTours({data:{},options}));
  }, []);

  return (
    <div className={`${styles.Home}`}>
      <MDBRow className="mt-5">
        {!tours?.length && !isAllToursLoading && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No tours found!
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            {!isAllToursLoading ? (
              <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                {!!tours?.length &&
                  tours?.map((tour, index) => (
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
            ) : (
              <MDBSpinner
                className="me-2"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
            )}
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
