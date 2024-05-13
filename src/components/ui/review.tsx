"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./carousel";
  import { CardContent, Card } from "./card";
  import Autoplay from "embla-carousel-autoplay"
import { useState } from "react";
import "../../../styles/review.css";
import Image from "next/image";

const Review = () => {
    const carouselItems = [{
        id: 1,
        src:'/images/studyOne.jpg',
        desc:'1The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 2,
        src:'/images/studyTwo.jpg',
        desc:'2What I appreciate most about [Your Educational Site Name] is its interactive learning approach. The hands-on exercises and projects not only helped me understand the concepts better but also allowed me to apply what I learned in real-world scenarios.'
      },
      {
        id: 3,
        src:'/images/studyThree.jpg',
        desc:'3The instructors are knowledgeable and engaging, making the learning experience enjoyable. I also liked the community aspect of the platform, where I could connect with fellow learners and seek help whenever I needed it'
      },
      {
        id: 4,
        src:'/images/studyFour.jpg',
        desc:'4The platform provides hands-on exercises, coding challenges, and real-world projects that allow learners to apply their knowledge in practical scenarios. This interactive approach not only reinforces learning but also fosters problem-solving skills essential for success in web development.'
      },
      {
        id: 5,
        src:'/images/studyTwo.jpg',
        desc:'5The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 6,
        src:'/images/studyFour.jpg',
        desc:'6The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 7,
        src:'/images/studyOne.jpg',
        desc:'7The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 8,
        src:'/images/studyThree.jpg',
        desc:'8The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 9,
        src:'/images/studyThree.jpg',
        desc:'9The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      },
      {
        id: 10,
        src:'/images/studyThree.jpg',
        desc:'10The educational materials provided are top-notch. From beginner-friendly tutorials to in-depth courses covering advanced topics, [Your Educational Site Name] caters to learners of all levels. The content is well-structured, easy to follow, and regularly updated to keep pace with the ever-evolving web development landscape'
      }
    ];
      const [startIndex, setStartIndex] = useState(0);
    
      const handleNext = () => {
        setStartIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrev = () => {
        setStartIndex((prevIndex) =>
          prevIndex === 0 ? carouselItems.length - 3 : prevIndex - 1
        );
      };
    return (
        <>
        <div className="">
        <div className="flex sliderContent m-auto">
          <div className="">
                  <Carousel className="w-full "
                    plugins={[
                      // Autoplay({
                      //   delay: 2000,
                      // }),
                    ]}>
                    <CarouselContent className="-ml-1">
                      {carouselItems.map((item_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                          <div className="p-1">
                            <Card className="customCards">
                              <CardContent className="p-0 flex flex-col text-white items-center justify-center object-cover">
                               <div className="p-5 flex justify-center w-full">
                                     <Image className="reviewerProfile" src={item_.src} alt="reviewer" width={95} height={95}/>
                               </div>
                               <div className="reviewerCard p-5">
                                <p>{item_.desc}</p>
                               </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                </div>
          {/* <div className="custom-carousel flex w-full">
            <div className="actionBtn">
              <div className="actionPerformed">
                <button onClick={handlePrev}>
                  <img src="/images/prev.png" alt="Previous"></img>
                </button>
              </div>
            </div>
            <div className="carousel-item actionCard flex">
              {carouselItems
                .slice(startIndex, startIndex + 3)
                .map((item) => (
                  <div key={item.id} className="slidingCard">
                    <div className="profileContainer">
                      <img
                        className="reviewerProfile"
                        src={item.src}
                        alt={`Item ${item.id}`}
                      ></img>
                    </div>
                    <p className="mt-5">{item.desc}</p>
                  </div>
                ))}
            </div>
            <div className="actionBtn">
              <div className="actionPerformed">
                <button onClick={handleNext}>
                  <img src="/images/next.png" alt="Next"></img>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
        </>
    )
}

export default Review;