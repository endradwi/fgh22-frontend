import React, { useEffect, useState } from "react";
import logo from "../assets/imagelogo.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnLgn from "../component/BtnLgn";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaEyeSlash } from "react-icons/fa";

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Email Invalid")
    .min(8, "Your email must be 8 character on length")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Your email must be 8 character on length")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShow, setShow] = React.useState(false);
  const [mess, setMess] = React.useState("");
  const [getsuccess, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });
  const regis = useSelector((state) => state.users.data);
  const onSubmit = (value) => {
    const newData = new URLSearchParams(value);
    const nq = newData.toString();
    fetch("http://localhost:8888/auth/register", {
      method: "POST",
      body: nq,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (!response.success === true) {
          setSuccess(response.success);
          setMess(response.message);
        }
        setSuccess(response.success);
        setMess(response.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      });
  };

  return (
    <>
      <div className="bg-[url(./assets/bg.svg)] w-screen bg-center h-full bg-cover pb-10">
        <div className="w-screen h-[1000px] bg-black absolute opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center">
          <img className="w-76 h-24" src={logo} alt="" />
          <div className="rounded-xl bg-white px-20 pt-7 pb-10 flex flex-col justify-between gap-9 items-center w-full max-w-96 md:max-w-2xl">
            <div className="md:flex items-center gap-6 hidden">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-orange-400 aspect-square w-16 text-white text-2xl rounded-full flex justify-center items-center">
                  1
                </div>
                <div className="text-lg">Fill Form</div>
              </div>
              <div className="border-t-2 border-black w-16 border-dashed"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-gray-400 aspect-square w-16 text-white text-2xl rounded-full flex justify-center items-center">
                  2
                </div>
                <div className="text-lg text-gray-400">Activate</div>
              </div>
              <div className="border-t-2 border-black w-16 border-dashed"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-gray-400 aspect-square w-16 text-white text-2xl rounded-full flex justify-center items-center">
                  3
                </div>
                <div className="text-lg text-gray-400">Done</div>
              </div>
            </div>
            {getsuccess === true && (
              <div className="bg-green-500 h-16 w-96 rounded-2xl flex justify-center items-center top-72 text-black">
                {mess}
              </div>
            )}
            {getsuccess === false && (
              <div className="bg-red-500 h-16 w-96 rounded-2xl flex justify-center items-center top-72 text-white">
                {mess}
              </div>
            )}
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <div className="w-full">
                <input
                  className={
                    "outline-none w-full text-gray-700 border-gray-400 border box-border rounded py-5 pl-6 pr-56" +
                    (errors.email?.message
                      ? " border-red-600 placeholder:text-red-400"
                      : "")
                  }
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                {errors.email?.message && (
                  <div className="w-full max-w-md bg-red-300 pl-3">
                    <span className=" text-red-700">
                      {errors.email?.message}
                    </span>
                  </div>
                )}
              </div>
              <label className="text-xl" htmlFor="password">
                Password
              </label>
              <div
                className={
                  "flex justify-between items-center border-gray-400 border w-full rounded pr-5 overflow-hidden" +
                  (errors.password?.message ? " border-red-600" : "")
                }
              >
                {isShow ? (
                  <input
                    className={
                      "outline-none text-gray-700 w-full box-border py-5 pl-6 " +
                      (errors.password?.message
                        ? " placeholder:text-red-400"
                        : "")
                    }
                    type="text"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Enter your password"
                  />
                ) : (
                  <input
                    className={
                      "outline-none text-gray-700 w-full box-border py-5 pl-6 " +
                      (errors.password?.message
                        ? " placeholder:text-red-400"
                        : "")
                    }
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Enter your password"
                  />
                )}
                <div onClick={() => setShow(!isShow)}>
                  {!isShow ? (
                    <FaEye
                      className={
                        "h-7 w-7 text-gray-400" +
                        (errors.password?.message ? " text-red-600" : "")
                      }
                    />
                  ) : (
                    <FaEyeSlash
                      className={
                        "h-7 w-7 text-gray-400" +
                        (errors.password?.message ? " text-red-600" : "")
                      }
                    />
                  )}
                </div>
              </div>
              <div>
                {errors.password?.message && (
                  <div className="w-full max-w-md bg-red-300 pl-3">
                    <span className=" text-red-700">
                      {errors.password?.message}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="agree" name="agree" />
                <label htmlFor="agree">I agree to terms & conditions</label>
              </div>
              <div>
                <button className="bg-orange-400 rounded-lg px-10 w-full max-w-md h-16 hover:bg-orange-700 text-white">
                  Join For Free Now
                </button>
              </div>
            </form>
            <span>
              Already have an account?{" "}
              <Link
                className="text-orange-600 underline underline-offset-4"
                to="/login"
              >
                Log in
              </Link>
            </span>
            <div className="flex items-center gap-2">
              <hr className="border border-gray-300 w-48" />
              <span className="text-xs">Or</span>
              <hr className="border border-gray-300 w-48" />
            </div>
            <BtnLgn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
