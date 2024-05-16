"use client"
import React, { useEffect, useState } from "react";
import RootLayout from "../layout";
import "../../../styles/gallery.css";
import Image from "next/image";
const Gallery = () => {
  const [text, setText] = useState('');
  const fullText = "CULTURE";
  const [animationFinished, setAnimationFinished] = useState(false);
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
    }, 100); 

    return () => clearInterval(interval); // Clean up on component unmount
  }, [fullText]);

  
  return (
    <RootLayout>
      {/* <div className="mt-32 text-white">
        <div className="w-11/12 m-auto">
          <div className="p-5 flex">
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <div className="upperPart flex">
                <div className="w-1/2">
                  <div className="p-1">
                    <img src="/images/handShake.jpg" className=""></img>
                  </div>
                  <div className="ps-1 pe-1">
                    <img src="/images/chilling.jpg" className=""></img>
                  </div>
                </div>

                <div className="w-1/2 pt-1">
                  <img src="/images/meeting.jpg" className="meetingImg"></img>
                </div>
              </div>

              < div className="lowerPart flex w-full">
                <div className="w-3/5 p-1">
                  <img src="/images/team.jpg" className=""></img>
                </div>
                <div className="w-2/5 pt-1">
                  <img src="/images/work.jpg" className="workImg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col">
        <div className="mt-14 flex justify-center">
        <div className="w-1/5">
          <Image src="/images/handShake.jpg" alt="handShake" width={1000} height={233}/>
        </div>
        <div className="w-1/4 ms-40">
          <Image src="/images/chilling.jpg" alt="chilling" width={1000} height={233}/>
        </div>
        </div>
        <div className="mb-5 flex justify-evenly">
          <div className="w-1/6">
            <Image src ="/images/meeting.jpg" alt="meeting" width={1000} height={233}/>
          </div>
          <div className="w-1/5 flex items-end flex-col justify-between">
            <div>
            <div className="text-9xl text-white font-bold">{text}</div>
            <div className="text-slate-500 italic text-end">-Building erudites of tommorrow</div>
            </div>
            <div>
            <Image src="/images/team.jpg" alt="team" width={1000} height={233}/>
            </div>
          </div>
          <div className="w-1/4 pt-6">
            <Image src="/images/work.jpg" alt="work" width={1000} height={233}/>
          </div>
        </div>
        <div className="mt-5 fixedWidth">
        <section className="1">
        <section className="parallax">
            <div className="parallax-inner">
                <h1>Forests</h1>
            </div>
        </section>
    <section className="parallax-1">
        <div className="parallax-inner">
            <h1>Beaches</h1>
        </div>
    </section>
    </section>

    <section className="2">
    <section className="parallax-2">
        <div className="parallax-inner">
            <h1>Mountains</h1>
        </div>
    </section>
    </section>
        </div>
      </div>
    </RootLayout>
  );
};

export default Gallery;
