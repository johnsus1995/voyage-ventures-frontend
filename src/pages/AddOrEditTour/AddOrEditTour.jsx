import PropTypes from "prop-types";
import styles from "./AddOrEditTour.module.scss";
import {
  MDBCard,
  MDBCardBody,
  // MDBValidation,
  MDBBtn,
  MDBSpinner,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ChipInput from "components/utils/ChipInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const tourSchema = yup.object().shape({
  title: yup.string().required("Title is required!"),
  description: yup.string().required(),
  tags: yup.array(),
});

const AddOrEditTour = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tourSchema),
  });

  const handleClear = () => {
    //
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={`${styles.AddOrEditTour}`}>
      <MDBCard alignment="center">
        <h5>{id ? "Update Tour" : "Add Tour"}</h5>
        <MDBCardBody>
          {/* <MDBValidation  className="row g-3"> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12 input-element">
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MDBInput
                    {...field}
                    size="lg"
                    label="Title"
                    type="text"
                    className="form-control"
                  />
                )}
              />
              <p className="error-message">
                {errors.title ? <span>{errors.title.message}</span> : ""}
              </p>
            </div>

            <div className="col-md-12 input-element">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MDBTextArea
                    {...field}
                    size="lg"
                    label="Description"
                    className="form-control"
                    rows={4}
                  />
                )}
              />
            </div>

            {/* Chip input */}
            <div className="col-md-12 chip-input input-element">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => <ChipInput {...field} />}
              />
            </div>

            <div className="d-flex justify-content-start input-element">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FileBase
                    {...field}
                    type="file"
                    multiple={false}
                    // onDone={}
                  />
                )}
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
          </form>
          {/* </MDBValidation> */}
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
