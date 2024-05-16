import "../../../styles/contact.css";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
const Placement = () => {
    const studentData = [
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
        {   
            src:"/images/oneStdnt.png",
            studentName: "Aarav Sharma",
            profile: "Web Developer",
            views: "The company has an excellent work culture that encourages learning and growth. I was able to enhance my skills in HTML, CSS, and JavaScript significantly.",
            placedAt: "TSC"
        },
    ]
return (
        <>
        <div>
           <div className="justify-between mt-14 successStories">
            <div className="w-full flex flex-col items-center justify-center">
             <p className="text-8xl pt-14 pb-12 font-semibold">Success <span className="ourStories">Stories</span></p>
             <p className="text-3xl font-semibold">Our learners are the centre of our universe. We take a lot of pride in their journey.</p>
             <p className="text-3xl font-semibold mt-2">These stories and testimonials fuel our ambitions at tech.</p>
            </div>
            <div className="flex justify-center mt-10">
              <button type="button" className="ourStories border-2 w-3/12 p-5 text-2xl font-semibold rounded-lg">
                 EXPLORE OUR COURSES
              </button>
            </div>
            <div className="w-full mt-10 pb-10">
               <div className="m-auto fixedWidth border analysedDataContainer rounded-lg flex items-center justify-between">
                    <div className="w-1/4 analysedData">
                        <p className="text-center text-3xl">Student Placed</p>
                        <p className="textColor text-center text-4xl mt-2 font-semibold">2000+</p>
                    </div>
                    <div className="h-16 border border-white">
                        
                    </div>
                    <div className="w-1/4 analysedData">
                        <p className="text-center text-3xl">Average Package</p>
                        <p className="textColor text-center text-4xl mt-2 font-semibold">5LPA</p>
                    </div>
                    <div className="h-16 border border-white">
                        
                    </div>
                    <div className="w-1/4 analysedData">
                        <p className="text-center text-3xl">Salary Hike</p>
                        <p className="textColor text-center text-4xl mt-2 font-semibold">50%</p>
                    </div>
                    <div className="h-16 border border-white">
                        
                    </div>
                    <div className="w-1/4 analysedData">
                        <p className="text-center text-3xl">Hiring Partners</p>
                        <p className="textColor text-center text-4xl mt-2 font-semibold">700+</p>
                    </div>
               </div>
            </div>
           </div>

           <div className="pt-5 studentJourney">
            <p className="text-5xl mt-10 text-center font-semibold">Take a peek into the journeys of our students</p>
            <div className="flex flex-wrap fixedWidth justify-between p-5">
            {studentData?.map((item)=>
                    <div className="mt-5 mb-10 placedStudentsCard rounded-lg">
                        <div className="relative">
                            <div className="studentPic flex justify-center rounded-t-lg"> 
                                <Image
                                src={`${item.src}`}
                                width={350}
                                height={200}
                                />
                            </div>

                            <div className="absolute flex justify-between studentName w-full border glass-card p-2">
                                <div>
                                <p className="text-black">{item?.studentName}</p>
                                <p className="text-black">{item?.profile}</p>
                                </div>
                                <div>
                                <p className="text-black">Placed At</p>
                                <p className="placedAt text-black text-center rounded-lg">{item?.placedAt}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                          <p className="text-xl">{item?.views}</p>
                        </div>
                    </div>
                )}
           </div>
           </div>

           <div>
             <div className="border fixedWidth rounded-lg">
                <div>
                    <p>100% Job Assurance with Tech Academy Career</p>
                </div>
             </div>
           </div>
        </div>
        </>
  );
};

export default Placement;
