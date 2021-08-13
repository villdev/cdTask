import React from "react";
import CollegeCard from "./CollegeCard";
import "../styles/collegeGallery.css";

export default function CollegeGallery({ colleges, status, getNextPage }) {
  return (
    <div className="college-gallery-wrapper">
      {colleges.map((college, index) => (
        <CollegeCard key={index} collegeData={college} />
      ))}
    </div>
  );
}
