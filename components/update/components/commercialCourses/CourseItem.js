import React, { useState } from "react";
import Link from "next/link";
import Moment from "react-moment";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CourseItem = ({ course, selectedValue, setSelectedValue }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: "0",
          display: "flex",
          width: "80%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingY: "20px",
          flexGrow: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "fit-content",
            }}
          >
            <Radio
              checked={selectedValue === `${course.id}`}
              onChange={handleChange}
              value={`${course.id}`}
              name="course"
              inputProps={{ "aria-label": course.id }}
              sx={{
                alignSelf: "flex-start",
                padding: "0px",
                color: "#E65A2C",
                alignSelf: "center",
                paddingRight: "20px",
                display: "flex",
                "& .MuiSvgIcon-root": {
                  fontSize: 25,
                  alignSelf: "center",
                  color: "#E65A2C",
                },
                "&.Mui-checked": {
                  color: "#E65A2C",
                },
              }}
            />
            <Typography
              variant="h5"
              component="h5"
              sx={{
                color: "#000",
                maxWidth: "300px",
                fontWeight: "bold",
              }}
            >
              {course.attributes.title}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%",
            marginY: "1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", color: "#5F5F5F" }}
          >
            <CalendarMonthIcon
              sx={{ color: "#5F5F5F", marginRight: ".5rem" }}
            />
            <Moment format="MMM Do YYYY">{course.attributes.createdAt}</Moment>
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", color: "#5F5F5F" }}
          >
            <PublishedWithChangesIcon
              sx={{ color: "#5F5F5F", marginRight: ".5rem" }}
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
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", color: "#5F5F5F" }}
          >
            <LocationOnIcon sx={{ color: "#5F5F5F", marginRight: ".5rem" }} />
            Attendance Course
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ color: "#000", fontSize: "18px" }}>
          {course.attributes.description}
        </Typography>
      </Paper>
      <Box
        sx={{
          alignSelf: "flex-end",
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: "20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: course.attributes.discountPercentage ? "#a3a3a3" : "#000",
            fontWeight: "bold",
            alignSelf: "flex-start",
            fontSize: course.attributes.discountPercentage ? "15px" : "30px",
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

export default CourseItem;
