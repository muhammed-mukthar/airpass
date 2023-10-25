import React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";

const TopNav = () => {
  const router = useRouter();
  console.log(router);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/admin/auth/login");
  };

  const handleClick = () => {
    console.log(router);

    router.replace("/admin/settings");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <SearchIcon sx={{ color: "#2A5D9F", marginX: ".5rem" }} /> */}
        <PersonIcon
          sx={{ color: "#2A5D9F", marginX: ".5rem" }}
          onClick={handleClick}
        />
        <LogoutIcon
          sx={{ color: "#2A5D9F", marginX: ".5rem", cursor: "pointer" }}
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
};

export default TopNav;
