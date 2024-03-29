import PropTypes from "prop-types";
import styles from "./AddOrEditTour.module.scss";
import {
  MDBCard,
  MDBCardBody,
  // MDBValidation,
  // MDBSpinner,
  MDBBtn,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChipInput from "components/utils/ChipInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as tourActions from "store/tour/actions";
import { selectedTour } from "store/tour/selectors";

const tourSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  desc: yup.string().required("Description is required."),
});

const AddOrEditTour = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.authSlice.user.data);
  const tour = useSelector((state) => selectedTour(state));

  const [chips, setChips] = useState([]);
  const [base64Image, setBase64Image] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tourSchema),
  });

  const handleClear = () => {
    // reset({});
    // setChips([]);
  };

  const onSubmit = async (data) => {
    const reqData = {
      title: data.title,
      desc: data.desc,
      tags: chips || tour.tags,
      image: base64Image.base64 || tour?.image,
      user: user,
      created_by: user._id,
    };

    const options = {
      query:{
        id:id
      }
    }

    let res;

    if (id) {
      res = await dispatch(tourActions.updateTour({data:reqData,options}));
    } else {
      res = await dispatch(tourActions.create(reqData));
    }

    if (res.payload.success) {
      toast.success(res.payload.message);
      handleClear();
      // navigate("/")
    }
  };

  const onFileUpload = (string) => {
    setBase64Image(string);
  };

  useEffect(() => {
    const fetchTour = async () => {
      if (id) {
        const res = await dispatch(tourActions.fetchTourById(id));
        if (res.payload.success) {
          reset({
            title: res.payload.data.title,
            desc: res.payload.data.desc,
          });
        }
      }
    };
    fetchTour();
  }, [id, dispatch]);

  return (
    <div className={`${styles.AddOrEditTour}`}>
      <MDBCard alignment="center">
        <h5>{id ? "Update Tour" : "Add Tour"}</h5>
        <MDBCardBody>
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
                name="desc"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MDBTextArea
                    {...field}
                    label="Description"
                    className="form-control"
                    rows={4}
                  />
                )}
              />
              <p className="error-message">
                {errors.desc ? <span>{errors?.desc?.message}</span> : ""}
              </p>
            </div>

            {/* Chip input */}
            <div className="col-md-12 chip-input">
              <Controller
                name="tags"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ChipInput {...field} setChips={setChips} />
                )}
              />
            </div>

            <div className="d-flex justify-content-start file-upload">
              <Controller
                name="file"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FileBase64
                    {...field}
                    type="file"
                    multiple={false}
                    onDone={onFileUpload}
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
