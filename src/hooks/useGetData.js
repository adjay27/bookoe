import useSWR from 'swr';

const useGetData = (url, callback = (data) => data) => {
  const { data, error, isLoading } = useSWR(url);
  const result = callback(data);

  return { data: result, error, isLoading };
};

export default useGetData;
