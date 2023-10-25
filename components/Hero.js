import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Hero = ({ image, heading, text }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "50%",
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingY: "1rem",
        borderRadius: "1rem 0 0 1rem",
      }}
    >
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgb(68 68 68 / 80%);",
          paddingX: "1rem",
          paddingY: ".5rem",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: "#fff",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body"
          component="p"
          sx={{
            color: "#fff",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
