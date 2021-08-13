import react, { useState, useEffect } from "react";
import collegeServerData from "../services/colleges.json";

const useGetCollges = () => {
  const [colleges, setColleges] = useState([]);
  const [status, setStatus] = useState("idle");
  const [pageNo, setPageNo] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const getColleges = () => {
    setStatus("pending");
    try {
      // usually api request (with pageNo and results param) here and func getColleges would have been async
      const { colleges } = collegeServerData;
      setTotalResults(colleges.length);
      const parsedColleges = colleges.slice(0, 10);
      setColleges(parsedColleges);
      setStatus("resolved");
    } catch (error) {
      console.error(error);
      setStatus("rejected");
    }
  };

  const getNextPage = () => {
    setStatus("pending");
    try {
      const { colleges } = collegeServerData;
      const parsedColleges = colleges.slice(pageNo * 10, pageNo * 10 + 10);
      setColleges((prevState) => [...prevState, ...parsedColleges]);
      setPageNo((pageNo) => pageNo + 1);
      setStatus("resolved");
    } catch (error) {
      console.error(error);
      setStatus("rejected");
    }
  };

  useEffect(() => {
    if (status === "idle") {
      // assuming async api req
      getColleges();
    }
  }, []);

  return {
    colleges,
    status,
    getNextPage,
    totalResults,
  };
};

export default useGetCollges;
