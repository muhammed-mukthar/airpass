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
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosMenu } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
import { RiArrowDropRightLine } from "react-icons/ri";
import SubNav from "./SubNav";
import { useEffect } from "react";

const pages = ["Products", "Pricing", "Blog"];
let settings;

const Navbar = ({ authenticated, user }) => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const isHomePage =
    router.pathname === "/" || router.pathname === "/enterprise-section";
  const isEnterpriseSection = router.asPath.includes("enterprise-section");

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showDropdown2, setShowDropdown2] = React.useState(false);
  const [selected, setSelected] = React.useState("pilot");
  const [toggleIcon1, setToggleIcon1] = React.useState(false);
  const [toggleIcon2, setToggleIcon2] = React.useState(false);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setShowDropdown(false); // Close the dropdown when closing the Drawer
    setShowDropdown2(false); // Close the dropdown when closing the Drawer
  };

  const handleNavClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleNavClick2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const [open, setOpen] = React.useState(false);
  // const toggleMenu = () => {
  //   setOpen(!open);
  // };
  useEffect(() => {
    if (isEnterpriseSection) {
      setSelected("enterprise");
    } else {
      setSelected("pilot");
    }
  }, [isEnterpriseSection]);

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
      // <Link key="login" href="/auth/login">
      //   <a style={{ fontWeight: "bold" }}>Login</a>
      // </Link>,
      // <Link key="register" href="/auth/register">
      //   <Button
      //     variant="contained"
      //     sx={{
      //       backgroundColor: "#E65A2C",
      //       color: "#fff",
      //       fontFamily: "Poppins, sans-serif",
      //       fontWeight: "bold",
      //       ":hover": {
      //         backgroundColor: "#E65A2C",
      //         color: "#fff",
      //         WebkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
      //         MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
      //         boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
      //       },
      //     }}
      //   >
      //     Register Now
      //   </Button>
      // </Link>,

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
        key="myserb"
        href="/"
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
        myserb
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
      {console.log(selected, "selected")}
      <div className="flex flex-col justify-center items-center gap-1">
        {!authenticated && (
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
        )}

        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#430073",
            zIndex: "9999",
            marginTop: !authenticated ? "3.063rem" : "0",
            paddingX: "1.5rem",
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
              // "@media (max-width: 900px)": {
              //   paddingX: "1.5rem",
              // }
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
                          backgroundColor:
                            "rgba(111, 55, 144, 0.86) !important",
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
                    <IconButton
                      className={classes.MobileProfileMenu}
                    ></IconButton>
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
                  {/* ----- TO BE USED WHEN AUTHENTICATION IS ENABLED */}
                  {/* {!authenticated ? ( */}
                  {authenticated ? (
                    <Box
                      sx={{
                        flexGrow: 0,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {!isHomePage && (
                        <Box sx={{ position: "relative" }}>
                          <Typography
                            className="h-full"
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
                                background:
                                  "#816A91 0% 0% no-repeat padding-box",
                              },
                              "@media (max-width: 1110px)": {
                                padding: "1.5rem 0.938rem",
                              },
                            }}
                          >
                            <Link key="home" href="/" passHref>
                              Home
                            </Link>
                          </Typography>
                        </Box>
                      )}
                      {isEnterpriseSection ? (
                        <Box sx={{ position: "relative" }}>
                          <Typography
                            className={`dropdownBtn1 h-full ${
                              isHovered ? "hovered" : ""
                            }`}
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
                                background:
                                  "#816A91 0% 0% no-repeat padding-box",
                              },
                              "@media (max-width: 1110px)": {
                                padding: "1.5rem 0.938rem",
                              },
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link
                              key="plans"
                              href="/enterprise-section/EnterprisePlans"
                            >
                              Plans
                            </Link>
                            <Box
                              className="dropdownContent1"
                              sx={{
                                backgroundColor: "#816A91",
                                padding: "1.25rem 1.625rem",
                                display: "flex",
                                minWidth: "28.5rem",
                                minHeight: "10.625rem",
                              }}
                            >
                              <Box
                                sx={{
                                  borderRight: "1px solid white",
                                  paddingRight: "12px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {/* <Typography
                                sx={{
                                  fontSize: "1.813rem",
                                  fontWeight: "bold",
                                }}
                              >
                                Plans
                              </Typography> */}

                                <Typography
                                  sx={{
                                    fontSize: "0.938rem",
                                    marginTop: "8px",
                                  }}
                                >
                                  SERB plans give you drones, flights and more.
                                  Subscribe to your favorite plan and enjoy the
                                  best offers
                                </Typography>

                                <div className="mt-auto">
                                  <span className="text-[#17FFF6] text-[0.938rem] mt-4 underline cursor-pointer">
                                    <Link
                                      key="plans"
                                      href="/enterprise-section/EnterprisePlans"
                                    >
                                      Go to Plans
                                    </Link>
                                  </span>
                                </div>
                              </Box>
                              <Box sx={{ paddingLeft: "12px" }} py={3}>
                                <ul className="whitespace-nowrap space-y-3 text-base font-bold">
                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link
                                      key="Osfur"
                                      href="/enterprise-section/LargeEnterprise"
                                    >
                                      Large
                                    </Link>
                                  </li>
                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link
                                      key="nawras"
                                      href="/enterprise-section/SmeEnterprises"
                                    >
                                      SME
                                    </Link>
                                  </li>

                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link
                                      key="haitham"
                                      href="/enterprise-section/Governments"
                                    >
                                      Government
                                    </Link>
                                  </li>
                                </ul>
                              </Box>
                            </Box>
                          </Typography>
                        </Box>
                      ) : (
                        <Box sx={{ position: "relative" }}>
                          <Typography
                            className={`dropdownBtn1 h-full ${
                              isHovered ? "hovered" : ""
                            }`}
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
                                background:
                                  "#816A91 0% 0% no-repeat padding-box",
                              },
                              "@media (max-width: 1110px)": {
                                padding: "1.5rem 0.938rem",
                              },
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link key="plans" href="/plans">
                              Plans
                            </Link>
                            <Box
                              className="dropdownContent1"
                              sx={{
                                backgroundColor: "#816A91",
                                padding: "1.25rem 1.625rem",
                                display: "flex",
                                minWidth: "28.5rem",
                                minHeight: "10.625rem",
                              }}
                            >
                              <Box
                                sx={{
                                  borderRight: "1px solid white",
                                  paddingRight: "12px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {/* <Typography
                                sx={{
                                  fontSize: "1.813rem",
                                  fontWeight: "bold",
                                }}
                              >
                                Plans
                              </Typography> */}

                                <Typography
                                  sx={{
                                    fontSize: "0.938rem",
                                    marginTop: "8px",
                                  }}
                                >
                                  SERB plans give you drones, flights and more.
                                  Subscribe to your favorite plan and enjoy the
                                  best offers
                                </Typography>

                                <div className="mt-auto">
                                  <span className="text-[#17FFF6] text-[0.938rem] mt-4 underline cursor-pointer">
                                    <Link key="plans" href="/plans">
                                      Go to Plans
                                    </Link>
                                  </span>
                                </div>
                              </Box>

                              <Box sx={{ paddingLeft: "12px" }} py={3}>
                                <ul className="whitespace-nowrap space-y-3 text-base font-bold">
                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link key="Osfur" href="/plans/osfur">
                                      Osfur
                                    </Link>
                                  </li>
                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link key="nawras" href="/plans/nawras">
                                      Nawras
                                    </Link>
                                  </li>

                                  <li className="hover:text-gray-300 transition-all duration-300">
                                    <Link key="haitham" href="/plans/haitham">
                                      Al Haitham
                                    </Link>
                                  </li>
                                </ul>
                              </Box>
                            </Box>
                          </Typography>
                        </Box>
                      )}
                      {!isEnterpriseSection && (
                        <Box sx={{ position: "relative" }}>
                          <Typography
                            className="dropdownBtn1 h-full"
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
                                background:
                                  "#816A91 0% 0% no-repeat padding-box",
                              },
                              "@media (max-width: 1110px)": {
                                padding: "1.5rem 0.938rem",
                              },
                            }}
                          >
                            <Link key="add-on" href="/add-ons">
                              Add-Ons
                            </Link>
                            <Box
                              className="dropdownContent1"
                              sx={{
                                backgroundColor: "#816A91",
                                padding: "1.25rem 1.625rem",
                                display: "flex",
                                minWidth: "28.5rem",
                                minHeight: "10.625rem",
                              }}
                            >
                              <Box
                                sx={{
                                  // borderRight: "1px solid white",
                                  paddingRight: "52px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {/* <Typography
                                sx={{
                                  fontSize: "1.813rem",
                                  fontWeight: "bold",
                                }}
                              >
                                Add-Ons
                              </Typography> */}

                                <Typography
                                  sx={{
                                    fontSize: "0.938rem",
                                    marginTop: "8px",
                                    marginBottom: "16px",
                                  }}
                                >
                                  SERB add-ons give you drones, flights and
                                  more. Add your favorite add-on and enjoy the
                                  best offers
                                </Typography>

                                <div className="mt-auto">
                                  <a
                                    href="/add-ons"
                                    key="add-ons"
                                    className="text-[#17FFF6] text-[0.938rem] mt-4 underline cursor-pointer"
                                  >
                                    Go to Add-Ons
                                  </a>
                                </div>
                              </Box>
                            </Box>
                          </Typography>
                        </Box>
                      )}
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          className="dropdownBtn1 h-full"
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
                            "@media (max-width: 1110px)": {
                              padding: "1.5rem 0.938rem",
                            },
                          }}
                        >
                          <Link key="about" href="/about">
                            About Us
                          </Link>
                          <Box
                            className="dropdownContent1"
                            sx={{
                              backgroundColor: "#816A91",
                              padding: "1.25rem 1.625rem",
                              display: "flex",
                              // minWidth: "28.5rem",
                            }}
                          >
                            <Box
                              sx={{
                                borderRight: "1px solid white",
                                paddingRight: "12px",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {/* <Typography
                                sx={{
                                  fontSize: "1.813rem",
                                  fontWeight: "bold",
                                }}
                              >
                                About Us
                              </Typography> */}

                              <Typography
                                sx={{
                                  fontSize: "0.938rem",
                                  marginTop: "8px",
                                  minWidth: "20rem",
                                  "@media (max-width: 1110px)": {
                                    minWidth: "16rem",
                                  },
                                }}
                              >
                                Add your favorite add-on <br /> and enjoy the
                                best offers
                              </Typography>

                              <div className="mt-auto">
                                <a
                                  key="about"
                                  href="/about"
                                  className="text-[#17FFF6] text-[0.938rem] mt-4 underline cursor-pointer"
                                >
                                  Go to About Us
                                </a>
                              </div>
                            </Box>

                            <Box sx={{ paddingLeft: "12px" }} py={3}>
                              <ul className="whitespace-nowrap space-y-3 text-base font-bold">
                                <li className="hover:text-gray-300 transition-all duration-300">
                                  <Link href="/about">Who we are</Link>
                                </li>
                                <li className="hover:text-gray-300 transition-all duration-300">
                                  <Link href="/about">What we do</Link>
                                </li>
                                <li className="hover:text-gray-300 transition-all duration-300">
                                  <Link href="/news">Articles</Link>
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          className="dropdownBtn1 h-full"
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
                            "@media (max-width: 1110px)": {
                              padding: "1.5rem 0.625rem",
                            },
                          }}
                        >
                          <Link key="careers" href="/careers">
                            Careers
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          className="dropdownBtn1 h-full"
                          variant="h6"
                          textAlign="center"
                          sx={{
                            color: "#fff",
                            fontSize: "1rem",
                            lineHeight: "0.875rem",
                            fontWeight: "500",
                            marginRight: "5px",
                            cursor: "pointer",
                            padding: "1rem 1rem",
                            transition: "all",
                            backgroundColor: "rgb(230, 90, 44)",
                            borderRadius: "10px",
                            transitionDuration: "0.2s",
                            ":hover": {
                              background: "#816A91 0% 0% no-repeat padding-box",
                            },
                            "@media (max-width: 1110px)": {
                              padding: "1.5rem 0.625rem",
                            },
                          }}
                        >
                          <Link key="register" href="/auth/register">
                            Register
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{
                            color: "#fff",
                            fontSize: "1rem",
                            lineHeight: "0.875rem",
                            fontWeight: "500",
                            marginRight: "5px",
                            cursor: "pointer",
                            padding: "1rem 1rem",
                            transition: "all",
                            backgroundColor: "rgb(230, 90, 44)",
                            borderRadius: "10px",
                            transitionDuration: "0.2s",
                            ":hover": {
                              background: "#816A91 0% 0% no-repeat padding-box",
                            },
                            "@media (max-width: 1110px)": {
                              padding: "1.5rem 0.625rem",
                            },
                          }}
                        >
                          <Link key="login" href="/auth/login">
                            Login
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative" }}>
                        {user !== null &&
                        user.pilot_detail &&
                        user.pilot_detail.firstName ? (
                          <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                              cursor: "pointer",
                              padding: "0.5rem 0.75rem",
                            }}
                          >
                            <Link href="">
                              <Typography
                                sx={{
                                  color: "#fff",
                                  fontSize: "1.125rem",
                                  lineHeight: "0.875rem",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  paddingX: "20px",
                                  height: "48px",
                                  background: "#FF0059",
                                  borderRadius: "6px",
                                  transition: "all",
                                  transitionDuration: "0.2s",
                                  ":hover": {
                                    background: "#c74545",
                                  },
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                myserb
                              </Typography>
                            </Link>
                          </Typography>
                        ) : null}
                      </Box>
                      {/* TODO for backend: Can be used when user is authenticated */}
                      <Box
                        sx={{
                          flexGrow: 0,
                          marginY: "auto",
                        }}
                      >
                        <IconButton onClick={handleOpenUserMenu}>
                          <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                              color: "#fff",
                              fontSize: "1.125rem",
                              lineHeight: "0.875rem",
                              fontWeight: "500",
                              cursor: "pointer",
                              marginX: "8px",
                              // paddingX: "4px",
                              transition: "all",
                              transitionDuration: "0.2s",
                              "@media (max-width: 1110px)": {
                                // paddingX: "24px 10px",
                              },
                            }}
                          >
                            {user !== null &&
                            user.pilot_detail &&
                            user.pilot_detail.firstName
                              ? user.pilot_detail.firstName
                              : null}
                          </Typography>
                          {user !== null &&
                          user.pilot_detail &&
                          user.pilot_detail.image !== null ? (
                            <Avatar
                              alt="Danny Sharp"
                              src={
                                user !== null &&
                                user.pilot_detail &&
                                user.pilot_detail.image !== null
                                  ? `${user.pilot_detail.image.url}`
                                  : "/imgs/profile.png"
                              }
                            />
                          ) : null}
                        </IconButton>
                        <Menu
                          sx={{ mt: "3.75rem" }}
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
                          disableScrollLock={true}
                          PaperProps={{
                            sx: {
                              backgroundColor: "#F8F8F8",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "8px",
                            }}
                          >
                            <MenuItem
                              onClick={() => {
                                router.push("/me");
                                handleCloseUserMenu();
                              }}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "rgba(75, 1, 119, 0.2)", // Change hover background color
                                },
                                "&:active": {
                                  backgroundColor: "rgba(75, 1, 119, 0.2)", // Change tap/active background color
                                },
                                transition: "all 0.2s ease-in-out",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                gap: "0.1rem",
                              }}
                            >
                              <img
                                src="/images/settings.svg"
                                alt=""
                                className="mr-[0.5rem] h-4"
                              />
                              {/* <SettingsIcon sx={{ marginRight: "0.5rem" }} /> */}
                              <p className="text-sm">Settings</p>
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleClick();
                                handleCloseUserMenu();
                              }}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "rgba(75, 1, 119, 0.2)", // Change hover background color
                                },
                                "&:active": {
                                  backgroundColor: "rgba(75, 1, 119, 0.2)", // Change tap/active background color
                                },
                                transition: "all 0.2s ease-in-out",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                gap: "0.1rem",
                              }}
                            >
                              <img
                                src="/images/sign-out.svg"
                                alt=""
                                className="mr-[0.5rem] h-[13px]"
                              />
                              {/* <ExitToAppIcon sx={{ marginRight: "0.5rem" }} /> */}
                              <p className="text-sm">Sign Out</p>
                            </MenuItem>
                          </Box>
                        </Menu>
                      </Box>
                    </Box>
                  ) : (
                    // Authenticated user: show user menu
                    <Box
                      sx={{
                        flexGrow: 0,
                        marginY: "auto",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {/* <SubNav user={user} /> */}
                      <IconButton onClick={handleOpenUserMenu}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{
                            color: "#fff",
                            fontSize: "1.125rem",
                            lineHeight: "0.875rem",
                            fontWeight: "500",
                            cursor: "pointer",
                            marginRight: "8px",
                            // paddingX: "4px",
                            transition: "all",
                            transitionDuration: "0.2s",
                            "@media (max-width: 1110px)": {
                              // paddingX: "24px 10px",
                            },
                          }}
                        >
                          {user !== null &&
                          user.pilot_detail &&
                          user.pilot_detail.firstName !== null
                            ? `${user.pilot_detail.firstName}`
                            : user?.username}
                        </Typography>
                        <Avatar
                          alt="Danny Sharp"
                          src={
                            user !== null &&
                            user.pilot_detail &&
                            user.pilot_detail.image !== null
                              ? `${user.pilot_detail.image.url}`
                              : "/imgs/profile.png"
                          }
                        />
                      </IconButton>

                      <Menu
                        sx={{ mt: "60px" }}
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
                        disableScrollLock={true}
                        PaperProps={{
                          sx: {
                            backgroundColor: "#F8F8F8",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0.5rem 3rem 1.5rem",
                          }}
                        >
                          <Avatar
                            alt="Profile"
                            src={
                              user !== null &&
                              user.pilot_detail &&
                              user.pilot_detail.image !== null
                                ? `${user.pilot_detail.image.url}`
                                : "/imgs/profile.png"
                            }
                            sx={{
                              border: "1px solid #000000",
                              height: "5.875rem",
                              width: "5.875rem",
                            }}
                          />
                          <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                              color: "#000000",
                              fontSize: "1.125rem",
                              fontWeight: "700",
                              marginTop: "0.5rem",
                              lineHeight: "1.688rem",
                            }}
                          >
                            {user !== null &&
                            user.pilot_detail &&
                            user.pilot_detail.firstName !== null &&
                            user.pilot_detail.lastName !== null
                              ? `${user.pilot_detail.firstName} ${user.pilot_detail.lastName}`
                              : user?.username}
                          </Typography>
                          <Typography
                            variant="body2"
                            textAlign="center"
                            sx={{ color: "#000000", fontSize: "0.813rem" }}
                          >
                            {/* Modify this condition to check for the license type */}
                            {user !== null &&
                            user.pilot_detail &&
                            user.pilot_detail.licenseDetails !== null
                              ? `${user.pilot_detail.licenseDetails.category} - ${user.pilot_detail.licenseDetails.licenseNumber}`
                              : "license Type"}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "8px",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              router.push("/me");
                              handleCloseUserMenu();
                            }}
                            sx={{
                              "&:hover": {
                                backgroundColor: "rgba(75, 1, 119, 0.2)", // Change hover background color
                              },
                              "&:active": {
                                backgroundColor: "rgba(75, 1, 119, 0.2)", // Change tap/active background color
                              },
                              transition: "all 0.2s ease-in-out",
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "0.1rem",
                            }}
                          >
                            <img
                              src="/images/settings.svg"
                              alt=""
                              className="mr-[0.5rem] h-4"
                            />
                            {/* <SettingsIcon sx={{ marginRight: "0.5rem" }} /> */}
                            Settings
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClick();
                              handleCloseUserMenu();
                            }}
                            sx={{
                              "&:hover": {
                                backgroundColor: "rgba(75, 1, 119, 0.2)", // Change hover background color
                              },
                              "&:active": {
                                backgroundColor: "rgba(75, 1, 119, 0.2)", // Change tap/active background color
                              },
                              transition: "all 0.2s ease-in-out",
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "0.1rem",
                            }}
                          >
                            <img
                              src="/images/sign-out.svg"
                              alt=""
                              className="mr-[0.5rem] h-[13px]"
                            />
                            {/* <ExitToAppIcon sx={{ marginRight: "0.5rem" }} /> */}
                            Sign Out
                          </MenuItem>
                        </Box>
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
              backgroundColor: "rgba(111, 55, 144, 0.95)",
              color: "#fff",
              width: "500px",
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
