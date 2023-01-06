import { axiosInstance } from "../api/axios";
// it's a hook managing our asynchronous data
// -it will call function to get data  -it will cache this data and
//refetch the data in the background when it needs to do that
// handle request status
//it takes 2 parameter(arguments)
// 1-cacheKey  (the path of url we want to get data from)
// 2 - asynchronous function that gonna get the data//
import { useQuery } from "react-query";

const fetchData = async url => {
  return await axiosInstance.get(url);
};

const useFetchData = (queryKey, url) => {
  return useQuery(queryKey, () => fetchData(url));
};

export default useFetchData;
