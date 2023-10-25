import { Box, Typography, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ReadMore() {
  const router = useRouter();

  return (
    <div className="max-w-[88.375rem] w-full px-6 mx-auto my-32 900px:mb-24 900px:mt-0 570px:px-3">
      <Box
        sx={{
          paddingX: "0px",
          minWidth: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.875rem",
            color: "#4B4B4B",
            marginBottom: "56px",
            fontWeight: "400",
            "@media (max-width: 900px)": {
              marginBottom: "24px",
            },
            "@media (max-width: 570px)": {
              fontSize: "1.125rem",
            },
          }}
        >
          Read More about SERB’s News
        </Typography>
        <Grid
          container
          spacing="24px"
          sx={{
            "@media (max-width: 900px)": {
              rowGap: "0px",
            },
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              position="relative"
              sx={{
                width: "fit-content",
                cursor: "pointer",
                margin: "0 auto"
              }}
              onClick={() => router.push("/news/5")}
              // className="group 900px:hover:scale-95 hover:drop-shadow-2xl 900px:hover:drop-shadow-lg transition-all duration-200"
            >
              <Image
                src="/imgs/read_more_home_1.png"
                alt="Image 1"
                height={477}
                width={720}
                // className="900px-min:group-hover:scale-105 900px-min:group-hover:-rotate-2 transition-all duration-200"
                className="object-cover"
              />
              <Box
                position="absolute"
                bottom="6px"
                left={0}
                right={0}
                p="18.5rem 14px 12px 14px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="#fff"
                sx={{
                  "@media (max-width: 900px)": {
                    padding: "12.5rem 14px 12px 14px",
                  },
                }}
                className="bg-gradient-to-t from-gray-600/90 via-gray-700/10 to-transparent"
                // className="group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-transparent group-hover:to-transparent transition-all duration-200"
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.688rem",
                      fontWeight: "600",
                      textDecoration: "underline",
                      "@media (max-width: 570px)": {
                        fontSize: "1rem",
                      }
                    }}
                  >
                    SERB Launching
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.313rem",
                      "@media (max-width: 570px)": {
                        fontSize: "0.875rem",
                      }
                    }}
                  >
                    October 3<sup>rd</sup>, 2023
                  </Typography>
                </Box>
                <ChevronRightIcon fontSize="large" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              position="relative"
              sx={{
                width: "fit-content",
                cursor: "pointer",
                margin: "0 auto"
              }}
              onClick={() => router.push("/news/2")}
              // className="group 900px:hover:scale-95 hover:drop-shadow-2xl 900px:hover:drop-shadow-lg transition-all duration-200"
            >
              <Image
                src="/imgs/read_more_home_2.png"
                alt="Image 2"
                height={477}
                width={720}
                // className="900px-min:group-hover:scale-105 900px-min:group-hover:-rotate-2 transition-all duration-200"
                className="object-cover"
              />
              <Box
                position="absolute"
                bottom="6px"
                left={0}
                right={0}
                p="18.5rem 14px 12px 14px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="#fff"
                sx={{
                  "@media (max-width: 900px)": {
                    padding: "12.5rem 14px 12px 14px",
                  },
                }}
                // className="group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-transparent group-hover:to-transparent transition-all duration-200"
                className="bg-gradient-to-t from-gray-600/90 via-gray-700/10 to-transparent"
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.688rem",
                      fontWeight: "600",
                      textDecoration: "underline",
                      "@media (max-width: 570px)": {
                        fontSize: "1rem",
                      }
                    }}
                  >
                    SERB RAISING A FUND OF 2.7M IN OMAN
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.313rem",
                      "@media (max-width: 570px)": {
                        fontSize: "0.875rem",
                      }
                    }}
                  >
                    March 19<sup>th</sup>, 2023
                  </Typography>
                </Box>
                <ChevronRightIcon fontSize="large" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
