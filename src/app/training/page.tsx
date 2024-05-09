"use client"
import { useEffect, useState } from "react";
import RootLayout from "../layout"
const process = () => {
    let cardContent = [
        {
            "title" : "Profile Building",
            "content" :"Certainly! Building a strong profile as an IT professional is essential for showcasing your expertise, experience, and skills in the technology industry",
            "buttonName" : "Explore"
        },
        {
            "title" : "Learning",
            "content" :`Our courses are carefully crafted by industry experts to cover the latest technologies, tools, and best practices in the IT field. From programming languages and software development frameworks to cybersecurity and cloud computing, our curriculum is designed to address the most in-demand skills sought by employers.
            `,
            "buttonName" : "Explore"
        },
        {
            "title" : "Mock Interview",
            "content" :`Invest in your professional development and elevate your interview skills with our Mock Interview Program for IT professionals. Whether you're preparing for your first job interview, transitioning to a new role, or aiming for a career advancement, our program provides the resources, support, and guidance you need to excel.
            `,
            "buttonName" : "Explore"  
        },
        {
            "title" : "Live Projects",
            "content" :`Elevate your IT career to new heights with our Live Project Program, where theory meets practice and classroom learning translates into real-world impact. Gain valuable experience, expand your skill set, and make meaningful contributions to businesses and organizations through hands-on projects that challenge and inspire.
            `,
            "buttonName" : "Explore"  
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
            <div className="counter mt-40 text-white">{index+1}</div>
            <div className={`${(index%2==0) ? `glassBackground rounded p-4 flex flex-col justify-between leading-normal p-6 mt-40 me-40` :`glassBackground rounded p-4 flex flex-col justify-between leading-normal p-6 mt-40 ms-40`}`}>
                <div className="mb-8">
                    <div className="text-white font-bold text-6xl mb-2"><span>{item?.title}</span></div>
                    <p className=" text-base text-wrap text-xl text-white py-5">{item?.content}</p>
                    </div>
                <div className="flex items-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{item?.buttonName}
                    </button>
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
export default process;