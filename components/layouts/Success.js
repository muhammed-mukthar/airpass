import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Success = ({ message, redirect = null, title = null }) => {
  const [count, setCount] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (count === 0) router.push(redirect !== null ? redirect : "/");
  }, [count]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        padding: "20px 30px",
      }}
    >
      <Typography
        variant="h3"
        style={{
          color: "#000",
          fontWeight: "bold",
          fontSize: "25px",
          alignSelf: "flex-start",
        }}
      >
        {title || "Payment"}
      </Typography>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "30px 40px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              rowGap: "20px",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#000", fontSize: "20px", fontWeight: "bold" }}
            >
              {message}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontSize: "18px" }}
            >
              you will be redirected after {count} sec.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
