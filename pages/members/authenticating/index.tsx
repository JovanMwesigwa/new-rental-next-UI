import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { APIROUTE } from "../../../APIRoute/APIRoute";
import { setToken } from "../../../features/token/tokenSlice";

const Login: React.FC<any> = props => {
  const [accessToken, setAccessToken] = useState<any>("");
  const router = useRouter();

  const dispatch = useDispatch();

  const mutation: any = useMutation<any>(data => {
    return axios.post(`${APIROUTE}/dj-rest-auth/google/`, data);
  });

  useEffect(() => {
    if (!mutation.data?.data?.key) {
      const params = window.location.href;
      let url = new URL(params);
      let urlWithToken: any = url.hash;
      setAccessToken(urlWithToken.match(/access_token=(.*?)&/)[1]);

      const submitData = () => {
        mutation.mutate({
          access_token: accessToken,
        });
      };
      submitData();
    }

    if (mutation.isSuccess) {
      // set token to the local storage
      dispatch(setToken(mutation.data?.data?.key));
      localStorage.setItem("token", mutation.data?.data?.key);
      router.push("/dashboard");
    }
  }, [accessToken, mutation.data?.data?.key]);

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

            {mutation.isLoading ? (
              <h1 className="text-xl my-8 text-gray-900 text-center font-semibold">
                Authenticating.....
              </h1>
            ) : (
              <>
                {mutation.isError ? (
                  <div className="my-10">
                    An error occurred: {mutation.error.message}
                  </div>
                ) : null}

                {mutation.isSuccess ? (
                  <>
                    <div className="my-10">
                      Authentication success token - {mutation.data.key}
                    </div>
                  </>
                ) : null}
              </>
            )}

            <div className="flex flex-col flex-1 w-full items-center "></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
