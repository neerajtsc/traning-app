"use client";
import React from "react";
import RootLayout from "../layout";
import "../../../styles/gallery.css";
const gallery = () => {
  return (
    <RootLayout>
      <div className="mt-32 text-white">
        <div className="w-11/12 m-auto">
          <div className="p-5 flex">
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default gallery;
