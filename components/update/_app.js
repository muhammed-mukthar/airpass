import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import moment from "moment";

import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import GodAdminSideNav from "./godAdmin/sideNav";
import TopNav from "./TopNav";
import Loading from "./Loading";
import axios from "axios";
import Footer from "./Footer";
import SubNav from "./SubNav";

const Layout = (props) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isGodAdmin, setIsGodAdmin] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setIsAdmin(router.pathname.split("/").includes("admin"));
    setIsGodAdmin(router.pathname.split("/").includes("god-admin"));
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [props.children]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}users/me?populate[pilot_detail][populate][0]=image&populate[account_type][populate][1]=*&populate[tests][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (
          !router.pathname.split("/").includes("admin") &&
          !router.pathname.split("/").includes("god-admin")
        ) {
          const { data: userOrders } = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}packages/userOrders?user_id=${
              data.id
            }&package_id=${data.package_id}&payment_id=${data.payment_id || 0}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log("userOrders from layout component:", userOrders);
          const orderedTests = data.tests.sort(
            (a, b) =>
              moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf()
          );

          setUser({ ...data, tests: orderedTests, userOrders: userOrders });
        } else {
          const orderedTests = data.tests.sort(
            (a, b) =>
              moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf()
          );

          setUser({ ...data, tests: orderedTests });
        }
        localStorage.setItem("user", JSON.stringify(data));
      } catch (err) {
        console.log({ err });
        setLoading(false);
      }
    };
    // if (user == null) {
    console.log({ user });
    setLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchUser();
    setLoading(false);
    // }
    if (token !== null)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else if (token == null)
      delete axios.defaults.headers.common["Authorization"];

    console.log("user after all calls from layout component", user);
  }, [token, props.children]);

  if (isAdmin && token) {
    return (
      <>
        <Box sx={{ paddingX: "0px", minWidth: "100%", display: "flex" }}>
          <Box
            sx={{
              paddingX: "0px",
              position: "relative",
              minHeight: "100vh",
              maxWidth: "25%",
              minWidth: "25%",
              color: "#fff",
              textAlign: "center",
              paddingY: "0px",
            }}
          >
            <SideNav />
          </Box>
          <Box sx={{ padding: "0rem", position: "relative", flexGrow: "1" }}>
            <TopNav />
            <Box
              sx={{
                padding: "2rem",
                paddingX: "3rem",
                backgroundColor: "#ddd",
              }}
            >
              {!loading ? props.children : <Loading />}
            </Box>
          </Box>
        </Box>
      </>
    );
  } else if (isAdmin && !token && !loading) {
    return (
      <Box sx={{ paddingX: "0px", minWidth: "100%", display: "flex" }}>
        {props.children}
      </Box>
    );
  }

  if (isGodAdmin && !loading) {
    return (
      <>
        <Box sx={{ paddingX: "0px", minWidth: "100%", display: "flex" }}>
          <Box
            sx={{
              paddingX: "0px",
              position: "relative",
              minHeight: "100vh",
              maxWidth: "25%",
              minWidth: "25%",
              color: "#fff",
              textAlign: "center",
              paddingY: "0px",
            }}
          >
            <GodAdminSideNav />
          </Box>
          <Box sx={{ padding: "0rem", position: "relative", flexGrow: "1" }}>
            <TopNav />
            <Box
              sx={{
                padding: "2rem",
                paddingX: "3rem",
                backgroundColor: "#ddd",
              }}
            >
              {!loading ? props.children : <Loading />}
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  return (
    !loading && (
      <>
        <Navbar authenticated={token !== null ? true : false} user={user} />
        <SubNav user={user} />
        <Box
          sx={{
            position: "relative",
            maxWidth: "1536px",
            margin: "auto",
            minHeight: "calc(100vh - 23.2vh)",
          }}
        >
          {!loading ? props.children : <Loading />}
        </Box>
        <Footer />
      </>
    )
  );
};

export default Layout;
