import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
const Course = () => {
    return (
        <>
         <div className="px-16 mt-40">
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
 </div>
        </>
    )
}

export default Course;