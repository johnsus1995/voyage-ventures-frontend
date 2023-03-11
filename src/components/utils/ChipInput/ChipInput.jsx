import PropTypes from "prop-types";
import styles from "./ChipInput.module.scss";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const ChipInput = (props) => {
  const { className,setChips } = props;

  const top100Films = [
    { title: "one" },
    { title: "two" },
    { title: "three" },
    { title: "four" },
    { title: "five" },
  ];

  const onChangeChipInput = (value, getTagProps) => {
    setChips(value)
    return value.map((option, index) => (
      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
    ));
  };

  return (
    <div className={`${styles.ChipInput} ${className}`}>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tags-filled"
          options={top100Films.map((option) => option.title)}
          // defaultValue={[top100Films[1].title]}
          freeSolo
          renderTags={onChangeChipInput}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Tags"
              placeholder="Add tags..."
            />
          )}
        />
      </Stack>
    </div>
  );
};

ChipInput.defaultProps = {
  variant: "default",
  className: "",
};

ChipInput.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default ChipInput;
