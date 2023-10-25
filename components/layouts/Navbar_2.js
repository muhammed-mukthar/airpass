import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosMenu } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // Define custom styles
  brandIcon: {
    marginRight: "auto !important",
  },
  menuIcon: {
    marginRight: "auto !important",
  },
  MobileProfileMenu: {
    marginLeft: "auto !important",
  },
});

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import logo from "../../public/images/white logo.svg";
import styles from "../../styles/top-banner.module.css";
import Head from "next/head";

const pages = ["Products", "Pricing", "Blog"];
let settings;

const Navbar = ({ authenticated, user }) => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const isLoginPage =
    router.pathname === "/auth/login" ||
    router.pathname === "/enterprise-section/Login";

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("enterprise");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const [open, setOpen] = React.useState(false);
  // const toggleMenu = () => {
  //   setOpen(!open);
  // };

  const isMobile = useMediaQuery("(max-width: 900px)");
  const classes = useStyles(); // Initialize custom styles

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/auth/login");
  };

  if (authenticated && user) {
    if (user?.account_type?.type == "commercial-drone-pilot") {
      settings = [
        <Link key="me" href="/commercial-courses/me">
          Me
        </Link>,
        <Link key="videos" href="/commercial-courses">
          Courses
        </Link>,
        <Button
          key="logout"
          sx={{ padding: "0", margin: "0", color: "#282828" }}
          onClick={(e) => handleClick()}
        >
          Logout
        </Button>,
      ];
    } else {
      settings = [
        <Link key="me" href="/me">
          Me
        </Link>,
        <Link key="videos" href="/videos">
          Videos
        </Link>,
        <Button
          key="logout"
          sx={{ padding: "0", margin: "0", color: "#282828" }}
          onClick={(e) => handleClick()}
        >
          Logout
        </Button>,
      ];
    }
  } else {
    settings = [
      <Link key="plans" href="/plans">
        Plans
      </Link>,
      <Link key="add-on" href="/add-ons">
        Add-Ons
      </Link>,
      <Link key="about" href="/about">
        About Us
      </Link>,
      <Link key="careers" href="/careers">
        Careers
      </Link>,
      <Link
        key="register"
        href="/auth/register"
        //     sx={{
        //       padding: "8px 12px",
        // background:" #816A91 0% 0% no-repeat padding-box",
        // borderRadius: "6px",
        //     }}
        // style={{
        //   padding: "8px 12px !important",
        //   background: " #816A91 0% 0% no-repeat padding-box !important",
        //   borderRadius: "6px !important",
        // }}
      >
        Register Now
      </Link>,
    ];
  }

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
      </Head>

      <div className="flex flex-col justify-center items-center gap-1">
        <div className={`fixed ${styles.top_banner} z-[9999] top-0 w-full`}>
          <div className="flex justify-between items-center max-w-[88.375rem]  mx-auto w-full px-6 570px:px-3">
            <div className="flex gap-4 justify-between items-center 570px:gap-0">
              <button
                className={`font-semibold 570px:font-normal ${
                  selected == "pilot" ? styles.top_banner_selected : ""
                }`}
                onClick={() => {
                  setSelected("pilot");

                  router.push("/");
                }}
              >
                Pilot
              </button>
              <button
                className={`font-semibold 570px:font-normal ${
                  selected == "enterprise" ? styles.top_banner_selected : ""
                }`}
                onClick={() => {
                  setSelected("enterprise");

                  router.push("/enterprise-section");
                }}
              >
                Enterprise
              </button>
            </div>

            <div>
              <button className="font-medium">English</button>
              <span className={` ${styles.vertical_line}`}></span>
              <button className="font-medium">عربي</button>
            </div>
          </div>
        </div>

        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#430073",
            zIndex: "9999",
            paddingX: "1.5rem",
            marginTop: "3.063rem",
            "@media (max-width: 900px)": {
              // marginTop: "2.25rem",
              paddingX: "0.75rem",
              paddingLeft: "0",
            },
            "@media (max-width: 570px)": {
              marginTop: "2.25rem",
              paddingX: "0.75rem",
              paddingLeft: "0",
            },
          }}
        >
          <Box
            fixed
            sx={{
              paddingLeft: "0",
              maxWidth: "85.375rem",
              width: "100%",
              // paddingX: "1.5rem",
              margin: "0 auto",
            }}
          >
            <Toolbar disableGutters>
              {/* Menu icon on the right (only in mobile view) */}
              {isMobile ? (
                <>
                  <div
                    className={`flex justify-center items-center gap-2 w-full h-full`}
                  >
                    <div
                      className={`flex items-center gap-4 $classes.menuIcon h-full`}
                    >
                      <IconButton
                        edge="end"
                        color="inherit"
                        sx={{
                          backgroundColor: "rgba(111, 55, 144, 0.86)",
                          borderRadius: "0 !important",
                          padding: "0",
                          height: "3.5rem",
                          width: "3.5rem",
                        }}
                        aria-label="menu"
                        // sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                      >
                        <IoIosMenu className="text-5xl cursor-pointer font-normal" />
                      </IconButton>
                      <Link href="/">
                        <Image
                          src={logo}
                          width={100}
                          height={30}
                          style={{ cursor: "pointer" }}
                        />
                      </Link>
                    </div>
                    {/* <div>
                      <button className="font-medium text-lg mr-2">
                        English
                      </button>
                      <span className={` ${styles.vertical_line}`}></span>
                      <button className="font-medium text-lg ml-2">عربي</button>
                    </div> */}
                    <Link href="/auth/register">
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "1rem",
                          lineHeight: "0.875rem",
                          fontWeight: "500",
                          cursor: "pointer",
                          paddingX: "0.75rem",
                          marginLeft: "auto",
                          height: "41px",
                          minWidth: "119px",
                          background: "#E65A2C",
                          borderRadius: "6px",
                          transition: "all",
                          transitionDuration: "0.2s",
                          ":hover": {
                            background: "rgb(195 68 26)",
                          },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isLoginPage ? <p>Register Now</p> : <p>Log in</p>}
                      </Typography>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Typography
                      variant="p"
                      noWrap
                      component="p"
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: ".1rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      <Link href="/">
                        <Image
                          src={logo}
                          width={129}
                          height={36}
                          style={{ cursor: "pointer" }}
                          layout="fixed"
                        />
                      </Link>
                    </Typography>
                  </Box>
                  {/* Rest of the desktop menu items */}
                  {!authenticated ? (
                    <Box
                      sx={{
                        flexGrow: 0,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{
                            color: "#fff",
                            fontSize: "1.125rem",
                            lineHeight: "0.875rem",
                            fontWeight: "500",
                            cursor: "pointer",
                            padding: "1.5rem 1.875rem",
                            transition: "all",
                            transitionDuration: "0.2s",
                            ":hover": {
                              background: "#816A91 0% 0% no-repeat padding-box",
                            },
                          }}
                        >
                          <Link key="home" href="/">
                            Home
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{
                            color: "#fff",
                            fontSize: "1.125rem",
                            lineHeight: "0.875rem",
                            fontWeight: "500",
                            padding: "1.5rem 1.875rem",
                          }}
                        >
                          {isLoginPage ? (
                            <p>Have an account?</p>
                          ) : (
                            <p>New to SERB?</p>
                          )}
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{
                            cursor: "pointer",
                            padding: "8px 12px",
                          }}
                        >
                          <Link href="/auth/register">
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "1.125rem",
                                lineHeight: "0.875rem",
                                fontWeight: "500",
                                cursor: "pointer",
                                paddingX: "1.25rem",
                                height: "48px",
                                background: "#E65A2C",
                                borderRadius: "6px",
                                transition: "all",
                                transitionDuration: "0.2s",
                                ":hover": {
                                  background: "rgb(195 68 26)",
                                },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {isLoginPage ? (
                                <p>Log in</p>
                              ) : (
                                <p>Register Now</p>
                              )}
                            </Typography>
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    // Authenticated user: show user menu
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          {user !== null &&
                          user.pilot_detail &&
                          user.pilot_detail.first_name
                            ? user.pilot_detail.first_name
                            : ""}
                          <Avatar
                            alt="Danny Sharp"
                            src={
                              user !== null &&
                              user.pilot_detail &&
                              user.pilot_detail.image !== null
                                ? `${user.pilot_detail.image.url}`
                                : "/images/avatar.png"
                            }
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting, i) => (
                          <MenuItem key={i} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  )}
                </>
              )}
            </Toolbar>
          </Box>
        </AppBar>
        {/* Drawer for mobile view */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          variant="temporary"
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "rgba(111, 55, 144, 0.95)", // Set the background color to blue
              color: "#fff", // Set the text color to white
              width: "500px", // Increase the width by 100px
              paddingTop: "8.375rem",
              "@media (max-width: 570px)": {
                width: "90%",
              },
            },
          }}
        >
          {/* Close icon at the top right */}
          {/* <IconButton
            sx={{
              color: "#fff",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={toggleDrawer}
          >
            <CloseIcon
              sx={{
                fontSize: "2.188rem",
                cursor: "pointer",
              }}
            />
          </IconButton> */}
          <div className="mx-3 flex flex-col gap-6">
            <div>
              <div className="border-b border-b-white pb-3">
                <span
                  className="text-base font-bold flex flex-col"
                  onClick={toggleDrawer}
                >
                  <Link href="/about">About Us</Link>
                </span>
              </div>
              <div className="flex flex-col mt-4 gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/about">Who we are</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/about">What we do</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/news">Articles</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="border-b border-b-white pb-3">
                <span
                  className="text-base font-bold flex flex-col"
                  onClick={toggleDrawer}
                >
                  <Link href="/plans">Plans</Link>
                </span>
              </div>
              <div className="flex flex-col mt-4 gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/plans/osfur">OSFUR</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/plans/nawras">NAWRAS</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-medium flex flex-col flex-grow"
                    onClick={toggleDrawer}
                  >
                    <Link href="/plans/haitham">AL HAITHAM</Link>
                  </span>
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    className="h-3"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-b-white pb-3 mt-4">
              <span
                className="text-base font-bold flex flex-col"
                onClick={toggleDrawer}
              >
                <Link href="/add-ons">Add-Ons</Link>
              </span>
            </div>

            <div className="border-b border-b-white pb-3">
              <span
                className="text-base font-bold flex flex-col"
                onClick={toggleDrawer}
              >
                <Link href="/careers">Careers</Link>
              </span>
            </div>
            <div className="border-b border-b-white pb-3">
              <span
                className="text-base font-bold flex flex-col"
                onClick={toggleDrawer}
              >
                <Link href="/">Home</Link>
              </span>
            </div>

            <div className="flex justify-end mt-7">
              <button className=" w-[9.875rem] h-[2.313rem] bg-[#FF0059] text-white text-lg rounded-md hover:bg-[#c74545] transition-all duration-200">
                myserb
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};
export default Navbar;
