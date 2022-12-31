import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const useStyles = makeStyles({
  textFeild: {
    paddingTop: 20,
    marginBottom: 30,
    display: "block",
  },
});

export default function MyApp() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("Money");
  const validateCheck = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (titleError === "") {
      setTitleError(true);
    }
    if (detailsError === "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
    }
  };
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h6" component="h2">
        Create New Notes
      </Typography>
      <form noValidate autoComplete="off" onSubmit={validateCheck}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginTop: 23, marginBottom: 13 }}
          id="outlined-basic"
          label="Notes Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          style={{ marginTop: 23, marginBottom: 13 }}
          onChange={(e) => setDetails(e.target.value)}
          className={classes.textFeild}
          id="outlined-basic"
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={3}
          error={detailsError}
        />
        <FormControl>
          <FormLabel>Note Cateogory</FormLabel>
          <RadioGroup
            style={{ marginTop: 23, marginBottom: 23 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
          <Button
            className={classes.textFeild}
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
