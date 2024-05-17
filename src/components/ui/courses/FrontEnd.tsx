import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import "../../../../styles/ourCourses.css";
const FrontEnd = () => {
  return (
    <>
      <div className="flex mt-5">
        <div className="w-3/5 p-6">
          <div>
            <p className="text-5xl">Build Websites You'll Love:</p>
            <p className="text-4xl mt-4">
              {" "}
              The Ultimate Front-End Course for Beginners
            </p>
            <p className="mt-10 w-4/5 text-xl">
              "Master web design essentials in our Front End Development course,
              learning HTML, CSS, and JavaScript for dynamic, captivating
              websites."
            </p>
          </div>
          <div className=" mt-10 pt-6 pb-6">
            <button
              type="button"
              className="text-2xl w-2/5 p-4 rounded-xl bg-green-500"
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="border text-2xl w-2/5 p-4 rounded-xl ms-5"
            >
              Try Master Class
            </button>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            alt="frontEnd"
            width={600}
            height={500}
            src={"/images/frontEnd.png"}
          />
        </div>
      </div>
      <div className="mt-5 border mb-5">
        <div className="p-5">
          <p className="text-4xl">Experience the new way of learning</p>
          <p className="text-xl mt-3">
            Learn in live classes, solve real-life case studies, get mentored by
            the top 1% experts. Be the talent every recruiter in the industry is
            looking for!
          </p>
          <div className="border mt-10 rounded-xl p-5">
            <p className="text-2xl">Topics Covered</p>
            <div className="border mt-4 flex">
              <div className="w-1/4 border">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
              </div>
              <div className="w-1/4 border">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
              </div>
              <div className="w-1/4 border">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
              </div>
              <div className="w-1/4 border">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
