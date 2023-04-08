import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import { useEffect } from "react";

const Pagination = (props) => {
  debugger
  const { className, pageCount } = props;
  // const pages = Array.from({ length: 5 }, (_, i) => i + 1);
  useEffect(() => {
    console.log(100)
  },[])
  return (
    <div className={`${styles.Pagination} ${className}`}>
      <nav aria-label="...">
        <MDBPagination circle className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
              {"<"}
            </MDBPaginationLink>
          </MDBPaginationItem>

          {/* {pages.map((item, index) => (
            <MDBPaginationItem key={index}>
              <MDBPaginationLink href="#">{item}</MDBPaginationLink>
            </MDBPaginationItem>
          ))} */}

          <MDBPaginationItem>
            <MDBPaginationLink href="#">{">"}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>
    </div>
  );
};

Pagination.defaultProps = {
  variant: "default",
  className: "",
};

Pagination.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Pagination;

/**
       <MDBPaginationItem active>
            <MDBPaginationLink href="#">
              2 <span className="visually-hidden">(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
 */
