import useSWR from "swr";

const useGetData = (url, callback = (data) => data) => {
  const { data, error } = useSWR(url);
  const result = callback(data);
  
  return { data: result, error };
};

export default useGetData;
