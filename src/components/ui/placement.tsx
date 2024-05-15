import "../../../styles/contact.css";
import React, { ChangeEvent, useState } from "react";
const Placement = () => {
    const studentData = [
        {
            studentName: "Aarav Sharma",
            profile: "Frontend Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
        },
        {
            studentName: "Meera Kapoor",
            profile: "Backend Developer",
            views: "Working here has been a wonderful experience. The collaborative environment and challenging projects have improved my server-side technology skills.",
        },
        {
            studentName: "Rajesh Patel",
            profile: "Full Stack Developer",
            views: "The exposure to both frontend and backend projects has been invaluable. The company provides ample opportunities for professional development.",
        },
        {
            studentName: "Priya Singh",
            profile: "Frontend Developer",
            views: "I really appreciate the supportive team and the interesting projects. My ability to design user-friendly interfaces has improved greatly.",
        },
        {
            studentName: "Vikram Nair",
            profile: "Backend Developer",
            views: "The company focuses on innovation and professional growth. My experience here has significantly enhanced my database management and backend development skills.",
        },
        {
            studentName: "Ananya Iyer",
            profile: "Full Stack Developer",
            views: "The dynamic and engaging work environment has been fantastic. I have become proficient in both frontend and backend development, making me a versatile developer.",
        },
        {
            studentName: "Ananya Iyer",
            profile: "Full Stack Developer",
            views: "The dynamic and engaging work environment has been fantastic. I have become proficient in both frontend and backend development, making me a versatile developer.",
        },
        {
            studentName: "Ananya Iyer",
            profile: "Full Stack Developer",
            views: "The dynamic and engaging work environment has been fantastic. I have become proficient in both frontend and backend development, making me a versatile developer.",
        },
    ]
    
return (
        <>
        <div>
           <div className="mt-10">
           <p className="text-7xl font-semibold">"Where Dreams Meet Opportunities:</p>
           <p className="text-7xl font-semibold ms-7 mt-1">Your Placement Journey</p>
           <p className="text-7xl font-semibold ms-7 mt-1">Starts Here."</p>
           </div>

           <div className="flex justify-between mt-14">
              <div className="placementContent">
                <img src="/images/placementOne.jpg" className="rounded-lg"></img>
              </div>
              <div className="placementContent">
              <img src="/images/placementThree.jpg" className="rounded-lg"></img>
              </div>
              <div className="placementContent">
              <img src="/images/placementFour.jpg" className="rounded-lg"></img>
              </div>
           </div>

           <div className="mt-10 pt-5">
            <p className="text-6xl font-semibold">Placements</p>
           <div className="flex flex-wrap justify-between border border-red-800">
            {studentData?.map((item)=>
                    <div className="border border-white mt-5 mb-10 placedStudentsCard">
                        <div className="h-48 border border-red-800"> Profile</div>
                        <div><p className="ms-5 studentName">{item?.studentName}</p></div>
                    </div>
                )}
           </div>
           </div>
        </div>
        </>
  );
};

export default Placement;
