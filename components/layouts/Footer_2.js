import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiInstagramLine,
} from "react-icons/ri";
import Link from "next/link";
import React from "react";
import MobileFooter from "./MobileFooter";

const Footer_2 = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <Box sx={{ backgroundColor: "#430073", padding: "20px" }}>
          <Box
            fixed
            disableGutters={false}
            style={{
              maxWidth: "85.375rem",
              width: "100%",
              paddingX: "0",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (max-width: 900px)": {
                  flexDirection: "column",
                  textAlign: "center",
                  rowGap: "50px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "36px",
                  alignItems: "center",
                  "@media (max-width: 570px)": {
                    flexDirection: "column",
                    rowGap: "20px",
                  },
                }}
              >
                <Typography sx={{ color: "#fff" }}>
                  <Link href="/">
                    <a
                      style={{
                        color: "#fff",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      SERB Homepage
                    </a>
                  </Link>
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  <Link
                    href="/privacy-policy"
                    key="privacy-policy"
                    style={{ color: "#fff", fontSize: "5rem" }}
                  >
                    <a
                      style={{
                        color: "#fff",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  <Link
                    href="/terms-and-conditions"
                    style={{ color: "#fff", fontSize: "5rem" }}
                  >
                    <a
                      style={{
                        color: "#fff",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      Terms {"&"} Conditions
                    </a>
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "10px",
                  "@media (max-width: 900px)": {
                    justifyContent: "space-between",
                    width: "80%",
                  },
                }}
              >
                <Link href="https://x.com/serbglobal?s=21&t=GBZ48L5RatruvQx0h4MzNQ">
                  <a target="_blank">
                    <RiTwitterXFill
                      fontSize="1.563rem"
                      color="#fff"
                      cursor="pointer"
                    />
                  </a>
                </Link>
                <Link href="https://instagram.com/serbglobal?igshid=MzRlODBiNWFlZA==">
                  <a target="_blank">
                    <RiInstagramLine
                      fontSize="1.563rem"
                      color="#fff"
                      cursor="pointer"
                    />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/@serbglobal_">
                  <a target="_blank">
                    <RiYoutubeFill
                      fontSize="1.563rem"
                      color="#fff"
                      cursor="pointer"
                    />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/company/serbglobal/">
                  <a target="_blank">
                    <RiLinkedinFill
                      fontSize="1.563rem"
                      color="#fff"
                      cursor="pointer"
                    />
                  </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer_2;
