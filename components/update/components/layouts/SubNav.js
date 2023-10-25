import { Box, Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SubNav = ({ user }) => {
  const router = useRouter();
  console.log("user from subNav", user?.userOrders);
  console.log(
    "user check for commercial with course",
    user?.userOrders?.services.courses
  );
  return (
    user !== null && (
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #ddd",
          marginBottom: "23px",
        }}
      >
        <Container
          fixed
          style={{
            display: "flex",
            justifyContent: "left",
            columnGap: "20px",
            paddingLeft: "0",
          }}
        >
          <Link href="/">
            <a
              className="subNavLink"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: router.pathname === "/" ? "#E65A2C" : "",
                borderBottom:
                  router.pathname === "/" ? "1px solid #E65A2C" : "none",
                padding: "10px 0 10px 0",
                position: "relative",
                top: "1px",
              }}
            >
              Welcome
            </a>
          </Link>
          {user?.role.name === "Commercial-User" &&
          user?.userOrders?.services.courses.hasOwnProperty("isActive") ? (
            <>
              <Link href="/commercial-courses">
                <a
                  className="subNavLink"
                  style={{
                    color:
                      router.pathname === "/commercial-courses"
                        ? "#E65A2C"
                        : "",
                    borderBottom:
                      router.pathname === "/commercial-courses"
                        ? "1px solid #E65A2C"
                        : "none",
                    padding: "10px 0 10px 0",
                    position: "relative",
                    top: "1px",
                  }}
                >
                  Courses
                </a>
              </Link>
              <Link href="/videos">
                <a
                  className="subNavLink"
                  style={{
                    color: router.pathname === "/videos" ? "#E65A2C" : "",
                    borderBottom:
                      router.pathname === "/videos"
                        ? "1px solid #E65A2C"
                        : "none",
                    padding: "10px 0 10px 0",
                    position: "relative",
                    top: "1px",
                  }}
                >
                  Knowledge videos
                </a>
              </Link>
            </>
          ) : (
            <Link href="/videos">
              <a
                className="subNavLink"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: router.pathname === "/videos" ? "#E65A2C" : "",
                  borderBottom:
                    router.pathname === "/videos"
                      ? "1px solid #E65A2C"
                      : "none",
                  padding: "10px 0 10px 0",
                  position: "relative",
                  top: "1px",
                }}
              >
                Courses
              </a>
            </Link>
          )}

          {user?.role.name === "Commercial-User" &&
          user?.userOrders?.services.courses.hasOwnProperty("isActive") ? (
            <Link
              href={
                user?.pilot_detail?.licenseStatus === "pending" ||
                user?.pilot_detail?.licenseStatus === "passed"
                  ? user?.tests?.length > 0
                    ? user.tests[0]?.answers !== null &&
                      user.tests[0]?.answers.score >=
                        user.tests[0]?.answers.required_score
                      ? {}
                      : "/pre-questions"
                    : "/pre-questions"
                  : {}
              }
              prefetch={
                user?.pilot_detail?.licenseStatus === "pending" ||
                user?.pilot_detail?.licenseStatus === "passed"
                  ? user?.tests?.length > 0
                    ? user.tests[0]?.answers !== null &&
                      user.tests[0]?.answers.score >=
                        user.tests[0]?.answers.required_score
                      ? false
                      : true
                    : true
                  : false
              }
            >
              <a
                className={
                  user?.pilot_detail?.licenseStatus === "pending" ||
                  user?.pilot_detail?.licenseStatus === "passed"
                    ? user?.tests?.length > 0
                      ? user.tests[0]?.answers !== null &&
                        user.tests[0]?.answers.score >=
                          user.tests[0]?.answers.required_score
                        ? ""
                        : "subNavLink"
                      : "subNavLink"
                    : ""
                }
                onClick={(e) =>
                  user?.pilot_detail?.licenseStatus === "pending" ||
                  user?.pilot_detail?.licenseStatus === "passed"
                    ? user?.tests?.length > 0
                      ? user.tests[0]?.answers !== null &&
                        user.tests[0]?.answers.score >=
                          user.tests[0]?.answers.required_score
                        ? e.preventDefault()
                        : null
                      : null
                    : e.preventDefault()
                }
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color:
                    router.pathname === "/pre-questions" ||
                    router.pathname === "/questions/[id]" ||
                    router.pathname === "/success/[testId]"
                      ? "#E65A2C"
                      : user?.pilot_detail?.licenseStatus === "pending" ||
                        user?.pilot_detail?.licenseStatus === "passed"
                      ? user?.tests?.length > 0
                        ? user.tests[0]?.answers !== null &&
                          user.tests[0]?.answers.score >=
                            user.tests[0]?.answers.required_score
                          ? "#818181"
                          : ""
                        : ""
                      : "#818181",
                  borderBottom:
                    router.pathname === "/pre-questions" ||
                    router.pathname === "/questions[id]" ||
                    router.pathname === "/success/[testId]"
                      ? "1px solid #E65A2C"
                      : "none",
                  padding: "10px 0 10px 0",
                  position: "relative",
                  top: "1px",
                  cursor:
                    user?.pilot_detail?.licenseStatus === "pending" ||
                    user?.pilot_detail?.licenseStatus === "passed"
                      ? user?.tests?.length > 0
                        ? user.tests[0]?.answers !== null &&
                          user.tests[0]?.answers.score >=
                            user.tests[0]?.answers.required_score
                          ? "not-allowed"
                          : "pointer"
                        : "pointer"
                      : "not-allowed",
                }}
              >
                Exam
              </a>
            </Link>
          ) : (
            <Link href="/pre-questions">
              <a
                className="subNavLink"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color:
                    router.pathname === "/pre-questions" ||
                    router.pathname === "/questions/[id]" ||
                    router.pathname === "/success/[testId]"
                      ? "#E65A2C"
                      : "",
                  borderBottom:
                    router.pathname === "/pre-questions" ||
                    router.pathname === "/questions[id]" ||
                    router.pathname === "/success/[testId]"
                      ? "1px solid #E65A2C"
                      : "none",
                  padding: "10px 0 10px 0",
                  position: "relative",
                  top: "1px",
                }}
              >
                Test
              </a>
            </Link>
          )}

          {user?.role.name === "Commercial-User" &&
          user?.userOrders?.services.courses.hasOwnProperty("isActive") ? (
            <Link
              href={
                (user?.pilot_detail?.licenseStatus === "pending" ||
                  user?.pilot_detail?.licenseStatus === "passed") &&
                user?.tests?.length > 0 &&
                user.tests[0]?.answers !== null &&
                user.tests[0]?.answers.score >=
                  user.tests[0]?.answers.required_score
                  ? "/license-generation"
                  : {}
              }
              prefetch={
                (user?.pilot_detail?.licenseStatus === "pending" ||
                  user?.pilot_detail?.licenseStatus === "passed") &&
                user?.tests?.length > 0 &&
                user.tests[0]?.answers !== null &&
                user.tests[0]?.answers.score >=
                  user.tests[0]?.answers.required_score
                  ? true
                  : false
              }
            >
              <a
                className={
                  (user?.pilot_detail?.licenseStatus === "pending" ||
                    user?.pilot_detail?.licenseStatus === "passed") &&
                  user?.tests?.length > 0 &&
                  user.tests[0]?.answers !== null &&
                  user.tests[0]?.answers.score >=
                    user.tests[0]?.answers.required_score
                    ? "subNavLink"
                    : ""
                }
                onClick={(e) =>
                  (user?.pilot_detail?.licenseStatus === "pending" ||
                    user?.pilot_detail?.licenseStatus === "passed") &&
                  user?.tests?.length > 0 &&
                  user.tests[0]?.answers !== null &&
                  user.tests[0]?.answers.score >=
                    user.tests[0]?.answers.required_score
                    ? null
                    : e.preventDefault()
                }
                style={{
                  color:
                    router.pathname === "/license-generation"
                      ? "#E65A2C"
                      : (user?.pilot_detail?.licenseStatus === "pending" ||
                          user?.pilot_detail?.licenseStatus === "passed") &&
                        user?.tests?.length > 0 &&
                        user.tests[0]?.answers !== null &&
                        user.tests[0]?.answers.score >=
                          user.tests[0]?.answers.required_score
                      ? ""
                      : "#818181",
                  borderBottom:
                    router.pathname === "/license-generation"
                      ? "1px solid #E65A2C"
                      : "none",
                  padding: "10px 0 10px 0",
                  position: "relative",
                  top: "1px",
                  cursor:
                    (user?.pilot_detail?.licenseStatus === "pending" ||
                      user?.pilot_detail?.licenseStatus === "passed") &&
                    user?.tests?.length > 0 &&
                    user.tests[0]?.answers !== null &&
                    user.tests[0]?.answers.score >=
                      user.tests[0]?.answers.required_score
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                AirPass License
              </a>
            </Link>
          ) : (
            <Link
              href={user?.pilot_detail !== null ? "license-generation" : {}}
              prefetch={user?.pilot_detail !== null ? false : true}
            >
              <a
                className={user?.pilot_detail !== null ? "subNavLink" : ""}
                onClick={(e) =>
                  user?.pilot_detail !== null ? null : e.preventDefault()
                }
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color:
                    router.pathname === "/license-generation"
                      ? "#E65A2C"
                      : user?.pilot_detail !== null
                      ? "#9F9F9F"
                      : "#818181",
                  borderBottom:
                    router.pathname === "/license-generation"
                      ? "1px solid #E65A2C"
                      : user?.pilot_detail !== null && "none",
                  padding: "10px 0 10px 0",
                  position: "relative",
                  top: "1px",
                  cursor:
                    user?.pilot_detail !== null ? "pointer" : "not-allowed",
                }}
              >
                AirPass License
              </a>
            </Link>
          )}
          <Link
            href={
              user?.pilot_detail?.licenseStatus !== null
                ? `${
                    process.env.NEXT_PUBLIC_TAHLEEQ_URL
                  }?token=${localStorage.getItem("token")}`
                : {}
            }
            prefetch={user?.pilot_detail?.licenseStatus !== null ? false : true}
          >
            <a
              className={
                user?.pilot_detail?.licenseStatus !== null ? "subNavLink" : ""
              }
              onClick={(e) =>
                user?.pilot_detail?.licenseStatus !== null
                  ? null
                  : e.preventDefault()
              }
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color:
                  router.pathname === "/license-generation"
                    ? "#E65A2C"
                    : user?.pilot_detail !== null
                    ? ""
                    : "#818181",
                borderBottom:
                  router.pathname === "/license-generation"
                    ? "1px solid #E65A2C"
                    : user?.pilot_detail !== null && "none",
                padding: "10px 0 10px 0",
                position: "relative",
                top: "1px",
                cursor:
                  user?.pilot_detail?.licenseStatus !== null
                    ? "pointer"
                    : "not-allowed",
              }}
            >
              GO TO Map
            </a>
          </Link>
        </Container>
      </Box>
    )
  );
};

export default SubNav;
