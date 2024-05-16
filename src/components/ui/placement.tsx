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
                                alt="hiring"
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
             <div className="border m-auto careerAssurance rounded-xl mt-10 mb-10">
                <div className="flex flex-col items-center justify-center pt-5 pb-5">
                    <p className="trackPercent">100% Job Assurance with Tech Academy Career Track</p>
                    <p className="text-6xl mt-5">Take a moonshot at your tech career</p>
                    <p className="mt-3 text-2xl">Explore our courses to enrol today</p>
                </div>
                <div className="flex justify-center mt-5 mb-10">
                    <button type="button" className="exploreCourse bgBack me-14">
                    EXPLORE OUR COURSES
                    </button>
                    <button type="button" className="exploreCourse ms-14">
                    TALK TO ADDMISSION TEAM
                    </button>
                </div>
             </div>

             <div className="border flex m-auto careerAssurance rounded-xl mt-10 mb-10">
                <div className="w-3/5 p-7 mt-5 ms-5">
                   <p className="text-4xl font-semibold">Learning is better with</p>
                   <p className="text-4xl mt-2 font-semibold">Tech Academy Community</p>
                   <p className="text-2xl w-9/12 mt-6">Join a community of serious & passionate tech folks, students, mentors and coaches to accelerate your career.</p>
                   <div className="mt-5">
                    <button type="button" className="border p-5 rounded-xl flex justify-center items-center text-2xl">Join Whatsapp Community
                    <Image
                    src={"/images/whatsapp.png"}
                    width={350}
                    height={200}
                    alt="whatsapp"
                    className="whatsApp ms-3"
                    />
                    </button>
                   </div>
                </div>
                <div className="w-2/5 relative">
                    <div className="Block_Loading_Balls rounded-xl">
                        <p className="text-center text-3xl font-semibold p-10">You can also contact us on</p>
                        <div className="ball_container_sB mt-10">
                            <Image
                            src={"/images/insta.svg"}
                            width={350}
                            height={200}
                            alt="insta"
                            className="loading_ball _a"/>
                            <Image
                            src={"/images/facebook.svg"}
                            width={350}
                            height={200}
                            alt="facebook"
                            className="loading_ball _b"/>
                            <Image
                            src={"/images/linkedin.svg"}
                            width={350}
                            height={200}
                            alt="linkedin"
                            className="loading_ball _c"/>
                        </div>
                    </div>
                </div>
             </div>

           </div>
        </div>
        </>
  );
};

export default Placement;
