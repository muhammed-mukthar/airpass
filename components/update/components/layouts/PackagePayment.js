import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RingSpinnerOverlay } from "react-spinner-overlay";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { toast } from "react-toastify";

const PackagePayment = ({ user, setPayment }) => {
  const router = useRouter();
  const [paymentError, setPaymentError] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState();

  useEffect(() => {
    const packageSubscribe = async () => {
      try {
        setLoading(true);
        console.log("user data from payment page", user);
        if (!user.payment_session_id && !user.payment_status) {
          const { data: res } = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}packages/subscribe`,
            {
              user_id: user.id,
              email: user.email,
              package_id: user.package_id,
              success_url: process.env.NEXT_PUBLIC_SUCESS_URL_PACKAGES,
              cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL_PACKAGES,
            }
          );
          setPaymentId(res.data.data.attributes.payment_session_id);
          console.log("data", res);
        } else {
          if (user.payment_status === "pending") {
            const { data: res } = await axios.get(
              `${process.env.NEXT_PUBLIC_THAWANI_API_ENDPOINT}checkout/session/${user.payment_session_id}`,
              {
                headers: {
                  "thawani-api-key": `${process.env.NEXT_PUBLIC_THAWANI_SECRET_KEY}`,
                },
              }
            );
            console.log("thawani checkout session res", res);
            if (res.data.payment_status === "paid") {
              const { data: activatePackage } = await axios.post(
                `${process.env.NEXT_PUBLIC_SERVER_URL}packages/activate`,
                {
                  user_id: user.id,
                }
              );
              console.log("activatePackage from payment page", activatePackage);
              toast.success("Your package is successfully activated");
              setPayment(false);
            } else {
              if (res.data.payment_status === "unpaid") {
                setPaymentId(user.payment_session_id);
              } else {
                setPaymentError(true);
              }
            }
          }
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("err", err);
      }
    };
    packageSubscribe();
  }, [user]);
  const handleClick = async () => {
    try {
      setLoading(true);
      setLoading(false);

      router.push(
        `https://uatcheckout.thawani.om/pay/${paymentId}?key=${process.env.NEXT_PUBLIC_THAWANI_PUBLIC_KEY}`
      );
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };
  const handleCreateNewPayment = async () => {
    try {
      setPaymentLoading(true);
      const { data: res } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}packages/subscribe`,
        {
          user_id: user.id,
          email: user.email,
          package_id: user.package_id,
          success_url: process.env.NEXT_PUBLIC_SUCESS_URL_PACKAGES,
          cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL_PACKAGES,
        }
      );
      console.log("create new subscription from payment page", res);
      setPaymentLoading(false);
      router.reload();
    } catch (err) {
      console.log(err);
      setPaymentLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", padding: "40px" }}>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "60%",
          backgroundColor: "#fff",
          margin: "auto",
          padding: "30px 20px",
          borderRadius: " 10px",
          boxShadow: "1px 1px 4px -1px rgba(0,0,0,0.75)",
          // minHeight: "90vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <RingSpinnerOverlay
            loading={loading}
            color="#1976d2"
            message="please wait we are fetching you data!"
          />
          <RingSpinnerOverlay
            loading={paymentLoading}
            color="#1976d2"
            message="please wait we are creating a new subscription for you"
          />
        </Box>
        <Box
          id="card"
          sx={{
            maxWidth: "595px",
            minWidth: "595px",
            width: "595px",
            position: "relative",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#000", fontWeight: "bold", fontSize: "20px" }}
          >
            Payment
          </Typography>
          <Card
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              rowGap: "20px",
            }}
            elevation={0}
          >
            {!paymentError ? (
              <>
                {" "}
                <p>
                  You are one step away from getting your{" "}
                  <strong>license</strong>,
                  <br /> an email was sent to you with all the payment
                  information. <br />
                  or you can pay now by clicking on the button below
                </p>
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 30px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    backgroundColor: "#E65A2C",
                    borderRadius: "0",
                    padding: "10px 50px",
                    color: "#fff",
                    alignSelf: "flex-end",
                    ":hover": {
                      backgroundColor: "#E65A2C",
                    },
                  }}
                  onClick={handleClick}
                >
                  Pay now
                </Button>
              </>
            ) : (
              <>
                {" "}
                <p>
                  there was an issue with your payment please create another
                  subscription by clicking the button below
                </p>
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 30px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    backgroundColor: "#E65A2C",
                    borderRadius: "0",
                    padding: "10px 50px",
                    color: "#fff",
                    alignSelf: "flex-end",
                    ":hover": {
                      backgroundColor: "#E65A2C",
                    },
                  }}
                  onClick={handleCreateNewPayment}
                >
                  Create new payment
                </Button>
              </>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default PackagePayment;
