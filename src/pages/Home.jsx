import React from "react";
import "../styles/home.css";
import CollegeGallery from "../components/CollegeGallery";
import ClipLoader from "react-spinners/PuffLoader";
import useGetColleges from "../hooks/useGetColleges";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const { colleges, status, getNextPage, totalResults } = useGetColleges();
  // if actual api.. status can be used for loader
  // totalResults for pagination btns

  return (
    <div className="page-wrapper">
      <div className="header-title">Colleges in North India</div>
      <InfiniteScroll
        dataLength={colleges.length}
        next={getNextPage}
        hasMore={colleges.length < totalResults}
        loader={<div className="loader-wrapper">Loading</div>}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>End! You have seen all the colleges.</b>
        //   </p>
        // }
      >
        <CollegeGallery colleges={colleges} />
      </InfiniteScroll>
    </div>
  );
}
