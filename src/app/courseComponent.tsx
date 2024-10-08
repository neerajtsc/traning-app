import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
  import { useState, useEffect } from 'react';
  const Course = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('course-heading');
      if (!element) return;
      
      const top = element.getBoundingClientRect().top;
      const isVisible = top >= 0 && top <= window.innerHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
         <div className="">
          <div className="fixedWidth">
        <p className={`my-14 text-center text-6xl font-bold ${isVisible ? 'heading' : ''}`} id="course-heading">Web Design Course Curriculum</p>
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
            <AccordionTrigger className="font-bold text-xl">Module: 7 Basic React JS</AccordionTrigger>
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
            <AccordionTrigger className="font-bold text-xl">Module: 8 Live Project</AccordionTrigger>
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
         </div>
         </div>
        </>
    )
}

export default Course;