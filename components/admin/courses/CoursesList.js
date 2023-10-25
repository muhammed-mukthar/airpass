import React from "react";

import CourseItem from "./CourseItem";

import Grid from "@mui/material/Grid";

const CoursesList = ({ courses }) => {
  return (
    <Grid
      container
      rowSpacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ maxwidth: "100%", paddingX: "0rem", paddingY: "1rem" }}
    >
      {courses.map(({ attributes: course, id }) => (
        <Grid key={id} item xs={12}>
          <CourseItem course={course} id={id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoursesList;
