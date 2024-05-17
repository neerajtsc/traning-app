import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import "../../../../styles/ourCourses.css";
const FrontEnd = () => {
  return (
    <>
      <div className="flex mt-5">
        <div className="w-3/5 p-6">
          <div>
            <p className="text-5xl">Build Websites You'll Love:</p>
            <p className="text-4xl mt-4">
              {" "}
              The Ultimate Front-End Course for Beginners
            </p>
            <p className="mt-10 w-4/5 text-xl">
              "Master web design essentials in our Front End Development course,
              learning HTML, CSS, and JavaScript for dynamic, captivating
              websites."
            </p>
          </div>
          <div className=" mt-10 pt-6 pb-6">
            <button
              type="button"
              className="text-2xl w-2/5 p-4 btnOfCourse rounded-xl"
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="text-2xl w-2/5 p-4 btnOfCourse rounded-xl ms-5"
            >
              Try Master Class
            </button>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            alt="frontEnd"
            width={600}
            height={500}
            src={"/images/frontEnd.png"}
          />
        </div>
      </div>
      <div className="mt-5 border mb-5 rounded-xl">
        <div className="p-5">
          <p className="text-5xl textColor">Experience the new way of learning</p>
          <p className="text-xl mt-3">
            Learn in live classes, solve real-life case studies, get mentored by
            the top 1% experts. Be the talent every recruiter in the industry is
            looking for!
          </p>
          <div className="border mt-10 rounded-xl p-5">
            <p className="text-3xl textColor">Topics Covered</p>
            <div className=" mt-4 flex">
              <div className="w-1/4 p-5">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">HTML</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">CSS</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">JavaScript</p>
                </div>
              </div>
              <div className="w-1/4 p-5">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Responsive Design</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">CSS Frameworks</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">CSS Preprocessors</p>
                </div>
              </div>
              <div className="w-1/4 p-5">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Version Control</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Front End Frameworks</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Web Optimization</p>
                </div>
              </div>
              <div className="w-1/4 p-5">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Accessibility</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Browser Developer Tools</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Web Design Principles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border mt-10 rounded-xl p-5">
            <p className="text-3xl textColor ">Outcomes</p>
            <div className=" mt-4 flex">
              <div className="p-5">
                <div className="flex items-center">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Proficiency in building responsive and visually appealing websites using HTML, CSS, and JavaScript.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Ability to translate design mockups into fully functional web interfaces.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Competence in implementing interactive features and dynamic behavior using JavaScript libraries and frameworks.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Understanding of web performance optimization techniques to ensure fast and efficient loading times.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Skill in utilizing version control systems like Git for collaborative development and code management.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Familiarity with front end frameworks such as React, Angular, or Vue.js for building scalable web applications.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Knowledge of accessibility standards and best practices to ensure inclusivity and usability for all users.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Capability to debug and troubleshoot front end issues using browser developer tools and other debugging techniques.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Confidence in employing CSS preprocessors and frameworks to streamline the styling process and maintain code consistency.</p>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    alt="frontEnd"
                    width={30}
                    height={30}
                    src={"/images/topicArrow.png"}
                  />
                  <p className="text-xl">Preparedness to embark on a career as a front end developer or continue learning and exploring advanced front end development concepts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
