import React, { useState } from "react";
import Link from "next/link";
import Moment from "react-moment";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const CourseItem = ({ course, id }) => {
  const handleDelete = (id) => {
    // Api to delete the course
  };
  console.log({ course, id });

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "0rem",
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
          <Typography
            variant="h6"
            component="h5"
            sx={{
              color: "#2A5D9F",

              fontWeight: "bold",
            }}
          >
            {course.title}{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "1rem",
            flexGrow: "0",
            // maxWidth: "30%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: course.discountPercentage ? "#a3a3a3" : "#000",
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingX: "20px",
              fontSize: course.discountPercentage ? "1rem" : "1.5rem",
              textDecoration: course.discountPercentage ? "line-through" : "",
            }}
          >
            {course.price} OMR
          </Typography>
          {course.discountPercentage ? (
            <Typography
              variant="h5"
              sx={{
                color: "#000",
                fontWeight: "bold",
                alignSelf: "flex-start",
                paddingX: "10px",
              }}
            >
              {course.price - (course.discountPercentage / 100) * course.price}{" "}
              OMR
            </Typography>
          ) : (
            ""
          )}
          <Box>
            <Link href={`/admin/edit-course/${id}`}>
              <a
                style={{
                  color: "#2A5D9F",
                }}
              >
                <EditIcon sx={{ fontSize: "25px" }} />
              </a>
            </Link>
            <Link href="#" onClick={(e) => handleDelete(id)}>
              <a style={{ color: "orange" }}>
                <HighlightOffIcon sx={{ fontSize: "25px" }} />
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // width: "50%",
          marginY: ".5rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", color: "#686868" }}
        >
          <CalendarMonthIcon sx={{ color: "#2A5D9F", marginRight: ".5rem" }} />{" "}
          <Moment format="MMM Do YYYY">{course.startDate}</Moment>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#686868",
            marginX: "10px",
          }}
        >
          <PublishedWithChangesIcon
            sx={{ color: "#2A5D9F", marginRight: ".5rem" }}
          />{" "}
          {course.duration.months > 0
            ? `${course.duration.months}
              months
              ${course.duration.weeks}
              weeks
              ${course.duration.days}
              days`
            : course.duration.weeks > 0
            ? `${course.duration.weeks}  weeks  ${course.duration.days} days`
            : `${course.duration.days}  days`}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ color: "#686868" }}>
        {course.description}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color:
            course.status == "Approved"
              ? "#2c9900"
              : course.status == "Pending"
              ? "#a68400d1"
              : "#a60000d1",
        }}
      >
        {course.status}
      </Typography>
    </Paper>
  );
};

export default CourseItem;
