import { useState } from "react";
// import { useRouter } from "next/router";

// import axios from "axios";
import Link from "next/link";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Alert from "@mui/material/Alert";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

const Login = () => {
  const [pilot, setPilot] = useState(true);
  // const router = useRouter();

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState([]);

  // const { email, password } = formData;

  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleClick = async () => {
  //   try {
  //     let config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     let body = JSON.stringify({
  //       identifier: formData.email,
  //       password: formData.password,
  //     });
  //     let { data } = await axios.post(
  //       `${process.env.NEXT_PUBLIC_SERVER_URL}auth/local`,
  //       body,
  //       config
  //     );
  //     console.log(data);
  //     localStorage.setItem("token", data.jwt);
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
  //     const { data: userDetail } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_SERVER_URL}users/me/?populate[pilot_detail][populate][0]=image&populate[account_type][populate]=*`
  //     );

  //     console.log({ userDetail });
  //     localStorage.setItem("user", JSON.stringify(userDetail));

  //     if (userDetail.account_type.type == "recreational-drone-pilot") {
  //       router.replace("/");
  //     } else if (userDetail.account_type.type == "commercial-drone-pilot") {
  //       router.replace("/");
  //     } else if (userDetail.account_type.type == "professional-drone-pilot") {
  //       router.replace("/");
  //     }
  //   } catch (err) {
  //     console.log({ err });
  //     setErrors(
  //       err.response.data.error.details.errors
  //         ? err.response.data.error.details.errors
  //         : [err.response.data.error]
  //     );
  //   }
  // };

  return (
    <div className="bg-login bg-cover bg-no-repeat">
      <div className="p-2 w-1/2 900px:w-full max-w-[88.375rem] px-6 570px:w-full ml-auto 900px:mx-auto min-h-[80vh] flex items-center justify-center">
        <div className="w-[480px] h-[374px] 570px:w-full">
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`border-2 border-white ${
                pilot ? "bg-white" : "bg-transparent text-white"
              } p-2 w-full font-semibold rounded-t-md`}
              onClick={() => setPilot(true)}
            >
              Pilot User
            </button>
            <button
              className={`border-2 border-white ${
                !pilot ? "bg-white" : "bg-transparent text-white"
              } p-2 w-full font-semibold rounded-t-md`}
              onClick={() => setPilot(false)}
            >
              EnterPrise User
            </button>
          </div>
          <div className="bg-white rounded-b-md p-3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-2">
                <input
                  type="email"
                  className="outline-none p-1.5 border-b w-full"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="outline-none p-1.5 border-b w-full"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="border border-orange-600 bg-orange-600  p-1.5 rounded-md w-full text-white font-semibold my-3"
              >
                Login
              </button>
            </form>
            <div className="text-center text-orange-600 font-semibold">
              <Link href="/auth/forget-password">Forgot your Password ?</Link>
            </div>
            <div className="text-center font-semibold my-1.5">
              Dont have an account ? Create one{" "}
              <span className="text-orange-600 underline">
                <Link href="/auth/register">here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
