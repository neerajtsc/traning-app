"use client";
import { useState } from "react";
import "../../../styles/ourCourses.css";
import Image from "next/image";
import { useRouter } from "next/navigation"
const OurCourses = (props : any) => {
  const router = useRouter();
  const { setComponentVisible } = props;

  const handleMouseLeave = () => {
    setComponentVisible(false);
  }

  const handleFrontEnd = () =>{
    router.push('/frontend');
  }

  return (
    <>
      <div onMouseLeave={handleMouseLeave} className="border rounded-xl flex border-white absolute bg-black text-white mt-28 courseContainer">
        <div className="border border-white actionItem rounded-tl-xl h-20 p-4 flex">
         <p className="text-2xl ">Courses</p>
         <Image
          alt="goRight"
          width={30}
          height={30}
          src={"/images/goRight.png"}
          className="ms-5"
         />
        </div>
        <div className="border border-white rounded-r-xl itemsView"> 
          <div className="border rounded-xl flex">
            <div className="w-1/4 border rounded-l-xl commitMent">
              Learning Classes
            </div>
            <div className="w-1/4 border commitMent">
              Industry Best MentoShip
            </div>
            <div className="w-1/4 border commitMent">
              Job Placement Prepration
            </div>
            <div className="w-1/4 border rounded-r-xl commitMent">
              Get Your Dream Job
            </div>
          </div>
          <div className="mt-5 p-4">
            <div className="border flex courseCard rounded-xl p-4" onClick={handleFrontEnd}>
              <Image
                alt="webDevelopment"
                width={150}
                height={150}
                src={"/images/allCourse.png"}
                className=""
              />
              <div>
              <p className="text-2xl">Front-End Developer</p>
              <p>"Empower your creativity and craft captivating user experiences with our Frontend Developer course."</p>
              </div>
            </div>
            <div className="border mt-5 flex courseCard rounded-xl p-4">
            <Image
                alt="webDevelopment"
                width={150}
                height={150}
                src={"/images/allCourse.png"}
                className=""
              />
              <div>
              <p className="text-2xl">Back-End Developer</p>
              <p>"Unlock the power of data manipulation and server-side logic in our comprehensive Backend Developer course."</p>
              </div>
            </div>
            <div className="border mt-5 flex courseCard rounded-xl p-4">
            <Image
                alt="webDevelopment"
                width={150}
                height={150}
                src={"/images/allCourse.png"}
                className=""
              />
              <div>
              <p className="text-2xl">Full-Stack Developer</p>
              <p>"Master full-stack development with our comprehensive course, covering everything from front-end to back-end technologies."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCourses;
