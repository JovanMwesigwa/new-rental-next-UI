import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

const Login: React.FC<any> = () => {
  const token = useSelector((state: any) => state.token.token);

  useEffect(() => {
    if (token) {
      window.location.href = "/dashboard";
    }
  }, [token]);

  return (
    <div className="relative">
      <Head>
        <title>Sign in to Omie Cribs</title>
        <meta
          name="description"
          content="Manage your tenants, set reminders and keep track of their stay periods."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
            <h1 className="text-3xl text-red-600 leading-4 font-bold">Omie</h1>
            <h1 className="text-xs  text-red-600 font-light">cribs & homes</h1>

            <h1 className="text-xl my-8 text-gray-900 text-center font-semibold">
              Login / Signup
            </h1>

            <div className="flex flex-col flex-1 w-full items-center ">
              <input
                type="email"
                className="w-2/3 border-[0.5px] my-3 border-gray-300 rounded-md py-3 outline-none p-2"
                placeholder="example@mail.com"
              />
              <input
                type="password"
                className="w-2/3 border-[0.5px] my-3 border-gray-300 rounded-md py-3 outline-none p-2"
                placeholder="enter passord here"
              />

              <Link href="/dashboard">
                <div className="w-2/3 bg-red-600 p-2 py-3 flex items-center justify-center cursor-pointer rounded-md my-3 text-white">
                  Continue
                </div>
              </Link>
            </div>

            <h5 className="text-gray-700">Or</h5>

            <a
              className="w-2/3 border-[0.5px] border-gray-400 p-2 py-3 rounded-md my-3 text-gray-700 text-sm flex flex-row items-center justify-center"
              href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/members/authenticating&prompt=consent&response_type=token&client_id=824430276202-v1nllecchun2747nd5s7ervvfhf7ldsh.apps.googleusercontent.com&scope=openid%20email%20profile"
            >
              <FcGoogle size={22} className="mr-3" />
              Continue with Google
            </a>

            <button className="w-2/3 border-[0.5px] border-gray-400 p-2 py-3 rounded-md my-3 text-gray-700 text-sm flex flex-row items-center justify-center">
              <BsFacebook size={22} className="text-blue-700 mr-3" />
              Continue with facebook
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
