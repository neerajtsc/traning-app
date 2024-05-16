"use client"
import { useEffect, useState } from "react";
import RootLayout from "../layout"
import Image from "next/image";
const Process = () => {
    let cardContent = [
        {
            "title" : "Enrollment",
            "content" :"Welcome to our course enrollment page! We're excited that you're interested in joining our program. Whether you're looking to expand your skills, advance your career, or pursue a new passion, we have a course that's right for you.",
            "buttonName" : "Enroll Now"
        },
        {
            "title" : "Shortlisting",
            "content" :`All applications will undergo an initial screening process to assess qualifications, experience, and suitability for the role. Our hiring team will carefully review each application to identify candidates who meet our criteria for shortlisting.
            `,
            "buttonName" : "Explore"
        },
        {
            "title" : "Interview",
            "content" :`Shortlisted candidates will be invited to participate in further assessments or interviews to evaluate their skills, competencies, and fit for the role. After thorough evaluation and consideration, we will select the most qualified candidate for the training process.
            `,
            "buttonName" : "Explore"  
        },
        {
            "title" : "Fee Submission",
            "content" :`Kindly submit your fee by after interview. Payment options include online payment or bank transfer. Late payments may incur additional charges.
            `,
            "buttonName" : "Payment"  
        }

    ];
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate thread height based on scroll position
  const threadHeight = Math.min(100, scrollPosition / 15); // Adjust the divisor to control the speed of thread progression

return (
        <RootLayout>
        <div className="thread" style={{ height: `${threadHeight}vh` }}></div>
        <div className="path"></div>
        
        {/* <div className="max-w-sm w-full lg:max-w-full lg:flex mt-60 w-1/2">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 glassBackground rounded p-4 flex flex-col justify-between leading-normal p-6">
    <div className="mb-8">
       
      <div className="text-white font-bold text-6xl mb-2">Enroll</div>
      <p className=" text-base text-wrap text-xl text-white">Welcome to our course enrollment page! We're excited that you're interested in joining our program. Whether you're looking to expand your skills, advance your career, or pursue a new passion, we have a course that's right for you.</p>
    </div>
    <div className="flex items-center">
       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Enroll Now</button>
    </div>
  </div>
</div> */}

<div className="flex justify-evenly flex-col items-center">
{
    cardContent?.map((item, index) => (
        <>
            <div className={`${index==0 ? `mt-32`:`mt-10`} counter text-white`}>{index+1}</div>
            <div className={`${(index%2==0) ? `glassBackground rounded flex flex-col justify-between leading-normal p-6 mt-10 me-40` :`glassBackground rounded flex flex-col justify-between leading-normal p-6 mt-10 ms-40`}`}>
                <div className="flex">
                    <div className="flex items-center" style={{width: "33.33%"}}>
                        <Image src="/images/chilling.jpg" alt="chilling" width={1000} height={233}/>
                    </div>
                    <div className="flex flex-col ps-6 col-md-8" style={{width: "66.66%"}}>
                    <div className="text-white font-bold text-6xl mb-2"><span>{item?.title}</span></div>
                    <p className=" text-base text-wrap text-xl text-white py-5">{item?.content}</p>
                {/* <div className="flex items-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{item?.buttonName}
                    </button>
                </div> */}
                    </div>
                </div>
        </div>
        </>
    ))
}
</div>
<div className="containerLast"></div>
{/* </div> */}
    </RootLayout>
)
}
export default Process;