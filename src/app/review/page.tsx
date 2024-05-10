"use client";
import React from "react";
import RootLayout from "../layout";
import "../../../styles/review.css";
import Carousel from 'react-grid-carousel'

const course = () => {

  return (
    <RootLayout>
      <div className="mt-32"> 
        <div className="flex sliderContent m-auto">
        <Carousel cols={3} rows={1} gap={10} step={1}>
          <Carousel.Item>
            <div className="border border-white">
              <img width="100%" src="https://picsum.photos/800/600?random=1" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </RootLayout>
  );
};

export default course;
