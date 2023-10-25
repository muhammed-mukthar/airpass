import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const Register = () => {
  const [pilot, setPilot] = useState(true);
  const [subscribe, setSubscribe] = useState(true);
  const [accept, setAccept] = useState(true);
  return (
    <div className="bg-register bg-cover bg-no-repeat">
      <div className="p-2 w-1/2 900px:w-full max-w-[88.375rem] px-6 570px:w-full ml-auto 900px:mx-auto min-h-[80vh] flex items-center justify-center">
        <div className="w-[570px] 570px:w-full">
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`border-2 border-white ${
                pilot ? "bg-white" : "bg-transparent text-white"
              } p-2 w-full font-semibold rounded-t-md`}
              onClick={() => setPilot(true)}
            >
              Pilot Login
            </button>
            <button
              className={`border-2 border-white ${
                !pilot ? "bg-white" : "bg-transparent text-white"
              } p-2 w-full font-semibold rounded-t-md`}
              onClick={() => setPilot(false)}
            >
              EnterPrise Login
            </button>
          </div>
          <div className="bg-white rounded-b-md p-3 grid grid-cols-5">
            <div className="col-span-1 570px:hidden"></div>
            <div className="col-span-4 570px:col-span-5">
              <div className="my-3 text-left">
                <h2 className="font-semibold mb-1">Enter Your Details</h2>
                <p className="text-zinc-600">
                  Provide us with all the relevant information
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-2">
                  <input
                    className="outline-none p-1.5 border-b w-full"
                    placeholder="User Name"
                  />
                </div>
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
                <div className="mb-2">
                  <input
                    type="password"
                    className="outline-none p-1.5 border-b w-full"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="my-3">
                  <div
                    onClick={() => setSubscribe(!subscribe)}
                    className="flex cursor-pointer mb-2"
                  >
                    <div className="h-5 w-5 border border-gray-400 rounded-sm relative">
                      {subscribe && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-600">
                          <CheckIcon fontSize="small" />
                        </div>
                      )}
                    </div>
                    <div className="mx-2">
                      Subscribe to{" "}
                      <span className="text-orange-600 hover:underline">
                        News Letter
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => setAccept(!accept)}
                    className="flex cursor-pointer"
                  >
                    <div className="h-5 w-5 border border-gray-400 rounded-sm relative">
                      {accept && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-600">
                          <CheckIcon fontSize="small" />
                        </div>
                      )}
                    </div>
                    <div className="mx-2">
                      I agree to{" "}
                      <span className="text-orange-600 hover:underline">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-orange-600 hover:underline">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end 450px:block gap-2 my-3">
                  <button
                    type="submit"
                    className="450px:mb-2 border border-gray-200 bg-gray-200 text-zinc-600 p-1.5 rounded-md w-[180px] 450px:w-full font-semibold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="border border-orange-600 bg-orange-600  p-1.5 rounded-md w-[180px] 450px:w-full text-white font-semibold"
                  >
                    Verify Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
