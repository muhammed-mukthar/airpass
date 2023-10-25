import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import QuizIcon from "@mui/icons-material/Quiz";

const GodAdminSideNav = () => {
  const router = useRouter();

  const settings = [
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/dashboard" ? "#ddd" : "",
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
        <Link href="/god-admin/dashboard">Dashboard</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/notifications" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="notifications"
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
        <Link href="/god-admin/notifications">Notifications</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/pilots" ? "#ddd" : "",
        color: "#2A5D9F",

        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="pilots"
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
        <PeopleIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/pilots">Pilots</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/questions-bank" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="questions bank"
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
        <QuestionAnswerIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/questions-bank">Questions Bank</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/information-material" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="information material"
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
        <QuestionAnswerIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/information-material">Information Material</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/tests" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="tests"
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
        <QuizIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/tests">Generated Tests</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/training-center" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="training center"
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
        <WarehouseIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/training-center">Training Centers</Link>
      </Typography>
    </MenuItem>,
    <MenuItem
      sx={{
        fontSize: "20px",
        fontWeight: "500",
        paddingY: "10px",
        background: router.route == "/god-admin/reports" ? "#ddd" : "",
        color: "#2A5D9F",
        borderBottom: "1px solid #2A5D9F",
        paddingY: "1rem",
      }}
      key="reports"
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
        <SettingsIcon sx={{ marginRight: ".5rem" }} />
        <Link href="/god-admin/reports">Reports</Link>
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

export default GodAdminSideNav;
