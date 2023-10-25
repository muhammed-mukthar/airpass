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

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GppBadIcon from "@mui/icons-material/GppBad";

import Loading from "..//layouts/Loading";
import Error from "../layouts/Error";
import Link from "next/link";
import Moment from "react-moment";

const fetchTests = async (page, id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}tests/?populate=*&filters[user]=${id}&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=10`
  );
  return data;
};

const TrainingCenterTable = ({ id }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [trainingCenters, setTrainingCenters] = useState(0);

  const onSuccess = (data) => {
    console.log({ trainingCenter: data });
    console.log(data[0]);
    setTotalPages(data.meta ? data?.meta.pagination.pageCount : 1);
    setTrainingCenters(data.data);
  };

  const onError = (error) => {
    console.log({ error });
  };

  const {
    isLoading: loading,
    data,
    isError: errors,
    error,
  } = useQuery(["tests", page], () => fetchTests(page, id), {
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
                  Test ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Finishing Time
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Score
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Required Score
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
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingCenters.length > 0 &&
                trainingCenters.map(({ attributes: row, id }, i) => (
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
                      <Link href={`/success/${id}`}>{row.test}</Link>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.details.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.answers?.finishedTime
                        ? new Date(row.answers?.finishedTime)
                            .toISOString()
                            .slice(11, 19)
                        : ""}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.answers?.score}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.details?.required_score}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.answers?.score >= row.answers?.required_score ? (
                        <VerifiedUserIcon color="success" />
                      ) : (
                        <GppBadIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      <Moment format="MM/DD/YYYY HH:MM">{row.createdAt}</Moment>
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

export default TrainingCenterTable;
