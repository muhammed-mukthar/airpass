import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import logo from "../../public/images/white logo.svg";
import styles from "../../../../styles/top-banner.module.css"

const pages = ["Products", "Pricing", "Blog"];
let settings;

const Navbar = ({ authenticated, user }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

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
      <Link key="login" href="/auth/login">
        <a style={{ fontWeight: "bold" }}>Login</a>
      </Link>,
      <Link key="register" href="/auth/register">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E65A2C",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "#E65A2C",
              color: "#fff",
              WebkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
              MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
              boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
            },
          }}
        >
          Register Now
        </Button>
      </Link>,
    ];
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <div className="relative flex flex-col justify-center items-center gap-1">
      <div className={`absolute ${styles.top_banner} z-10 top-0 w-full`}>
        <div className="flex justify-between items-center w-full max-w-[88.375rem] px-6 mx-auto">
          <div className="flex gap-4 justify-between items-center">
            <button className="font-semibold">Pilot</button>
            <button className="font-semibold">Enterprise</button>
          </div>

          <div>
            <button className="font-medium">English</button>
            <span className={` ${styles.vertical_line}`}></span>
            <button className="font-medium">عربي</button>
          </div>
        </div>
      </div>
    </div>
    <AppBar position="static" sx={{ backgroundColor: "#430073", zIndex: "10", marginTop: "44px" }}>
      <Container fixed style={{ paddingLeft: "0", width: "75%", margin:"0 auto" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              // padding: "12px 0",
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
              <Image src={logo} width={120} height={33} />
            </Typography>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src="/images/SERB logo white.svg" width={100} height={100} />
          </Typography>
          {!authenticated ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: "row",
                columnGap: "20px",
              }}
            >
              {settings.map((setting, i) => (
                <Typography key={i} variant="h6" textAlign="center">
                  {setting}
                </Typography>
              ))}
            </Box>
          ) : (
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
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default Navbar;
