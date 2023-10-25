import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  Link,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";

export default function Plans() {
  const router = useRouter();

  return (
    <div className="max-w-[88.375rem] mx-auto w-full px-6 my-28 900px:text-left 900px:my-12 570px:px-3">
      <Typography
        variant="h1"
        sx={{
          marginBottom: "2.625rem",
          fontSize: "1.875rem",
          color: "black",
          fontFamily: "Poppins",
          "@media (max-width: 570px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Popular Plans
      </Typography>
      <Grid
        container
        spacing={6}
        marginBottom="8px"
        className="flex items-center justify-center 900px:gap-6"
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            sx={{
              background: "#FFFFFF",
              border: "3px solid #E65A2C",
              borderRadius: "30px",
              maxWidth: "290px",
              padding: "0px",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#E65A2C",
                color: "white",
              },
              cursor: "pointer",
            }}
            className="group mr-auto 1200px:mx-auto"
            onClick={() => router.push("/plans/osfur")}
            // className="group mr-auto 900px:mx-auto"
          >
            <CardContent
              sx={{
                padding: "16px 0px",
              }}
            >
              <Box
                sx={{ borderBottom: "0.5px solid rgba(230, 90, 44, 0.4)" }}
                className="group-hover:border-b-[0.5px] group-hover:border-white/40 transition-all duration-500"
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      color: "#E65A2C",
                      fontSize: "1.938rem",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    OSFUR
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      paddingBottom: "17px",
                      fontSize: "0.938rem",
                      color: "black",
                      marginTop: "-8px",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    Fly For Fun
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color="#E65A2C"
                  fontSize="4.813rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  10
                </Typography>
                <Typography
                  variant="subtitle1"
                  marginTop="-7px"
                  color="#E65A2C"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  Hours Flight
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#707070"
                  marginTop="7px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  Safe Zones
                </Typography>
                <Typography
                  variant="body2"
                  color="#707070"
                  marginTop="10px"
                  marginBottom="45px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  1<sup>st</sup> Drone Free Registration
                </Typography>
                <Box
                  elevation={0}
                  sx={{
                    backgroundColor: "#E65A2C",
                    color: "white",
                    borderRadius: "20px",
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                    marginX: "18px",
                  }}
                  className="group-hover:text-[#E65A2C] group-hover:bg-white transition-all duration-500"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      marginRight="6px"
                      fontSize="0.938rem"
                    >
                      OMR
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <Typography
                        variant="h4"
                        fontWeight="600"
                        fontSize="4.063rem"
                        lineHeight="0.8"
                      >
                        9
                      </Typography>
                      <Typography
                        variant="body1"
                        marginLeft="6px"
                        fontSize="0.938rem"
                      >
                        /Month
                      </Typography>
                    </Box>
                  </Box>
                  <ChevronRightIcon fontSize="large" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            sx={{
              background: "#FFFFFF",
              border: "3px solid #2F83D7",
              borderRadius: "30px",
              maxWidth: "290px",
              padding: "0px",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#2F83D7",
                color: "white",
              },
              cursor: "pointer",
              overflow: "visible",
            }}
            className="group relative mx-auto"
            // className="group relative 900px:mx-auto"
            onClick={() => router.push("/plans/nawras")}
          >
            <Box className="absolute -top-[2.39rem] left-1/2 -translate-x-1/2  py-0.5 px-3.5 rounded-t-md text-sm bg-rose-500 text-white">
              <Typography variant="body1" fontSize="1.313rem">
                Popular
              </Typography>
            </Box>

            <CardContent
              sx={{
                padding: "16px 0px",
              }}
            >
              <Box
                sx={{ borderBottom: "0.5px solid rgba(47, 131, 215, 0.4)" }}
                className="group-hover:border-b-[0.5px] group-hover:border-white/40 transition-all duration-500"
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      color: "#2F83D7",
                      fontSize: "1.938rem",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    NAWRAS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      paddingBottom: "17px",
                      fontSize: "0.938rem",
                      color: "black",
                      marginTop: "-8px",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    Photographer’s Favorite
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color="#2F83D7"
                  fontSize="4.813rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  20
                </Typography>
                <Typography
                  variant="subtitle1"
                  marginTop="-7px"
                  color="#2F83D7"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  Hours Flight
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#707070"
                  marginTop="7px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  Safe Zones
                </Typography>
                <Typography
                  variant="body2"
                  color="#707070"
                  marginTop="10px"
                  marginBottom="45px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  1<sup>st</sup> Drone Free Registration
                </Typography>
                <Box
                  elevation={0}
                  sx={{
                    backgroundColor: "#2F83D7",
                    color: "white",
                    borderRadius: "20px",
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                    marginX: "18px",
                  }}
                  className="group-hover:text-[#2F83D7] group-hover:bg-white transition-all duration-500"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      marginRight="6px"
                      fontSize="0.938rem"
                    >
                      OMR
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <Typography
                        variant="h4"
                        fontWeight="600"
                        fontSize="4.063rem"
                        lineHeight="0.8"
                      >
                        17
                      </Typography>
                      <Typography
                        variant="body1"
                        marginLeft="6px"
                        fontSize="0.938rem"
                      >
                        /Month
                      </Typography>
                    </Box>
                  </Box>
                  <ChevronRightIcon fontSize="large" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            sx={{
              background: "#FFFFFF",
              border: "3px solid #000000",
              borderRadius: "30px",
              maxWidth: "290px",
              padding: "0px",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#000000",
                color: "white",
              },
              cursor: "pointer",
            }}
            className="group ml-auto 1200px:mx-auto"
            // className="group 900px:mx-auto"
            onClick={() => router.push("/plans/haitham")}
          >
            <CardContent
              sx={{
                padding: "16px 0px",
              }}
            >
              <Box
                sx={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.2)" }}
                className="group-hover:border-b-[0.5px] group-hover:border-white/40 transition-all duration-500"
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      color: "#000000",
                      fontSize: "1.938rem",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    AL HAITHAM
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      paddingBottom: "17px",
                      fontSize: "0.938rem",
                      color: "black",
                      marginTop: "-8px",
                    }}
                    className="group-hover:text-white transition-all duration-500"
                  >
                    Commercial Drone Pilot
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color="#000000"
                  fontSize="2.75rem"
                  marginTop="22px"
                  className="group-hover:text-white transition-all duration-500"
                >
                  UNLIMITED
                </Typography>
                <Typography
                  variant="subtitle1"
                  // marginTop="-7px"
                  color="#000000"
                  fontSize="1.125rem"
                  marginBottom="21px"
                  // marginTop="7px"
                  className="group-hover:text-white transition-all duration-500"
                >
                  Flight Hours
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#707070"
                  marginTop="7px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                >
                  1<sup>st</sup> Drone Free Registration
                </Typography>
                <Typography
                  variant="body2"
                  color="#707070"
                  marginTop="10px"
                  marginBottom="7px"
                  fontWeight="500"
                  fontSize="1.125rem"
                  className="group-hover:text-white transition-all duration-500"
                  paddingX="20px"
                >
                  Eligible To Upgrade To Commercial Pilot
                </Typography>
                <Box
                  elevation={0}
                  sx={{
                    backgroundColor: "#000000",
                    color: "white",
                    borderRadius: "20px",
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                    marginX: "18px",
                  }}
                  className="group-hover:text-[#000000] group-hover:bg-white transition-all duration-500"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      marginRight="6px"
                      fontSize="0.938rem"
                    >
                      OMR
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <Typography
                        variant="h4"
                        fontWeight="600"
                        fontSize="4.063rem"
                        lineHeight="0.8"
                      >
                        25
                      </Typography>
                      <Typography
                        variant="body1"
                        marginLeft="6px"
                        fontSize="0.938rem"
                      >
                        /Month
                      </Typography>
                    </Box>
                  </Box>
                  <ChevronRightIcon fontSize="large" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <List
        sx={{
          marginTop: "36px",
          listStyleType: "disc",
          listStylePosition: "inside",
          "@media (max-width: 570px)": {
            marginTop: "0px",
          },
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: "0px",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.25rem",
              "@media (max-width: 570px)": {
                fontSize: "1rem",
              },
            }}
          >
            * Prices Inclusive 5% VAT.
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "start",
            paddingX: "0px",
            justifyContent: "space-between",
            marginTop: "-20px",
            "@media (max-width: 900px)": {
              flexDirection: "column",
              gap: "30px",
              marginTop: "-15px",
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "1.25rem",
              "@media (max-width: 570px)": {
                fontSize: "1rem",
              },
            }}
          >
            * All subscriptions can be upgraded.
          </Typography>
        </ListItem>
        <ListItem>
          <Link
            href="/"
            underline="always"
            color="#E65A2C"
            sx={{
              textDecorationColor: "#E65A2C",
              fontSize: "1.25rem",
              "&:hover": {
                color: "red",
              },
              marginLeft: "auto",
              transform: "translateY(-45px)",
              "@media (max-width: 900px)": {
                transform: "translateY(0px)",
                marginLeft: "0px",
                margin: "0 auto",
              },
              "@media (max-width: 570px)": {
                fontSize: "1rem",
              },
            }}
          >
            See More
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
