import { axiosInstance } from "../api/axios";
import { useQuery } from "react-query";
// /recipes/{id}/information
const fetchItemById = async (urlPtah, id) => {
  return await axiosInstance.get(
    `/${urlPtah}/${id}/information?apiKey=7586ad9170994539a3eedb60730a5d80`
  );
};

const useFetchDataWithId = (cacheKey, urlPtah, id) => {
  return useQuery([cacheKey, id], () => fetchItemById(urlPtah, id), {
    enabled: !!id,
  });
};

export default useFetchDataWithId;
