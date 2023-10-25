import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error = ({ status, message }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingY: "2rem",
        paddingX: "2rem",
        borderRadius: "1rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            width: "50%",
            height: "90%",
            margin: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#2A5D9F",
              fontWeight: "bold",
              paddingY: "3rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {status === 500 ? "Oops!!" : status}{" "}
          </Typography>
          <Typography variant="h6" sx={{ color: "#777", fontWeight: "bold" }}>
            {message}
          </Typography>
        </Box>
        <img
          src="/images/sad_icon.svg"
          style={{ maxWidth: "50%", maxHeight: "50%" }}
        />
      </Box>
    </Box>
  );
};

export default Error;
