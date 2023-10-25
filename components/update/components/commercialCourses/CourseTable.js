import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from "react-moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GppBadIcon from "@mui/icons-material/GppBad";

import Loading from "..//layouts/Loading";
import Error from "../layouts/Error";

const fetchDetails = async (page) => {
  const { data } = await axios(
    `${
      process.env.NEXT_PUBLIC_SERVER_URL
    }commercial-courses/?filters[pilot_details][user][id][$eq]=${
      JSON.parse(localStorage.getItem("user")).id
    }&populate=*`
  );
  return data;
};

const CourseTable = ({ id }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [courses, setCourses] = useState(0);

  const onSuccess = (data) => {
    console.log({ trainingCenter: data });
    console.log(data[0]);
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
  } = useQuery(["details", page], () => fetchDetails(page, id), {
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
  });

  return !loading && !errors ? (
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
          sx={{
            borderRadius: "25px",
            padding: "1rem",
            boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.55)",
          }}
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
                  Title
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Start Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length > 0 &&
                courses.map(({ attributes: row }, i) => (
                  <TableRow
                    key={i}
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
                      {row.training_center_detail.data.attributes.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      <Moment>{row.startDate}</Moment>
                    </TableCell>
                  </TableRow>
                ))}
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
  ) : !loading && errors ? (
    <Error
      status={500}
      message="there is something wrong please try again later"
    />
  ) : (
    <Loading />
  );
};

export default CourseTable;
