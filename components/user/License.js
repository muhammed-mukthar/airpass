import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Loading from "../layouts/Loading";
import Error from "../layouts/Error";

const fetchDetails = async (page, id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}users/me?populate[pilot_detail][populate][0]=image&populate[account_type][populate][1]=*`
  );
  return data;
};

const License = ({ id }) => {
  const {
    isFetching: loading,
    data,
    isError: errors,
    error,
  } = useQuery(["License"], () => fetchDetails(), {
    onSuccess: (data) => console.log(data),
    refetchOnWindowFocus: false,
  });

  const downloadLicense = (url) => {
    saveAs(url, "License.png");
  };

  return !loading && !errors ? (
    data.pilot_detail && data.pilot_detail.licenseDetails ? (
      <Box sx={{ display: "flex", columnGap: "240px", padding: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              fontSize: "17px",
              color: "#414141",
            }}
          >
            <span style={{ color: "#2A5D9F" }}>Name: </span>
            {data.pilot_detail.firstName} {data.pilot_detail.lastName}
          </Typography>
          {data.account_type.type !== "recreational-drone-pilot" ? (
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bolder",
                fontSize: "17px",
                color: "#414141",
              }}
            >
              <span style={{ color: "#2A5D9F" }}>Category: </span>{" "}
              {data.account_type.type.toUpperCase()}
            </Typography>
          ) : (
            ""
          )}
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              fontSize: "17px",
              color: "#414141",
            }}
          >
            <span style={{ color: "#2A5D9F" }}>Issue Date: </span>
            {data.pilot_detail.licenseDetails.issueDate}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              fontSize: "17px",
              color: "#414141",
            }}
          >
            <span style={{ color: "#2A5D9F" }}>Expiration Date: </span>
            {data.pilot_detail.licenseDetails.expiryDate}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              fontSize: "17px",
              color: "#414141",
            }}
          >
            <span style={{ color: "#2A5D9F" }}>Civil Number: </span>
            {data.pilot_detail.idNumber}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              fontSize: "17px",
              color: "#414141",
            }}
          >
            <span style={{ color: "#2A5D9F" }}>Nationality: </span>
            {"Omani"}
          </Typography>
        </Box>
        <Box
          id="card"
          sx={{
            width: "26%",
            position: "relative",
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.6)",
            height: "600px",
          }}
        >
          <img
            src={data.pilot_detail.licenseDetails.image.url}
            style={{ maxWidth: "100%", position: "absolute" }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              marginX: "auto",
            }}
            onClick={(e) =>
              downloadLicense(data.pilot_detail.licenseDetails.image.url)
            }
          >
            Download License
          </Button>
        </Box>
      </Box>
    ) : (
      <Error
        status={404}
        message="it seems there is no license for you try to take the knowledge test and come again"
      />
    )
  ) : !loading && errors ? (
    <Error
      status={500}
      message="it seems there is an error please try again later!"
    />
  ) : (
    <Loading />
  );
};

export default License;
