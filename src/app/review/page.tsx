"use client";
import React from "react";
import RootLayout from "../layout";
import Review from "../../components/ui/review"

const course = () => {
  return (
    <RootLayout>
      <div className="pt-40">
        <div className="pt-14" style={{padding: "0 53px"}}>
      <Review/>
      </div>
      </div>
    </RootLayout>
  );
};

export default course;
