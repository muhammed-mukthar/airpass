import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PackagePayment from "../components/layouts/PackagePayment";
import Loading from "../components/layouts/Loading";
import { toast } from "react-toastify";
import { Container } from "@mui/material";

import HomePage from "../components/update/pages/plans/home";
import AboutPage from "./about"

const fetchUser = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}users/me?populate=*`
  );
  return data;
};
const Home = () => {
  const router = useRouter();
  const [payment, setPayment] = useState(false);
  const [user, setUser] = useState();

  const onSuccess = async (data) => {
    try {
      console.log("user data from welcome page", data);
      let userPayment;
      if (data.payment_id) {
        const { data: userPaymentRes } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}packages/getPayment/${
            data.payment_id || 0
          }`
        );
        userPayment = userPaymentRes;
      }
      const { data: userOrders } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}packages/userOrders?user_id=${
          data.id
        }&package_id=${data.package_id}&payment_id=${data.payment_id || 0}`
      );
      console.log("this is the user orders ", userOrders);
      console.log("this is the user payment ", userPayment);
      data.payment_session_id =
        userOrders?.payment?.payment_session_id ||
        userPayment?.data?.attributes?.payment_session_id ||
        null;
      data.payment_status =
        userOrders?.payment?.payment_status ||
        userPayment?.data?.attributes?.payment_status ||
        null;
      setUser(data);
      console.log("userOrders from welcome page", userOrders);
      if (
        data.payment_status === "pending" ||
        data.payment_status === undefined ||
        data.payment_status === null
      ) {
        setPayment(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong please try again later.");
    }
  };

  const onError = (error) => {
    console.log({ error });
  };

  // const {
  //   isLoading: loading,
  //   data,
  //   isError: errors,
  //   error,
  // } = useQuery("user", () => fetchUser(), {
  //   // retry: false,
  //   onSuccess,
  //   onError,
  //   refetchOnWindowFocus: false,
  // });

  // useEffect(() => {
  //   const userLocal = localStorage.getItem("user");
  //   if (user) setUser(JSON.parse(userLocal));
  // }, []);

//   return !loading && !payment && !errors && user ? (
//     <Box>
//       <Container
//         fixed
//         sx={{
//           display: "flex",
//           justifyContent: "space-around",
//           backgroundImage:
//             "url('/images/silhouette-drone-flying-city-sunset@2x.png')",
//           backgroundPosition: "center",
//           backgroundSize: "cover",

//           height: "70vh",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             marginTop: "-70px",
//             marginLeft: "-75px",
//           }}
//         >
//           <Typography
//             variant="h3"
//             component="span"
//             sx={{
//               fontWeight: "bolder",
//               fontSize: "55px",
//               color: "#fff",
//               fontWeight: "semibold",
//             }}
//           >
//             Welcome To AirPass
//           </Typography>
//           <Typography
//             variant="h3"
//             component="span"
//             sx={{
//               fontWeight: "light",
//               fontSize: "23px",
//               color: "#fff",
//               padding: "20px 0 25px",
//               fontWeight: "regular",
//             }}
//           >
//             It’s Time To Elevate Your Skills To A New Horizon
//           </Typography>
//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               marginTop: "30px",
//               fontSize: "22px",
//               color: "#000",
//               backgroundColor: "#fff",
//               textTransform: "capitalize",
//               borderRadius: "10px",
//               fontWeight: "Medium",
//               padding: "5px 55px",
//               transition: "all 0.2s ease-in-out",
//               ":hover": {
//                 backgroundColor: "#fff",
//                 color: "#000",
//                 WebkitBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
//                 MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
//                 boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
//                 transform: "scale(1.01)",
//               },
//             }}
//             onClick={() =>
//               router.push(
//                 user.role.name === "Recreational-Professional-User"
//                   ? "/videos"
//                   : "/commercial-courses"
//               )
//             }
//           >
//             Get Started
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   ) : !loading && !errors && user ? (
//     <PackagePayment user={user} setPayment={setPayment} />
//   ) : !loading && !user && !errors ? (
//     <HomePage />
//   ) : (
//     <Loading />
//   );
// };

return (
  // <HomePage />
  <AboutPage />
);
};
export default Home;
