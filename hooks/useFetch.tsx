import axios from "axios";
import { useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";

const useFetch = (url: string) => {
  const { token } = useSelector((state: any) => state.token);

  const request = async () => {
    try {
      const result = await axios.get(`${APIURL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      return await result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return request;
};

export default useFetch;
