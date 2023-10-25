import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const Statistics = ({ courses, applicants, successRate, income }) => {
  return (
    <Grid container spacing={3} sx={{ padding: "2rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          sx={{
            backgroundColor: "#fff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardGiftcardIcon
                sx={{ color: "#2A5D9F", fontSize: "50px", marginRight: "1rem" }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#2A5D9F", fontWeight: "bold" }}
              >
                Courses
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              129
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              marginY: "1rem",
              height: 10,
              width: "100%",
              borderRadius: 5,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: "",
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: "goldenrod",
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          sx={{
            backgroundColor: "#fff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AssignmentIcon
                sx={{ color: "#2A5D9F", fontSize: "50px", marginRight: "1rem" }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#2A5D9F", fontWeight: "bold" }}
              >
                New Applicants
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              255
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={40}
            sx={{
              marginY: "1rem",
              height: 10,
              width: "100%",
              borderRadius: 5,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: "",
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: "goldenrod",
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          sx={{
            backgroundColor: "#fff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThumbUpIcon
                sx={{ color: "#2A5D9F", fontSize: "50px", marginRight: "1rem" }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#2A5D9F", fontWeight: "bold" }}
              >
                Success Rate
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              90%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              marginY: "1rem",
              height: 10,
              width: "100%",
              borderRadius: 5,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: "",
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: "goldenrod",
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          sx={{
            backgroundColor: "#fff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SignalCellularAltIcon
                sx={{ color: "#2A5D9F", fontSize: "50px", marginRight: "1rem" }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#2A5D9F", fontWeight: "bold" }}
              >
                Income
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              13K OMR
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              marginY: "1rem",
              height: 10,
              width: "100%",
              borderRadius: 5,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: "",
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: "goldenrod",
              },
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistics;
