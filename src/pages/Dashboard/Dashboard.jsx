import PropTypes from "prop-types";
import styles from "./Dashboard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as tourActions from "store/tour/actions";
import { useEffect } from "react";
import { isLoading, usersTours } from "store/tour/selectors";
import { user } from "store/auth/selectors";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const _usersTours = useSelector((state) => usersTours(state));
  const _user = useSelector((state) => user(state));
  const isUsersToursLoading = useSelector((state) => isLoading(state));

  const excerpt = (str) => {
    if (str?.length > 40) {
      str = str.substring(0, 40) + "...";
    }
    return str;
  };

  const handleDelete = async (id) => {
    const res = await dispatch(tourActions.deleteTour(id));
    if (res.payload.success) {
      toast.success(res.payload.message);
      await dispatch(tourActions.fetchTourByUserId(_user.data._id));
    }
  };

  useEffect(() => {
    dispatch(tourActions.fetchTourByUserId(_user.data._id));
  }, []);

  return (
    <div className={`${styles.Dashboard}`}>
      {isUsersToursLoading && (
        <MDBSpinner className="me-2" style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      )}
      {_usersTours.length > 0 && (
        <>
          <h5 className="text-center">Dashboard: {_user?.data?.name}</h5>
          <hr style={{ maxWidth: "570px" }} />
        </>
      )}
      {_usersTours?.map((item, index) => (
        <MDBCard key={index} style={{ maxWidth: "600px" }} className="mt-2">
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                className="rounded"
                src={item.image}
                alt={item.title}
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="text-start">{item.title}</MDBCardTitle>
                <MDBCardText className="text-start">
                  <small className="text-muted">{excerpt(item.desc)}</small>
                </MDBCardText>
                <div
                  style={{
                    marginLeft: "5px",
                    float: "right",
                    marginTop: "-60px",
                  }}
                >
                  <MDBBtn className="mt-1" tag="a" color="none">
                    <MDBIcon
                      fas
                      icon="trash"
                      style={{ color: "#dd4b39" }}
                      size="lg"
                      onClick={() => handleDelete(item._id)}
                    />
                  </MDBBtn>
                  <Link to={`/update/${item._id}`}>
                    <MDBIcon
                      fas
                      icon="edit"
                      style={{ color: "#55acee", marginLeft: "10px" }}
                      size="lg"
                    />
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ))}
    </div>
  );
};

Dashboard.defaultProps = {
  className: "",
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
