import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles.js";
import Tutor from "./Tutor/Tutor.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const styling = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const Tutors = ({ setCurrentId }) => {
  const tutors = useSelector((state) => state.tutors);
  const classes = useStyles();

  return !tutors.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems
      justifyContent="flex-start"
      spacing={3}
    >
      {tutors.map((tutor) => (
        <Grid key={tutor._id} item spacing={3}>
          <Tutor tutor={tutor} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tutors;
