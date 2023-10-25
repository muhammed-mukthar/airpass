import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

import Moment from "react-moment";

const CourseDetails = ({ course }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{}}>
        <iframe
          width="850"
          height="400"
          src={`${course.attributes.preview.replace("watch?v=", "embed/")}`}
          title="Course Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Typography
        variant="h4"
        sx={{ color: "#000", fontWeight: "bold", fontSize: "20px" }}
      >
        {course.attributes.title}
        {/* {course.attributes.preview.replace("watch?v=", "embed/")} */}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
        <Typography
          variant="body"
          sx={{
            color: "#000",
            fontSize: "18px",
            // paddingX: "20px",
            // fontSize: "1rem",
          }}
        >
          {course.attributes.description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Start Date:
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", color: "#686868" }}
        >
          <CalendarMonthIcon sx={{ color: "#E65A2C", marginRight: ".5rem" }} />{" "}
          <Moment format="MMM Do YYYY">{course.attributes.createdAt}</Moment>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Duration:
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", color: "#686868" }}
        >
          <PublishedWithChangesIcon
            sx={{ color: "#E65A2C", marginRight: ".5rem" }}
          />{" "}
          {course.attributes.duration.months > 0
            ? `${course.attributes.duration.months}
              months
              ${course.attributes.duration.weeks}
              weeks
              ${course.attributes.duration.days}
              days`
            : course.attributes.duration.weeks > 0
            ? `${course.attributes.duration.weeks}  weeks  ${course.attributes.duration.days} days`
            : `${course.attributes.duration.days}  days`}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Price:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: course.attributes.discountPercentage ? "#a3a3a3" : "#000",
            fontWeight: "bold",
            alignSelf: "flex-start",
            // paddingX: "20px",
            fontSize: course.attributes.discountPercentage ? "1rem" : "1.5rem",
            textDecoration: course.attributes.discountPercentage
              ? "line-through"
              : "",
          }}
        >
          {course.attributes.price} OMR
        </Typography>
        {course.attributes.discountPercentage ? (
          <Typography
            variant="h5"
            sx={{
              color: "#000",
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingX: "10px",
            }}
          >
            {course.attributes.price -
              (course.attributes.discountPercentage / 100) *
                course.attributes.price}{" "}
            OMR
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default CourseDetails;
