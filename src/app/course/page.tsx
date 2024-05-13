"use client"
  import React from 'react';
  import RootLayout  from "../layout";
  import CourseComponent from '../courseComponent';
const course = () => {
    return (
        
        <RootLayout>
          <div className='pt-9'>
          <CourseComponent/>
          </div>
      </RootLayout>
    )
}

export default course;