"use client";

import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import Alert from "../../components/alert";
import handleSignup from "@/actions/signupAction";
import handleLogin from "@/actions/loginAction";
import { useActionState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@/app/context/context";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function MyAccount() {
  return (
    <Suspense>
    <MyAccountPage></MyAccountPage>
    </Suspense>
  )
}

function MyAccountPage() {

  const {user, setUser} : any = useContext(User);

  const [signupFormState, signupFormAction] = useActionState(
    handleSignup,
    undefined
  );
  const [loginFormState, loginFormAction] = useActionState(handleLogin, undefined);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = searchParams?.get("type");

  // ----------------------- input state ---------------------------

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUserName, setSignupUsername] = useState("");
  const [signupError, setSignupError] = useState("");


  const [showPassword, setShowPassword] = useState(false);

  console.log("error:" , loginFormState);

  useEffect(() => {
    if (signupFormState?.message == "account created") {
      setTimeout(() => {
        router.push("/My-Account?type=login")
      }, 1000)
    }
    if (loginFormState?.message == "login successfully") {
      setTimeout(() => {
      setUser(loginFormState?.user);
        router.push("/");
      }, 1000)
    }
  }, [signupFormState, loginFormState]);

  useEffect(() => {
    if (user) {
    console.log(user)
      redirect("/")
    }
  }, [user]);

  return (
    <div className="account-main font-[family-name:var(--mypoppins)] max-w-[1440px] mx-auto">
    {
      signupFormState?.message == "account created" ?
      <Alert
        type="success"
        display={true}
        message="Account Created Successfully"
      ></Alert>
      : <></>
    }
    {
      loginFormState?.message == "login successfully" ?
      <Alert
        type="success"
        display={true}
        message="Account Login Successfully"
      ></Alert>
      : <></>
    }
      <Navbar className=""></Navbar>
      <div className="flex flex-col lg:flex-row w-full">
        <Banner
          className="hidden lg:block"
          type="vertical"
          location="my account"
          heading="My Account"
        ></Banner>
        <Banner
          className="block lg:hidden"
          type="horizontal"
          location="my account"
          heading="My Account"
        ></Banner>
        <div className="flex my-20 justify-around md:flex-row flex-col items-center gap-y-10">
          {params !== "signup" ? (
            //  ----------------------------------  login
            <form action={loginFormAction}>
              <div className="flex min-w-[400px] ms-10 items-center flex-col gap-10 px-3 md:border-none border-b border-b-black md:pb-0 pb-10">
                <h2 className="text-3xl text-start w-full font-bold">Log In</h2>

                <div className="flex flex-col w-full gap-5">
                  <label htmlFor="loginemail">Email address</label>
                  <input
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail}
                    name="loginEmail"
                    id="loginemail"
                    className="inp"
                    type="email"
                  />
                  {loginFormState?.type === "email" ? (
                    <p className="text-red-500">{loginFormState?.message}</p>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex flex-col w-full gap-5 relative">
                  <label htmlFor="loginPassword">Password</label>
                  <div className="absolute top-[66px] right-5">
                    {showPassword ? (
                      <FaRegEyeSlash
                        className="cursor-pointer"
                        onClick={() => setShowPassword(false)}
                        size={20}
                      ></FaRegEyeSlash>
                    ) : (
                      <FaRegEye
                        className="cursor-pointer"
                        onClick={() => setShowPassword(true)}
                        size={20}
                      ></FaRegEye>
                    )}
                  </div>
                  <input
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                    id="loginPassword"
                    name="loginPassword"
                    className="inp"
                    type={`${showPassword ? "text" : "password"}`}
                  />
                  {loginFormState?.type == "password" ? (
                    <p className="text-red-500">{loginFormState?.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex gap-5 items-center w-full">
                  <input
                    id="remember"
                    className="w-7 h-7 rounded-xl border border-[#9f9f9f]"
                    type="checkbox"
                  />
                  <label htmlFor="remember" className="poppins-thin text-sm">
                    Remember me
                  </label>
                </div>
                <div className="flex gap-10 items-center justify-between flex-wrap md:flex-nowrap w-full">
                  <input
                    type="submit"
                    value={"Log in"}
                    className="btn2 poppins-thin min-w-fit text-xl w-[200px]"
                  />

                  <div className="poppins-thin2 text-md text-black font-bold min-w-fit">
                    Lost Your Password?
                  </div>
                </div>
                <div>
                  <p>
                    Don&apos;t have an Account?{" "}
                    <span
                      onClick={() => router.push("/My-Account?type=signup")}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      Sign up
                    </span>
                  </p>
                </div>
              </div>
            </form>
          ) : (
            //   -------------------------------------   register

            <form action={signupFormAction}>
              <div className="flex min-w-[400px] mx-10 items-center flex-col gap-10 px-3 md:border-none border-b border-b-black md:pb-0 pb-10">
                <h2 className="text-3xl text-start w-full font-bold">
                  Register
                </h2>
                <div className="flex flex-col w-full gap-5">
                  <label htmlFor="username">Full name</label>
                  <input
                    onChange={(e) => setSignupUsername(e.target.value)}
                    value={signupUserName}
                    id="username"
                    name="username"
                    className="inp"
                    type="text"
                  />
                  {signupFormState?.type === "username" ? (
                    <p className="text-red-500">
                    {signupFormState?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col w-full gap-5">
                  <label htmlFor="email">Email address</label>
                  <input
                    onChange={(e) => setSignupEmail(e.target.value)}
                    value={signupEmail}
                    id="email"
                    name="signupEmail"
                    className="inp"
                    type="text"
                  />
                  {signupFormState?.type === "email" ? (
                    <p className="text-red-500">{signupFormState?.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col w-full gap-5 relative">
                  <label htmlFor="password">Password</label>
                  <div className="absolute top-[66px] right-5">
                    {showPassword ? (
                      <FaRegEyeSlash
                        className="cursor-pointer"
                        onClick={() => setShowPassword(false)}
                        size={20}
                      ></FaRegEyeSlash>
                    ) : (
                      <FaRegEye
                        className="cursor-pointer"
                        onClick={() => setShowPassword(true)}
                        size={20}
                      ></FaRegEye>
                    )}
                  </div>
                  <input
                    id="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                    value={signupPassword}
                    name="signupPassword"
                    className="inp"
                    type={`${showPassword ? "text" : "password"}`}
                  />
                  {signupFormState?.type == "password" ? (
                    <p className="text-red-500">{signupFormState?.message}</p>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex gap-10 w-full">
                  <input
                    type="submit"
                    name="Register"
                    className="btn2 poppins-thin text-xl w-[200px]"
                  />
                </div>
                <div>
                  <p>
                    Already have an Account?{" "}
                    <span
                      onClick={() => router.push("/My-Account?type=login")}
                      className="text-blue-500 underline cursor-pointer"
                    >
                      Log in
                    </span>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
