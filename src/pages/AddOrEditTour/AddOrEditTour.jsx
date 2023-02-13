import PropTypes from "prop-types";
import styles from "./AddOrEditTour.module.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
  MDBInput,
} from "mdb-react-ui-kit";
import { Chip } from "@mui/material";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ChipInput from "components/utils/ChipInput";

const AddOrEditTour = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
    tags: "",
  });

  const onInputChange = () => {
    //
  };

  const onChipDelete = () => {
    //
  };

  const handleSubmit = () => {
    //
  }

  const handleClear = () => {
    //
  }

  return (
    <div
      className={`${styles.AddOrEditTour}`}
    >
       <MDBCard alignment="center">
        <h5>{id ? "Update Tour" : "Add Tour"}</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Title"
                type="text"
                value={formValues.title || ""}
                name="title"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide title"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Description"
                type="text"
                value={formValues.desc}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                textarea
                rows={4}
                validation="Please provide description"
              />
            </div>
            {/* Chip input */}
            <div className="col-md-12">
              <ChipInput/>
            </div>

            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormValues({ ...formValues, imageFile: base64 })
                }
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>
                {id ? "Update" : "Submit"}
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
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

//2:28
