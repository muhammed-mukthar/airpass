import React, { useState } from "react";
import axios from "axios";

import { useQuery } from "react-query";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Loading from "../../layouts/Loading";

const fetchCourses = async (page) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}pilot-details/?populate[commercial_course][populate][0]=training_center_detail&populate[user][populate][1]=*&populate=*&filters[user][account_type][type][$eq]=commercial-drone-pilot&pagination[page]=${page}&pagination[pageSize]=2`
  );
  return data;
};

const PilotsTable = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [courses, setCourses] = useState([]);

  const onSuccess = (data) => {
    console.log({ data });
    setTotalPages(data.meta ? data?.meta.pagination.pageCount : 1);
    setCourses(data.data);
  };

  const onError = (error) => {
    console.log({ error });
  };

  const {
    isLoading: loading,
    data,
    isError: errors,
    error,
  } = useQuery(["courses", page], () => fetchCourses(page), {
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
  });
  return !loading ? (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          marginY: "2rem",
          borderRadius: "25px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ borderRadius: "25px", padding: "1rem" }}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Training Center
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Course Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Phone
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length > 0
                ? courses.map(({ attributes: course, id }) => (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{
                          color: "#2A5D9F",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        align="left"
                      >
                        {`${course.firstName} ${course.lastName}`}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: course.commercial_course.data
                            ? "#2A5D9F"
                            : "red",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        {course.commercial_course.data
                          ? course.commercial_course.data.attributes
                              .training_center_detail.data.attributes.name
                          : "No Course Yet"}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: course.commercial_course.data
                            ? "#2A5D9F"
                            : "red",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        {course.commercial_course.data
                          ? course.commercial_course.data.attributes.title
                          : "No Course Yet"}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#2A5D9F",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        {course.phone}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#2A5D9F",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        {course.user.data.attributes.email}
                      </TableCell>

                      <TableCell
                        sx={{
                          color: "#2A5D9F",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        {course.licenseStatus}
                      </TableCell>
                    </TableRow>
                  ))
                : "There is no courses right now"}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            placeItems: "center",
            padding: ".3rem",
            marginRight: "15px",
            backgroundColor: "#2A5D9F",
            cursor: "pointer",
          }}
          onClick={(e) => setPage(page === 1 ? 1 : page - 1)}
        >
          <ArrowBackIosNewIcon
            sx={{
              color: "#fff",
              fontSize: "25px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            placeItems: "center",
            padding: ".3rem",
            marginLeft: "2px",
            backgroundColor: "#2A5D9F",
            cursor: "pointer",
          }}
          onClick={(e) => setPage(page < totalPages ? page + 1 : totalPages)}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#fff",
              fontSize: "25px",
            }}
          />
        </Box>
      </Box>
    </>
  ) : (
    <Loading />
  );
};

export default PilotsTable;
