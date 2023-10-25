import React from "react";

import Loading from "../layouts/Loading";
import CourseItem from "./CourseItem";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const CoursesList = ({ courses, selectedValue, setSelectedValue }) => {
  console.log({ courses });
  return (
    <Grid
      container
      rowSpacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ maxwidth: "100%", paddingX: "0rem", paddingY: "1rem" }}
    >
      <Grid item xs={12}>
        {" "}
        <Typography
          variant="h3"
          sx={{
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Select a course :
        </Typography>
      </Grid>
      {courses.map((course) =>
        course.attributes.capacity >
        course.attributes.pilot_details.data.length ? (
          <Grid key={course.id} item xs={12}>
            <CourseItem
              course={course}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </Grid>
        ) : (
          ""
        )
      )}
    </Grid>
  );
};

export default CoursesList;
