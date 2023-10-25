import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "rgb(42 93 159 / 30%)",
        }}
        size={props.size}
        thickness={props.thickness}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        size={props.size}
        value={props.value}
        sx={{ color: props.color, position: "absolute", left: 0 }}
        thickness={props.thickness}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{
            fontSize: props.size / 3,
          }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default function CircularStatic({ progress, color, size, thickness }) {
  return (
    <CircularProgressWithLabel
      value={progress}
      color={color}
      size={size}
      thickness={thickness}
    />
  );
}
