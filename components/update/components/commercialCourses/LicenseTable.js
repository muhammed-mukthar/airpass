import React, { useRef, useCallback, useState } from "react";
import html2canvas from "html2canvas";
import { setLogger, useQuery } from "react-query";
import { RingSpinnerOverlay } from "react-spinner-overlay";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Webcam from "react-webcam";
import "react-toastify/dist/ReactToastify.css";

// import Payment from "./Payment";
import Box from "@mui/material/Box";
import Hero from "../../components/Hero";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Loading from "../layouts/Loading";

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
function generate(count) {
  const _sym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let str = "";

  for (let i = 0; i < count; i++) {
    str += _sym[parseInt(Math.random() * _sym.length)];
  }
  return str;
}
function generateLicenseNumber(prefix) {
  return prefix + generate(6);
}

const videoConstraints = {
  width: 200,
  height: 200,
  screenshotQuality: 1,
  facingMode: "environment",
};

const fetchUser = async (page, id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}users/me?populate[pilot_detail][populate][0]=image&populate[account_type][populate][1]=*`
  );
  return data;
};

const LicenseTable = () => {
  // console.log("this is the url", url);
  const webcamRef = useRef(null);
  const [user, setUser] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState(null);
  const [licenseCategory, setLicenseCategory] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [saved, setSaved] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [payment, setPayment] = useState(false);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 200,
      height: 200,
    });
    console.log("imageSrc", imageSrc);
    console.log("user from capture:", user);
    const newImage = dataURLtoFile(
      imageSrc,
      `${user.email}_${new Date().getTime()}.png`
    );
    console.log("image", newImage);
    const formData = new FormData();
    formData.append("files", newImage);
    console.log("formData", formData);
    try {
      setUpdateLoading(true);
      let uploadRes = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}upload`,
        data: formData,
      });
      console.log(uploadRes);
      const { data: updatePilotImage } = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}pilot-details/${user.pilot_detail.id}`,
        {
          data: {
            image: uploadRes.data[0],
          },
        }
      );
      console.log(updatePilotImage);
      setUpdateLoading(false);
      toast.success("Your Image Saved Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log({ err });
      setUpdateLoading(false);
      toast.error("Error While saving the Image please try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setUrl(imageSrc);
  }, [webcamRef, user]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const exportAsPicture = () => {
    const html = document.getElementsByTagName("HTML")[0];
    const body = document.getElementsByTagName("BODY")[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const data = document.getElementById("card");
    const newWidth = data.scrollWidth - data.clientWidth;

    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";

    html2canvas(data, { allowTaint: true, useCORS: true })
      .then((canvas) => {
        return canvas.toDataURL("image/png", 1.0);
      })
      .then((image) => {
        saveAs(
          image,
          `${user.pilot_detail.firstName}_${user.pilot_detail.lastName}_license`
        );
        html.style.width = null;
        body.style.width = null;
      });
  };

  const saveAs = (blob, fileName) => {
    const elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };

  const saveLicense = async () => {
    setSaveLoading(true);
    const html = document.getElementsByTagName("HTML")[0];
    const body = document.getElementsByTagName("BODY")[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;
    const card = document.getElementById("card");
    const newWidth = card.scrollWidth - card.clientWidth;
    if (newWidth > card.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }
    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";
    html2canvas(card, { allowTaint: true, useCORS: true })
      .then((canvas) => {
        // console.log("base:", canvas.);
        return canvas.toDataURL("image/png", 1.0);
      })
      .then(async (image) => {
        const newImage = dataURLtoFile(
          image,
          `${user.pilot_detail.firstName}_${user.pilot_detail.lastName}.png`
        );
        newImage.crossOrigin = "anonymous";
        console.log("image", newImage);
        const formData = new FormData();
        formData.append("files", newImage);
        console.log("formData", formData);
        let uploadRes = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}upload`,
          data: formData,
        });
        console.log(uploadRes);
        try {
          let updatedUser = await axios.put(
            `${process.env.NEXT_PUBLIC_SERVER_URL}pilot-details/${user.pilot_detail.id}`,
            {
              data: {
                licenseDetails: {
                  image: uploadRes.data[0],
                  licenseNumber: licenseNumber,
                  category: licenseCategory,
                  issueDate: issueDate,
                  expiryDate: expiryDate,
                  civilNumber: user.pilot_detail.idNumber,
                  nationality: "Omani",
                },
                licenseStatus: "passed",
              },
            }
          );
          console.log(updatedUser);
          toast.success("Your License Saved Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSaved(true);
          setSaveLoading(false);
        } catch (err) {
          console.log({ err });
          toast.error("Error While saving the license please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSaveLoading(false);
        }
      });
  };
  const onSuccess = (data) => {
    setLoading(true);
    console.log("license", data);
    setUser(data);
    setLicenseCategory(
      data.account_type.type === "professional-drone-pilot"
        ? "Professional"
        : "Operator"
    );
    setPayment(
      data.pilot_detail &&
        (data.pilot_detail.paymentStatus == "pending" ||
          data.pilot_detail.paymentStatus == "paymentIssue")
        ? true
        : false
    );
    setLicenseNumber(
      data.account_type.type === "professional-drone-pilot"
        ? generateLicenseNumber("OMN-CP")
        : data.account_type.type === "commercial-drone-pilot"
        ? generateLicenseNumber("OMN-CO")
        : generateLicenseNumber("OMN-RE")
    );
    setIssueDate(new Date(Date.now()).toLocaleDateString());
    setExpiryDate(new Date(Date.now() + 31536000000).toLocaleDateString());
    setLoading(false);
  };

  const onError = (error) => {
    console.log({ error });
  };

  const {
    isFetching,
    data,
    isError: errors,
    error,
  } = useQuery(["user"], () => fetchUser(), {
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
  });

  return !loading && user ? (
    !payment && user.pilot_detail.paymentStatus === "paid" ? (
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "100%",
            backgroundColor: "#ddd",
            paddingX: "2rem",
            paddingY: "2rem",
            borderRadius: " 0 1rem 1rem 0",
            minHeight: "90vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              variant="contained"
              color="info"
              size="small"
              disabled={url ? false : true}
              sx={{
                marginBottom: "10px",
                marginX: "auto",
                maxWidth: "fit-content",
                textAlign: "center",
              }}
              onClick={(e) => setUrl(null)}
            >
              change picture
            </Button>
            <Button
              variant="contained"
              color="success"
              size="small"
              disabled={url ? false : true}
              sx={{
                marginBottom: "10px",
                marginX: "auto",
                maxWidth: "fit-content",
                textAlign: "center",
              }}
              onClick={saveLicense}
            >
              Save License
            </Button>

            <RingSpinnerOverlay
              loading={saveLoading}
              color="#1976d2"
              message="please wait while image is converted and saved to our servers!"
            />
            <RingSpinnerOverlay
              loading={updateLoading}
              color="#1976d2"
              message="please wait while image is converted and saved to our servers!"
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={!saved}
              sx={{
                marginBottom: "10px",
                marginX: "auto",
                maxWidth: "fit-content",
                textAlign: "center",
              }}
              onClick={exportAsPicture}
            >
              Download License
            </Button>
          </Box>
          <Box
            id="card"
            sx={{
              maxWidth: "595px",
              minWidth: "595px",
              width: "595px",
              position: "relative",
              height: "900px",
              margin: "auto",
            }}
          >
            {user.account_type.type !== "recreational-drone-pilot" ? (
              <>
                <img
                  src={
                    user.account_type.type === "recreational-drone-pilot"
                      ? `/images/license/rec.png`
                      : "/images/license/comm.png"
                  }
                  style={{ position: "absolute", maxWidth: "100%" }}
                />{" "}
                {url ? (
                  <img
                    src={url}
                    crossOrigin="anonymous"
                    style={{
                      position: "absolute",
                      left: "197px",
                      height: "200px",
                      width: "200px",
                      top: "197px",
                    }}
                  />
                ) : (
                  <>
                    <div
                      style={{
                        padding: "5px",
                        border: "2px solid #ddd",
                        display: "flex",
                        borderRadius: "50%",
                        zIndex: 10000000,
                        position: "absolute",
                        top: "345px",
                        left: "280px",
                        cursor: "pointer",
                      }}
                      onClick={capturePhoto}
                    >
                      <button
                        style={{
                          backgroundColor: "#ddd",
                          borderRadius: "50%",
                          border: "1px solid #ddd",
                          padding: "10px",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      ></button>
                    </div>
                    <Webcam
                      style={{
                        top: "197px",
                        position: "absolute",
                        left: "197px",
                      }}
                      ref={webcamRef}
                      audio={false}
                      screenshotFormat="image/png"
                      videoConstraints={videoConstraints}
                      onUserMedia={onUserMedia}
                      mirrored={true}
                    />
                  </>
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "255px",
                    top: "430px",
                  }}
                >
                  {licenseNumber}
                </Typography>
                {user.account_type.type !== "recreational-drone-pilot" ? (
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "17px",
                      color: "#414141",
                      position: "absolute",
                      left: "215px",
                      top: "462px",
                    }}
                  >
                    {"Commercial-Drone-Pilot"}
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
                    position: "absolute",
                    left: "260px",
                    top: "493px",
                  }}
                >
                  {issueDate}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "260px",
                    top: "525px",
                  }}
                >
                  {expiryDate}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "250px",
                    top: "585px",
                  }}
                >
                  {`${user.pilot_detail.firstName} ${user.pilot_detail.lastName}`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "270px",
                    top: "617px",
                  }}
                >
                  {user.pilot_detail.idNumber}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "280px",
                    top: "649px",
                  }}
                >
                  Omani
                </Typography>
              </>
            ) : (
              <>
                <img
                  src={
                    user.account_type.type === "recreational-drone-pilot"
                      ? `/images/license/rec.png`
                      : "/images/license/comm.png"
                  }
                  style={{ position: "absolute", maxWidth: "100%" }}
                />
                <img
                  src={user?.pilot_detail?.image?.url}
                  crossOrigin="anonymous"
                  style={{
                    position: "absolute",
                    left: "197px",
                    height: "200px",
                    width: "200px",
                    top: "197px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "255px",
                    top: "430px",
                  }}
                >
                  {licenseNumber}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "260px",
                    top: "463px",
                  }}
                >
                  {issueDate}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "260px",
                    top: "495px",
                  }}
                >
                  {expiryDate}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "250px",
                    top: "553px",
                  }}
                >
                  {`${user.pilot_detail.firstName} ${user.pilot_detail.lastName}`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "270px",
                    top: "587px",
                  }}
                >
                  {user.pilot_detail.idNumber}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                    color: "#414141",
                    position: "absolute",
                    left: "280px",
                    top: "618px",
                  }}
                >
                  Omani
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    ) : (
      <>
        <p>you have to pay for a course and pass it to generate the license</p>
      </>
    )
  ) : (
    <Loading />
  );
};

export default LicenseTable;
