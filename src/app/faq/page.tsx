"use client"
  import React from 'react';
  import RootLayout  from "../layout";
  import FaqComponent from '../faqComponent';
const course = () => {
    return (
        
        <RootLayout>
          <div className='pt-10'>
          <FaqComponent/>
          </div>
      </RootLayout>
    )
}

export default course;