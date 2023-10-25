import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";

const SideNav = () => {
  const router = useRouter();

  const settings = [
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/admin" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="Dashboard"
    >
      <Typography
        variant="h6"
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineStyleIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/admin">Dashboard</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/admin/all-courses" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="Training Courses"
    >
      <Typography
        variant="h6"
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DashboardCustomizeIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/admin/all-courses">Training Courses</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/admin/applicants" ? "#ddd" : "",
        color: "#2A5D9F",

        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="Applicants"
    >
      <Typography
        variant="h6"
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InsertDriveFileIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/admin/applicants">Applicants</Link>
      </Typography>
    </MenuItem>,
  ];

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        paddingY: "5rem",
        width: "100%",
        backgroundColor: "#fff",
        color: "#686868",
        height: "100%",
      }}
    >
      <MenuList id="menu-appbar">
        {settings}
        {/* {settings} */}
      </MenuList>
    </Box>
  );
};

export default SideNav;
