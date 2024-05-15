"use client";
import React, {useState } from "react";
import RootLayout from "../layout";
import "../../../styles/placement.css";
import Placement from "../../components/ui/placement";

const placement = () => {
  return (
    <RootLayout>
    <div className="mt-32">
       <div className="fixedWidth">
          <Placement/>
       </div>
    </div>
    </RootLayout>
  );
};

export default placement;
