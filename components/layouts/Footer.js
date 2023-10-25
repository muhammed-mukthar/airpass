import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <Box
          sx={{
            backgroundColor: "#4B0177",
            paddingY: "1.063rem",
            paddingX: "1.5rem",
          }}
        >
          <Box
            fixed
            disableGutters={false}
            sx={{
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
              }}
              className="900px:flex 900px:flex-col 900px:items-center 900px:justify-center 900px:gap-4"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "24px",
                  alignItems: "center",
                  "@media (max-width: 900px)": {
                    // flexDirection: "column",
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Arimo, sans-serif !important",
                  }}
                >
                  <Link href="/privacy-policy" key="privacy-policy">
                    <a
                      style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </Typography>
                <Box
                  sx={{
                    color: "#fff",
                    opacity: "0.57",
                    height: "23px",
                    border: "1px solid #FFFFFF",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Arimo, sans-serif !important",
                  }}
                >
                  <Link href="/terms-and-conditions" key="terms-and-conditions">
                    <a
                      style={{
                        color: "#fff",
                        fontSize: "1.2rem",
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
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontFamily: "Arimo, sans-serif !important",
                  }}
                >
                  SERB company © 2023
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
