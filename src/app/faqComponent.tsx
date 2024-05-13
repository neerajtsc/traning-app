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
         <div className="px-16">
        <p className={`my-14 text-center text-6xl font-bold ${isVisible ? 'heading' : ''}`} id="course-heading">Frequently Asked Question&apos;s</p>
        <Accordion type="single" collapsible className="w-ful rounded p-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">Module: 1  What is the duration of the IT training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                The duration of our IT training program varies depending on the specific course you choose. Typically, our programs range from a few weeks to several months. Please refer to the course details for more information on the duration of each program.
                </li>
                 
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-xl">Module: 2 What are the prerequisites for enrolling in the IT training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                Prerequisites vary depending on the course. However, most of our IT training programs require a basic understanding of computer fundamentals and proficiency in using common software applications. Some advanced courses may have specific prerequisites such as programming knowledge or prior experience in IT-related fields.
                </li>
                
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-xl">Module: 3 Is there any certification provided upon completion of the training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                Yes, upon successful completion of our IT training program, you will receive a certificate of completion. This certificate validates your participation and achievement in the program and can be a valuable addition to your resume.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-xl">Module: 4 Are the training materials available online or in-person?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                Our IT training programs are available in-person. You can choose the format that best suits your schedule and learning style.
                </li>
                 
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-xl">Module: 5 What learning resources are provided during the training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                During the IT training program, you will have access to a variety of learning resources, including online lectures, interactive tutorials, hands-on labs, and reading materials. Our instructors are also available to provide guidance and support throughout the learning process.
                </li>
                 
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-xl">Module: 6 Can I interact with instructors and fellow participants during the training? </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                Yes, our training programs encourage interaction and collaboration among participants. You will have the opportunity to engage with instructors during live sessions, ask questions, and participate in discussions. Additionally, you can connect with fellow participants through online forums and group activities.
                </li>
                 
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-bold text-xl">Module: 7 Is job placement assistance provided after completing the IT training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                We offer job placement assistance to help our graduates transition into the workforce. Our career services team provides resume building, interview preparation, and job search assistance to help you secure employment in the IT industry.
                </li>
                 
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-bold text-xl">Module: 8 What support is available if I encounter difficulties during the training program?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>
                If you encounter any difficulties during the training program, our support team is here to help. You can reach out to our technical support staff for assistance with technical issues, and our instructors are available to provide academic support and clarification on course material.
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