import "../../../styles/blog.css";
import React, { useState } from "react";
import Image from "next/image";
const Blog = () => {
    const cardData = [
        {
            title:"HTML, CSS",
            src:"/images/htmlCss.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"JS",
            src:"/images/jScript.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"React",
            src:"/images/react.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML, CSS",
            src:"/images/jScript.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML/CSS",
            src:"/images/htmlCss.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML, CSS",
            src:"/images/jScript.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML/CSS",
            src:"/images/react.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML, CSS",
            src:"/images/jScript.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
        {
            title:"HTML, CSS",
            src:"/images/htmlCss.jpg",
            desc:"Embark on your journey into the world of web development by mastering the fundamental building blocks: HTML and CSS. In this beginner-friendly guide, you'll learn the essentials of structuring web pages with HTML tags and styling them with CSS properties."
        },
    ]
  return (
    <>
      <div className="mt-24">
        <div className="w-11/12 m-auto ps-16 pe-16 pt-5">
            <h1 className="blogTitle">Boost up your skills with us</h1>
            <div className="flex justify-between flex-wrap mb-5">
            {cardData?.map((item, index)=>
                <div className="border blogCard mt-7" key={index}>
                <div className="">
                    <Image className="blogImage" alt={`${item?.title}`} src={`${item?.src}`} width={420} height={100}/>
                </div>
                <div className="flex p-4">
                <h1 className="w-full pe-4 contentTitle">{item?.title}</h1>
                </div>
                <p className="p-2 ps-4 pe-4">
                    {item?.desc}
                </p>
             </div>
            )}
            </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
