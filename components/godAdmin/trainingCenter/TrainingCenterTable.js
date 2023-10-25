import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";

import Loading from "../../../components/layouts/Loading";
import Error from "../../../components/layouts/Error";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchTrainingCenters = async (page) => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_SERVER_URL}training-center-details?populate=*&pagination[page]=${page}&pagination[pageSize]=2`
  );
  return data;
};

const percentage = (value, total) => Math.round(value / total) * 100;

const TrainingCenterTable = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [trainingCenters, setTrainingCenters] = useState(0);
  const [addNewOpen, setAddNewOpen] = useState(false);
  const [formData, setFormData] = useState({
    logo: null,
    fileName: "",
    fileNames: [],
    documents: null,
    adminName: "",
    email: "",
    phone: "",
    address: {
      houseNo: "",
      wayNo: "",
      city: "",
      government: "",
    },
    name: "",
    password: "",
    username: "",
  });
  const [logoUploadProgress, setLogoUploadProgress] = useState(0);
  const [documentsUploadProgress, setDocumentsUploadProgress] = useState(0);

  const onSuccess = (data) => {
    console.log({ trainingCenter: data });
    console.log(data[0]);
    setTotalPages(data.meta ? data?.meta.pagination.pageCount : 1);
    setTrainingCenters(data.data);
  };

  const onError = (error) => {
    console.log({ error });
  };

  const handleDelete = () => {
    confirm("Are you sure you want to delete this Training Center");
  };

  const handleUpdateStatus = () => {
    confirm(
      "Are you sure you want to update the status of this Training Center"
    );
  };

  const handleOpen = () => setAddNewOpen(true);
  const handleClose = () => setAddNewOpen(false);

  const handleFormDataChange = (e) =>
    setFormData({ ...formData, [`${e.target.name}`]: e.target.value });

  const handelAddressChange = (e) => {
    setFormData({
      ...formData,
      address: { ...formData.address, [`${e.target.name}`]: e.target.value },
    });
  };

  const handleUpload = async (e) => {
    console.log("target value", e.target.value);
    if (e.target.name == "logo") {
      try {
        const data = new FormData();
        if (e.target.name == "logo") {
          data.append("files", e.target.files[0]);
        } else {
          data.append;
        }
        let uploadRes = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}upload`,
          data,
          onUploadProgress: (progress) =>
            setLogoUploadProgress(percentage(progress.loaded, progress.total)),
        });
        console.log(uploadRes);
        toast.success("Logo uploaded successfully");
        setLogoUploadProgress(0);
        setFormData({
          ...formData,
          logo: uploadRes.data[0],
          fileName: e.target.value,
        });
      } catch (err) {
        console.log({ err });
      }
    } else {
      let files = [...e.target.files];
      let documentsResponse = [];
      files.forEach(async (file) => {
        try {
          const data = new FormData();

          data.append("files", file);

          let uploadRes = await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}upload`,
            data,
            onUploadProgress: (progress) =>
              setDocumentsUploadProgress(
                percentage(progress.loaded, progress.total)
              ),
          });
          toast.success("Documents uploaded successfully");
          setDocumentsUploadProgress(0);
          documentsResponse.push(uploadRes.data[0]);
        } catch (err) {
          console.log({ err });
        }
      });
      setFormData({ ...formData, documents: documentsResponse });
    }
  };

  const handleAddNewTrainingCenter = async () => {
    try {
      const trainingCenter = axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}auth/local/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          account_type: "4",
          role: "Training-Center-User",
        }
      );

      const trainingCenterDetails = axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}training-center-details`,
        {
          data: {
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            logo: formData.logo,
            adminName: formData.adminName,
            documents: formData.documents,
          },
        }
      );

      const result = await Promise.all([trainingCenter, trainingCenterDetails]);
      console.log("result", result);

      await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}users/${result[0].data.user.id}`,
        {
          training_center_detail: `${result[1].data.data.id}`,
        }
      );
      toast.success("New Training Center Added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setAddNewOpen(false);
      refetch();
    } catch (err) {
      console.log({ err });
      toast.error("Error Adding New Training Center", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setAddNewOpen(false);
    }
    console.log(formData);
  };

  const {
    isLoading: loading,
    data,
    isError: errors,
    error,
    refetch,
  } = useQuery(["training-centers", page], () => fetchTrainingCenters(page), {
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
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ float: "right", mx: "10px", my: "10px" }}
        >
          {" "}
          <AddIcon />{" "}
        </Button>
        <Modal
          open={addNewOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              borderRadius: "15px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#2A5D9F" }}
            >
              Create New Training Center Account
            </Typography>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{ paddingY: "20px" }}
            >
              <Grid item xs={12}>
                <TextField
                  label="Center Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Admin Name"
                  name="adminName"
                  value={formData.adminName}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleFormDataChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Government"
                  name="government"
                  value={formData.address.government}
                  onChange={(e) => handelAddressChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="City"
                  name="city"
                  value={formData.address.city}
                  onChange={(e) => handelAddressChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Way No."
                  name="wayNo"
                  value={formData.address.wayNo}
                  onChange={(e) => handelAddressChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="House No"
                  name="houseNo"
                  value={formData.address.houseNo}
                  onChange={(e) => handelAddressChange(e)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "#2A5D9F",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px solid #2A5D9F",
                        borderRadius: "15px",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label style={{ color: "#2A5D9F", marginBottom: "10px" }}>
                  Logo
                </label>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <input
                    label="Logo"
                    name="logo"
                    value={formData.fileName}
                    type="file"
                    onChange={(e) => handleUpload(e)}
                    variant="outlined"
                    sx={{
                      width: "100%",
                      color: "#2A5D9F",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "2px solid #2A5D9F",
                          borderRadius: "15px",
                        },
                      },
                    }}
                  />
                  {logoUploadProgress == 0 ? (
                    ""
                  ) : (
                    <CircularProgress
                      variant="determinate"
                      value={logoUploadProgress}
                    />
                  )}
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label style={{ color: "#2A5D9F", marginBottom: "10px" }}>
                  Documents
                </label>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <input
                    multiple
                    label="Documents"
                    name="documents"
                    value={formData.fileNames}
                    type="file"
                    onChange={(e) => handleUpload(e)}
                    variant="outlined"
                    sx={{
                      width: "100%",
                      color: "#2A5D9F",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "2px solid #2A5D9F",
                          borderRadius: "15px",
                        },
                      },
                    }}
                  />
                  {documentsUploadProgress == 0 ? (
                    ""
                  ) : (
                    <CircularProgress
                      variant="determinate"
                      value={documentsUploadProgress}
                    />
                  )}
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={(e) => handleAddNewTrainingCenter()}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
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
                  Logo
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Documents
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Admin Name
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
                  Mobile
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Courses
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2A5D9F",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  align="center"
                  colSpan={2}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingCenters.length > 0 &&
                trainingCenters.map(({ attributes: row, id }, i) => (
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
                      <img
                        src={`${row.logo.data.attributes.url}`}
                        style={{ maxWidth: "70px" }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.documents.data.map((el, i) => (
                        <Box key={i}>
                          {el.attributes.mime == "application/pdf" ? (
                            <a
                              key={el.id}
                              href={`${el.attributes.url}`}
                              target="_blank"
                            >
                              {el.attributes.name}
                            </a>
                          ) : (
                            <img
                              key={el.id}
                              src={`${el.attributes.url}`}
                              style={{ maxWidth: "70px" }}
                            />
                          )}
                          <br key="br1" />
                          <br key="br2" />
                        </Box>
                      ))}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.adminName}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.user.data.attributes.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {row.phone}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      <Button variant="contained" size="small">
                        {" "}
                        View Courses
                      </Button>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={(e) => handleDelete()}
                        sx={{
                          maxWidth: "fir-content",
                          minWidth: "fit-content",
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: "1rem" }} />
                      </Button>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#2A5D9F",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={(e) => handleUpdateStatus()}
                        sx={{
                          maxWidth: "fir-content",
                          minWidth: "fit-content",
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: "1rem" }} />
                      </Button>
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
