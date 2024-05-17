"use client"
import * as React from "react"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "../components/ui/select"
import { Button } from "../components/ui/button"
import { CardContent, Card } from "../components/ui/card"
import { PhoneInput } from "../components/ui/phone";
import { useState, useEffect } from 'react';
import Contact from "../components/ui/contact";
import FaqComponent from "./faqComponent";
import Review from "../components/ui/review";
import Image from "next/image";
import Ceo from "../components/ui/ceo";
import Advisory from "@/components/ui/advisory"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';
import { useRouter } from "next/navigation"
import Leadership from "@/components/ui/leadership"
// import Course from "./courseComponent"

export default function Home() {
  const [text, setText] = useState('');
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const fullText = "Become the software engineer that companies love to hire ...";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let uspContent = [
    {
        "id" : "01",
        "title" : "Work Culture",
        "content" :"Beyond mere productivity, the live office environment prioritizes the cultivation of a strong sense of community. From company-wide celebrations to team-building activities and volunteer initiatives, employees are encouraged to forge meaningful connections with their colleagues. ",
        "buttonName" : "Enroll Now"
    },
    {
        "id" : "02",
        "title" : "Industrial Exposure",
        "content" :`This experiential learning not only reinforces classroom learning but also hones critical thinking skills, problem-solving abilities, and adaptability – qualities that are essential for success in any professional field..
        `,
        "buttonName" : "Explore"
    },
    {
        "id" : "03",
        "title" : "ISO Certification",
        "content" :`In a competitive job market, having an ISO certification can differentiate you from other candidates and position you as a highly qualified and trustworthy professional. Earning an ISO certification showcases your commitment and adherence to international standards of quality and best practices.
        `,
        "buttonName" : "Explore"  
    },
    {
        "id" : "04",
        "title" : "Guarantee",
        "content" :`
        The placement guarantee course from Trainings is specifically designed to help freshers embark upon their professional journey with confidence. These professional courses with job placement transforming beginners into job-ready professionals who can grow to become domain leaders.
        `,
        "buttonName" : "Explore"  
    }

];
  let processContent = [
    {
        "id" : "01",
        "title" : "Enrollment",
        "content" :"Welcome to our course enrollment page! We're excited that you're interested in joining our program. Whether you're looking to expand your skills, advance your career, or pursue a new passion, we have a course that's right for you.",
        "buttonName" : "Enroll Now"
    },
    {
        "id" : "02",
        "title" : "Shortlisting",
        "content" :`All applications will undergo an initial screening process to assess qualifications, experience, and suitability for the role. Our hiring team will carefully review each application to identify candidates who meet our criteria for shortlisting.
        `,
        "buttonName" : "Explore"
    },
    {
        "id" : "03",
        "title" : "Interview",
        "content" :`Shortlisted candidates will be invited to participate in further assessments or interviews to evaluate their skills, competencies, and fit for the role. After thorough evaluation and consideration, we will select the most qualified candidate for the training process.
        `,
        "buttonName" : "Explore"  
    },
    {
        "id" : "04",
        "title" : "Fee Submission",
        "content" :`Kindly submit your fee by after interview. Payment options include online payment or bank transfer. Late payments may incur additional charges.
        `,
        "buttonName" : "Payment"  
    }

];
let trainingContent = [
  {
      "id" : "01",
      "title" : "Profile Building",
      "content" :"Certainly! Building a strong profile as an IT professional is essential for showcasing your expertise, experience, and skills in the technology industry",
      "buttonName" : "Explore"
  },
  {
      "id" : "02",
      "title" : "Learning",
      "content" :`Our courses are carefully crafted by industry experts to cover the latest technologies, tools. From programming languages and software development frameworks to cybersecurity and cloud computing, our curriculum is designed to address the most in-demand skills sought by employers.
      `,
      "buttonName" : "Explore"
  },
  {
      "id" : "03",
      "title" : "Mock Interview",
      "content" :`Invest in your professional development and elevate your interview skills with our Mock Interview Program for IT professionals. Transitioning to a new role, our program provides the resources, support, and guidance you need to excel.
      `,
      "buttonName" : "Explore"  
  },
  {
      "id" : "04",
      "title" : "Live Projects",
      "content" :`Elevate your IT career to new heights with our Live Project Program, where theory meets practice. Gain valuable experience, expand your skill set, and make meaningful contributions to businesses and organizations through hands-on projects that challenge and inspire.
      `,
      "buttonName" : "Explore"  
  }

];

const handleModal = () => {
  setOpenModal(true);
}
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setAnimationFinished(true);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Clean up on component unmount
  }, [fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 3 ? 0 : prevIndex + 1
      );
    }, 8000); // Total duration of 8 seconds for one cycle (4 images x 2 seconds each)

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push('/course');
  }

  const handleProcess = () => {
    router.push('/process')
  }

  const handleTraining = () => {
    router.push('/training')
  }

  const closeModal = () => {
    setOpenModal(false)
  }
  
  return (
    <>
      <main className="flex scrollWatcher">
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] w-full fadeIn">
          {/* <img src="/images/beams-home@95.jpg" alt="" className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]" /> */}
          <div className="relative mx-auto mt-16 grid contentContainer max-w-container grid-cols-1 sm:mt-20 fadeIn">
            <div className="col-start-1 row-start-1 h-7 text-base font-bold leading-7 text-sky-500" aria-hidden="true"></div>
            <div className="h-64 typing-animation col-start-1 row-start-2 mt-7 max-w-[36rem] text-5xl sm:leading-tight font-extrabold tracking-tight text-slate-900 sm:text-6xl text-white xl:max-w-[50.5rem]">
              {text}
              {!animationFinished && <span className="typing-cursor">_</span>} 
              </div>
            <p className="col-start-1 row-start-3 mt-4 text-2xl text-slate-700 text-white xl:max-w-[50.5rem]">Welcome to India’s most Innovative Institute of IT Training.</p>
            {/* <div className="col-start-1 row-start-4 mt-20 mb-8 flex bg- flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 cursor-pointer">
              <Link className="inline-flex justify-center bg-white rounded-lg text-lg p-5 font-bold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" href="/course">
                <span className="text-black">
                  Explore <span aria-hidden="true" className="hidden text-slate-400 sm:inline">→</span>
                </span>
              </Link>
            </div> */}
            <button className="btn bg-white text-black w-32 px-2 py-3 font-bold rounded" onClick={handleClick}>Explore</button>
            <div className=" col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
              <div className="w-2/5 -ml-[32rem] mt-12 h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
                {/* <div className="flex justify-end">
                  <div className="relative flex items-end">
                    <div className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute left-16 top-full -mt-px h-8 overflow-hidden">
                      <div className="flex -mt-px h-[2px] w-56">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      </div>
                    </div>
                    <div className="relative z-10 p-4">
                      <div className="absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                      <div className="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                      <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                      <div className="absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden">
                        <div className="flex -mb-px h-[2px] w-56">
                          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        </div>
                      </div>
                      <div className="w-[28.5rem]  divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                        <Card className=" bg-transparent">
                          <CardContent className="bg-transparent">
                            <div className="space-y-2">
                              <div className="mt-4 ">
                                <h1 className="text-4xl font-bold text-center">Inquiry</h1>
                                <p className="mt-2 text-xs antialiased font-medium font-san text-zinc-500 dark:text-zinc-400">
                                  Fill out the form below and we will get back to you as soon as possible.
                                </p>
                              </div>
                              <div className="space-y-4">
                                <div className="space-y-1">
                                  <Label htmlFor="first-name">Full name</Label>
                                  <Input id="first-name" placeholder="Enter your first name" />
                                </div>
                                <div className="space-y-1">
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" placeholder="Enter your email" type="email" />
                                </div>
                                <div className="space-y-1 ">
                                  <Label htmlFor="Qualification">Qualification</Label>
                                  <Select>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Qualification" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>Qualifications</SelectLabel>
                                        <SelectItem value="10th">10th</SelectItem>
                                        <SelectItem value="12th">12th</SelectItem>
                                        <SelectItem value="Diploma">Diploma</SelectItem>
                                        <SelectItem value="Graduate">Graduate</SelectItem>
                                        <SelectItem value="masters">Masters</SelectItem>
                                        <SelectItem value="Others">Others</SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-1">
                                  <Label htmlFor="Contract">Contract</Label>
                                  <Input id="Contract" placeholder="Enter your Contract" type="number" />
                                  <PhoneInput placeholder="Enter a phone number" defaultCountry="IN" maxLength={12} />
                                </div>
                                <Button className="bg-gray-800 text-white" type="submit">
                                  Send message
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="p-3 relative overflow-hidden mt-12 studyImageContainer rounded-xl">
                <Image
                  src="/images/studyOne.jpg"
                  className={`studyImage rounded-xl ${currentImageIndex === 0 ? "animate" : ""}`}
                  alt="studyOne"
                  width={528}
                  height={384}
                />
                <Image
                  src="/images/studyTwo.jpg"
                  className={`studyImage rounded-xl ${currentImageIndex === 1 ? "animate" : ""}`}
                  alt="studyTwo"
                  width={528}
                  height={384}
                />
                <Image
                  src="/images/studyThree.jpg"
                  className={`studyImage rounded-xl ${currentImageIndex === 2 ? "animate" : ""}`}
                  alt="studyThree"
                  width={528}
                  height={384}
                />
                <Image
                  src="/images/studyFour.jpg"
                  className={`studyImage rounded-xl ${currentImageIndex === 3 ? "animate" : ""}`}
                  alt="studyFour"
                  width={528}
                  height={384}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="px-16">
        <p className=" my-12 text-center text-6xl font-bold">Web Design Course Curriculum</p>
        <Accordion type="single" collapsible className="w-ful rounded p-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">Module: 1  Introduction about Web Design</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-xl">Module: 2 HTML?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Basic of HTML
                </li>
                <li>
                  HTML Editor
                </li>
                <li>
                  Elements
                </li>
                <li>
                  HTML Tags
                </li>
                <li>
                  HTML Tables
                </li>
                <li>
                  HTML Forms
                </li>


              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-xl">Module: 3 CSS</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-xl">Module: 4 Javascript</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-xl">Module: 5 Jquery</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-xl">Module: 6 Bootstrap </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-bold text-xl">Module: 8 Basic React JS</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-bold text-xl">Module: 9 Live Project</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                  Introduction Lecture
                </li>
                <li>
                  What is Front-end development? Role and responsibility about front-end development?
                </li>
                <li>
                  Basic introduction about Front-end tools and software
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div> */}
      <div>
        <Ceo/>
      </div>

      <div className="fadeIn">
      <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Advisory Council
        </p>
        <div>
          <Advisory/>
        </div>
      </div>

      <div className="fadeIn">
      <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Leadership Team
        </p>
        <div>
          <Leadership/>
        </div>
      </div>
      {/* <div>
        <Course/>
      </div> */}
      <div className="fixedWidth pb-0 fadeIn">
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          We&apos;re working on
        </p>
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          some cool technologies
        </p>
        <div className="flex">
          <div className="flex gap-4 mt-4 w-full justify-between">
            <div className="ourWorkingTech">
              <div className="glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                </svg>
              </div>
              <div className="glassIco flex mt-4 justify-center items-center  p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
              </div>
            </div>

            <div className="ourWorkingTech">
              <div className="glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <linearGradient id="Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1" x1="24" x2="24" y1="41" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#643499"></stop><stop offset=".011" stop-color="#68369f"></stop><stop offset=".135" stop-color="#773db6"></stop><stop offset=".193" stop-color="#8042c3"></stop><stop offset=".248" stop-color="#8343c8"></stop><stop offset=".388" stop-color="#8444c9"></stop><stop offset=".732" stop-color="#9751d2"></stop><stop offset=".997" stop-color="#9c55d4"></stop><stop offset=".998" stop-color="#9c55d4"></stop><stop offset="1" stop-color="#9c55d4"></stop></linearGradient><path fill="url(#Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1)" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
                </svg>
              </div>
              <div className="glassIco mt-4 flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80">
                  <path fill="#8bb7f0" d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"></path><path fill="#4e7ab5" d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"></path><g><path fill="#8bb7f0" d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"></path><path fill="#4e7ab5" d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"></path></g>
                </svg>
              </div>
            </div>

            <div className="ourWorkingTech">
              <div className="flex glassIco justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                </svg>
              </div>
              <div className="mt-4 glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg fill="#2646E5" viewBox="0 0 24 24" role="img" width="100" height="100" xmlns="http://www.w3.org/2000/svg" stroke="#2646E5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Atlassian icon</title>
                  <path d="M19.31 23.957H15.71a1.26 1.26 0 0 1-1.312-.792c-1.332-2.665-2.78-5.288-3.987-8.046a15.25 15.25 0 0 1 .885-14.47c.166-.281.52-.625.791-.625s.593.375.74.666q5.444 10.89 10.898 21.788c.542 1.041.292 1.468-.905 1.479zm-14.573 0H1.04c-1.041 0-1.27-.417-.812-1.333q2.8-5.538 5.549-11.055c.5-1.041.895-1.041 1.592-.177a12.221 12.221 0 0 1 2.51 11.17c-.344 1.322-.532 1.405-1.864 1.405z"></path>
                </g></svg>
              </div>
            </div>

            <div className="ourWorkingTech">
              <div className="flex glassIco justify-center items-center  p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <linearGradient id="jOxEAtqKLV9JfRrHHmqLMa_BUnExfsRs3CW_gr1" x1="3.381" x2="44.593" y1="25.73" y2="25.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33c481"></stop><stop offset="1" stop-color="#21a366"></stop></linearGradient><path fill="url(#jOxEAtqKLV9JfRrHHmqLMa_BUnExfsRs3CW_gr1)" d="M23.987,17l-5.094-8.727C18.795,8.104,18.614,8,18.418,8H3.931	C3.507,8,3.243,8.46,3.457,8.827l20.056,34.36c0.212,0.363,0.737,0.363,0.949,0l20.056-34.36C44.731,8.46,44.467,8,44.043,8H29.556	c-0.195,0-0.376,0.104-0.475,0.273L23.987,17z"></path><linearGradient id="jOxEAtqKLV9JfRrHHmqLMb_BUnExfsRs3CW_gr2" x1="11.146" x2="36.828" y1="19" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".189" stop-color="#313437"></stop><stop offset="1" stop-color="#45494d"></stop></linearGradient><polygon fill="url(#jOxEAtqKLV9JfRrHHmqLMb_BUnExfsRs3CW_gr2)" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon><polygon fill="none" points="23.987,30 36.828,8 29.24,8 23.987,17 18.734,8 11.146,8"></polygon><polygon fill="none" points="28.082,8 19.892,8 23.987,15.016"></polygon><path d="M37.26,8.252l-12.841,22l-0.432,0.74l-0.432-0.74l-12.841-22L10.567,8H9.988l0.294,0.504l12.841,22	l0.864,1.48l0.864-1.48l12.841-22L37.986,8h-0.579L37.26,8.252z M36.828,9h0.005H36.828z" opacity=".05"></path><polygon points="36.828,8 23.987,30 11.146,8 10.567,8 10.714,8.252 23.555,30.252 23.987,30.992 24.419,30.252 37.26,8.252 37.407,8 36.833,8" opacity=".07"></polygon>
                </svg>
              </div>
              <div className="mt-4 glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#2395ec" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"></path><path fill="#2395ec" d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"></path><path fill="#2395ec" d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"></path><path fill="#2395ec" d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"></path><path fill="#2395ec" d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"></path><path fill="#2395ec" d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"></path><path fill="#2395ec" d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"></path><path fill="#2395ec" d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"></path><path fill="#2395ec" d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"></path><path fill="#2395ec" d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"></path>
                </svg>
              </div>
            </div>

            <div className="ourWorkingTech">
              <div className="flex glassIco justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100" preserveAspectRatio="xMidYMid"><g transform="matrix(.217946 0 0 .217946 4.120542 14.085548)">
                  <path d="M471.05 51.6c-1.245 0-2.455.257-3.526.863l-33.888 19.57c-2.193 1.263-3.526 3.65-3.526 6.188v39.07c0 2.537 1.333 4.92 3.526 6.187l8.85 5.1c4.3 2.12 5.886 2.086 7.843 2.086 6.366 0 10-3.863 10-10.577V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.4-1.007.935v38.565c0 2.976-3.1 5.97-8.13 3.454l-9.2-5.396c-.325-.177-.576-.5-.576-.863v-39.07c0-.37.248-.748.576-.935l33.817-19.5c.317-.182.694-.182 1.007 0l33.817 19.5c.322.193.576.553.576.935v39.07c0 .373-.187.755-.504.935l-33.888 19.5c-.3.173-.7.173-1.007 0l-8.706-5.18c-.26-.152-.613-.14-.863 0-2.403 1.362-2.855 1.52-5.108 2.302-.555.193-1.4.494.288 1.44l11.368 6.7c1.082.626 2.288.935 3.526.935 1.255 0 2.443-.3 3.526-.935l33.888-19.5c2.193-1.276 3.526-3.65 3.526-6.187v-39.07c0-2.538-1.333-4.92-3.526-6.188l-33.888-19.57c-1.062-.606-2.28-.863-3.526-.863zm9.066 27.918c-9.65 0-15.397 4.107-15.397 10.936 0 7.4 5.704 9.444 14.966 10.36 11.08 1.085 11.944 2.712 11.944 4.893 0 3.783-3.016 5.396-10.145 5.396-8.956 0-10.925-2.236-11.584-6.7-.078-.478-.446-.863-.935-.863h-4.4a1.03 1.03 0 0 0-1.007 1.007c0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.2 16.908-11.584 0-7.3-4.996-9.273-15.397-10.65-10.5-1.4-11.512-2.07-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.953 0 9.523 1.5 10.577 6.188.092.44.48.8.935.8h4.4c.27 0 .532-.166.72-.36.184-.207.314-.44.288-.72-.68-8.074-6.064-11.872-16.908-11.872z" fill="#83cd29" /><path d="M271.82.383a2.18 2.18 0 0 0-1.079.288 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.252 1.024-.72 1.295a1.5 1.5 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0L218.218 74.42c-1.342.774-2.16 2.264-2.16 3.813v41.443a4.31 4.31 0 0 0 2.159 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V16.356c0-1.572-.858-3.047-2.23-3.813L272.9.598c-.336-.187-.708-.22-1.08-.216zM40.86 52.115c-.685.028-1.328.147-1.943.504L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.93 132.7c0 .774.4 1.492 1.08 1.87.667.4 1.494.4 2.158 0l21.297-12.232c1.35-.8 2.23-2.196 2.23-3.74V92.623c0-1.55.815-2.97 2.16-3.74l9.066-5.252a4.25 4.25 0 0 1 2.158-.576 4.24 4.24 0 0 1 2.159.576L52.3 88.88c1.343.77 2.158 2.192 2.158 3.74v25.974c0 1.546.9 2.95 2.23 3.74l21.297 12.232c.67.4 1.495.4 2.158 0 .66-.38 1.08-1.097 1.08-1.87l.072-55.617a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.476-1.943-.504h-.43zm322.624.504a4.29 4.29 0 0 0-2.159.576l-35.903 20.722c-1.34.775-2.16 2.192-2.16 3.74V119.1c0 1.558.878 2.97 2.23 3.74l35.615 20.3c1.315.75 2.92.807 4.245.07l21.585-12.016c.685-.38 1.148-1.09 1.15-1.87s-.403-1.482-1.08-1.87l-36.12-20.722c-.676-.386-1.15-1.167-1.15-1.943V91.83c0-.774.48-1.484 1.15-1.87l11.224-6.476c.668-.386 1.488-.386 2.16 0L375.5 89.96a2.15 2.15 0 0 1 1.079 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.388 1.488.39 2.16 0L401.33 91.4c1.335-.776 2.16-2.197 2.16-3.74v-10a4.32 4.32 0 0 0-2.159-3.741l-35.687-20.722a4.28 4.28 0 0 0-2.159-.576zm-107.35 30.94a1.21 1.21 0 0 1 .576.143l12.303 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.935l-12.303 7.123c-.335.19-.744.19-1.08 0l-12.303-7.123c-.335-.193-.576-.55-.576-.935V91.758c0-.386.242-.74.576-.935l12.303-7.122c.168-.097.316-.143.504-.143v-.001z" fill="#404137" /><path d="M148.714 52.402a4.31 4.31 0 0 0-2.16.576l-35.903 20.65c-1.342.774-2.158 2.265-2.158 3.813v41.443a4.3 4.3 0 0 0 2.158 3.74l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V77.44c0-1.55-.816-3.04-2.16-3.813l-35.903-20.65a4.27 4.27 0 0 0-2.16-.576zm214.7 36.983c-.143 0-.302 0-.432.07l-6.907 4.03a.84.84 0 0 0-.432.719v7.915c0 .298.173.57.432.72l6.907 3.957a.75.75 0 0 0 .79 0l6.907-3.957c.256-.147.432-.422.432-.72v-7.915c0-.298-.175-.57-.432-.72l-6.907-4.03c-.128-.076-.216-.07-.36-.07z" fill="#83cd29" /></g>
                </svg>
              </div>
              <div className=" mt-4 glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                </svg>
              </div>
            </div>

            <div className="ourWorkingTech">
              <div className=" flex glassIco justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                </svg>
              </div>
              <div className="mt-4 glassIco flex justify-center items-center p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg transform scale-100 hover:scale-110 ">
                <svg width="100px" height="100px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"> </path> </g> </g></svg>
              </div>
            </div>

          </div>
        </div>
      </div>
     {/* Process */}

     <div className="fixedWidth fadeIn">
    <div className="py-6">
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Why you join us?
        </p>
      </div>
      <div className="flex">
        <div className="flex justify-between">
          { uspContent?.map((item, index) => (
            <>
            <div className="flip-card me-10">
              <div className="flip-card-inner ">
                <div className="flip-card-front flex flex-col rounded-lg">
                  <p className="text-9xl idIndex">{item?.id}</p>
                  <p className="text-5xl font-semibold rounded-t-lg mb-5 py-2 px-4">{item?.title}</p>
                </div>
                <div className="flip-card-back rounded-lg">
                  {item?.content}
                </div>
              </div>
            </div>
            </>
          ))
        
        }
        </div>
      </div>
    </div>

    <div className="fixedWidth fadeIn">
    <div className="py-6">
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          How you can join us?
        </p>
      </div>
      <div className="flex">
        <div className="flex justify-between">
          { processContent?.map((item, index) => (
            <>
            <div className="flip-card me-10">
              <div className="flip-card-inner ">
                <div className="flip-card-front flex flex-col rounded-lg">
                  <p className="text-9xl idIndex">{item?.id}</p>
                  <p className="text-5xl font-semibold font-bold rounded-t-lg mb-5 py-2 px-4">{item?.title}</p>
                </div>
                <div className="flip-card-back rounded-lg">
                  {item?.content}
                </div>
              </div>
            </div>
            </>
          ))
        
        }
        </div>
      </div>
    </div>

      {/* Process */}

      {/* Training */}

      <div className="fixedWidth fadeIn">
      <div className="py-6">
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Our Highly Rated
        </p>
        <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Outcome Based Training Programme
        </p>
      </div>
      <div className="flex">
      <div className="flex justify-between">
        { trainingContent?.map((item, index) => (
          <>
          <div className="flip-card me-10">
              <div className="flip-card-inner ">
                <div className="flip-card-front flex flex-col rounded-lg">
                  <p className="text-9xl idIndex">{item?.id}</p>
                  <p className="text-5xl font-semibold font-bold rounded-t-lg mb-5 py-2 px-4">{item?.title}</p>
                </div>
                <div className="flip-card-back rounded-lg">
                  {item?.content}
                </div>
              </div>
            </div>
          </>
        ))
      
      }
      </div>
      </div>
      </div>

      {/* Training */}
      


      {/* <div className="p-14 ">
        <p className=" my-4 text-center text-2xl font-bold text-slate-700">
          Welcome Aboard
        </p>
        <Carousel className="w-full "
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
          <CarouselContent className="-ml-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="p-0 flex items-center justify-center object-cover rounded">
                      <img className="rounded" src="/images/tsc1.png" alt="" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div> */}
      <button className="btn bg-green-500 py-2 px-4 enquiryBtn" onClick={handleModal}>Enquire Now</button>
      {openModal && 
      <>
      <div className="modalBackdrop" aria-hidden="true"></div>
      <div id="static-modal" data-modal-backdrop="static" aria-hidden="true" style={{zIndex: "999"}} className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full max-h-full h-full">
      <div className="">
        <form className="slim-scroll h-fit max-h-[80vh] border border-gray-6 bg-white text-black p-4 [&amp;>*]:mb-2" style={{width: "40rem"}}>
          <div className="flex items-center justify-between whitespace-nowrap text-base font-extrabold text-green-500 text-center">
            <div></div>
            <div className="text-4xl">ENQUIRE NOW</div>
            <div>
            <button className="text-gray-500" onClick={closeModal}>X</button>
            </div>
            </div>
          
          <div className="flex flex-col gap-y-0.5 py-6">
            <div className="undefined">
              <input type="text" name="name" placeholder="enter full name" className="h-10 block w-full rounded-sm border border-gray-border p-3 outline-none placeholder:capitalize sm:text-sm text-black"/>
              </div>
              <div>
                <div className="pt-6">
                  <input type="email" name="email" placeholder="enter your email" className="h-10 block w-full rounded-sm border border-gray-border p-3 outline-none placeholder:capitalize sm:text-sm text-black"/>
                  </div>
                  </div>
                      <div className="pt-6">
                        <div className="flex items-start">
                          <div>
                            <input className="block h-10 w-14 rounded-sm border border-gray-border p-2 outline-none placeholder:capitalize md:p-3 mr-2 text-black" value="+91" placeholder="+91"/>
                            </div>
                            <div className="w-full">
                              <input type="text" name="phone" id="phone" placeholder="Mobile Number" className="h-10 block w-full rounded-sm border border-gray-border p-3 outline-none placeholder:capitalize sm:text-sm text-black"/>
                              </div>
                              </div>
                              <div className="w-full pt-6">
                              <input type="text" name="reason" id="reason" placeholder="Reason of Enquiry" className="h-10 block w-full rounded-sm border border-gray-border p-3 outline-none placeholder:capitalize sm:text-sm text-black"/>
                              </div>
                              </div>
                               
                              </div>
                              <button type="submit" className="flex w-full items-center justify-center rounded-sm bg-green-500 px-4 py-2 font-medium text-white disabled:opacity-80  mt-2 ">Continue</button>
                              </form>
                              </div>
        </div>
        </>
        }
      <div className="fixedWidth fadeIn">
      <p className="my-8 text-center text-6xl font-bold text-slate-700 text-white">
          Reviews
        </p>
        {/* <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 ">
                <div className="p-1">
                  <Card className="relative flex flex-col mt-6  bg-black shadow-md bg-clip-border rounded-xl p-4">
                    <article>
                      <div className="flex items-center mb-4">
                        <img className="w-10 h-10 me-4 rounded-full" src={`https://randomuser.me/api/portraits/men/${20 + index}.jpg`} alt="d" />
                        <div className="font-medium dark:text-white text-white">
                          <p>Jese Leos <time  className="block text-sm text-white dark:text-gray-400">Joined on August 2014</time></p>
                        </div>
                      </div>
                      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <h3 className="ms-2 text-sm font-semibold  dark:text-white text-white">Thinking to buy another one!</h3>
                      </div>
                      <footer className="mb-5 text-white text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time>March 3, 2017</time></p></footer>
                      <p className="mb-2 text-white text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                      <p className="mb-3 text-white text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                      <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                      <aside>
                        <p className="mt-1 text-xs text-white text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                        <div className="flex items-center mt-3">
                          <a href="#" className="px-2 py-1.5 text-xs font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                          <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
                        </div>
                      </aside>
                    </article>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
        <Review/>
      </div>
      <div>
       <div className="mt-32">
        <div className="fixedWidth flex fadeIn">
          <div>
            <div className="">
                <p className="text-center text-6xl font-bold">Why head into the battlefield unprepared?</p>
                <p className="px-40 mt-2 text-center">We work with ideas that inspire, engage and excite. Ideas that challenge convention and shape the trends. Through our awe-inspiring personal touch, we aim to make users fall in love with your brand.</p>
            </div>
      <Contact/>
      </div>
      </div>
    </div>
      </div>
      <div>
        <FaqComponent/>
      </div>

      
      <div className="">
        <footer className="bg-dark text-white">
          <div className="">
            <div className="">
              {/* <div className="text-teal-600">
                <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="rgb(34 197 94)"
                  />
                </svg>
              </div> */}

              <div className="mt-8 px-24 py-24 flex justify-between fadeIn">
                {/* <div className="col-span-2">
                  <div>
                    <h2 className="text-2xl font-bold">Get the latest news!</h2>

                    <p className="mt-4">
                    Our Vision is to become the most respected company in the field of IT Services and Solutions in years to come through our service of High-Quality Solutions to our clients and help them grow, while creating an atmosphere within and around the organization where anyone associated with us must feel proud and happy.
                    </p>
                  </div>
                </div> */}

                {/* <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                  <form className="w-full">
                    <label htmlFor="UserEmail" className="sr-only"> Email </label>

                    <div
                      className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                    >
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-smtext-dark p-2"
                      />

                      <button
                        className="mt-1 w-full bg-green-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-green-600 sm:mt-0 sm:w-auto sm:shrink-0"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
               </div> */}

               <div className="">
                <div className="text-4xl text-white font-bold">Tech <span className="underline text-green-500">Superiors</span></div>
                <div className="flex">
                <div>
                <div className="pt-6">
                  <div className="text-2xl">Contact Us</div>
                  <div className="">marketing@techsuperiors.com</div>
                  <div>+91 9910996928</div>
                </div>

                <div className="pt-6">
                  <div className="text-2xl">Head Office - Gurugram</div>
                  <div className="">813P, Sector 47, Gurgaon 122018, Haryana</div>
                  <div>+91 9910996928</div>
                </div>
                </div>
                <div className="ps-9">
                  <div className="pt-6">
                  <div className="text-2xl">Dehradun</div>
                  <div className="">Chrysler Tech Centre, 21, IT Park</div>
                  <div>Sahastradhara Road, Dehradun, Uttarakhand</div>
                </div>

                <div className="pt-6">
                  <div className="text-2xl">Delhi</div>
                  <div className="">A-21, Green Park Extension</div>
                  <div>New Delhi</div>
                </div>
               </div>
               </div>
               </div>
                <div className="col-span-2 sm:col-span-1 pt-16">
                  <p className="font-bold text-xl">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="/" className=" transition hover:opacity-75" > About Us</a>
                    </li>

                    <li>
                      <a href="/gallery" className=" transition hover:opacity-75"> Gallery </a>
                    </li>

                    <li>
                      <a href="/review" className=" transition hover:opacity-75"> Review </a>
                    </li>
                    <li>
                      <a href="/placement" className=" transition hover:opacity-75"> Placement </a>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1 pt-16">
                  <p className="font-bold text-xl">Resources</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="/blog" className=" transition hover:opacity-75"> Blog </a>
                    </li>

                    <li>
                      <a href="/process" className=" transition hover:opacity-75"> Process </a>
                    </li>

                    <li>
                      <a href="/training" className=" transition hover:opacity-75"> Training </a>
                    </li>

                    <li>
                      <a href="/faq" className=" transition hover:opacity-75">FAQ&apos;s</a>
                    </li>

                    <li>
                      <a href="/course" className=" transition hover:opacity-75">Courses</a>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1 pt-16">
                  <p className="font-bold text-xl">Join</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a href="/contact" className=" transition hover:opacity-75"> Partner with Us </a>
                    </li>

                  </ul>
                </div>


              </div>
            </div>
                <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-center">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      <span className="sr-only">Instagram</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      <span className="sr-only">Twitter</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      <span className="sr-only">GitHub</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      <span className="sr-only">Dribbble</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="sm:flex sm:justify-between">
                <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>

                <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>

  );
}


