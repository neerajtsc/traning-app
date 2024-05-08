import RootLayout from "../layout"
const process = () => {
    let cardContent = [
        {
            "title" : "Enrollment",
            "content" :"Welcome to our course enrollment page! We're excited that you're interested in joining our program. Whether you're looking to expand your skills, advance your career, or pursue a new passion, we have a course that's right for you.",
            "buttonName" : "Enroll Now"
        },
        {
            "title" : "Shortlisting",
            "content" :`All applications will undergo an initial screening process to assess qualifications, experience, and suitability for the role. Our hiring team will carefully review each application to identify candidates who meet our criteria for shortlisting.
            `,
            "buttonName" : "Explore"
        },
        {
            "title" : "Interview",
            "content" :`Shortlisted candidates will be invited to participate in further assessments or interviews to evaluate their skills, competencies, and fit for the role. After thorough evaluation and consideration, we will select the most qualified candidate for the training process.
            `,
            "buttonName" : "Explore"  
        },
        {
            "title" : "Fee Submission",
            "content" :`Kindly submit your fee by after interview. Payment options include online payment or bank transfer. Late payments may incur additional charges.
            `,
            "buttonName" : "Payment"  
        }

    ]
return (
    <RootLayout>
        
        {/* <div className="max-w-sm w-full lg:max-w-full lg:flex mt-60 w-1/2">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 glassBackground rounded p-4 flex flex-col justify-between leading-normal p-6">
    <div className="mb-8">
       
      <div className="text-white font-bold text-6xl mb-2">Enroll</div>
      <p className=" text-base text-wrap text-xl text-white">Welcome to our course enrollment page! We're excited that you're interested in joining our program. Whether you're looking to expand your skills, advance your career, or pursue a new passion, we have a course that's right for you.</p>
    </div>
    <div className="flex items-center">
       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Enroll Now</button>
    </div>
  </div>
</div> */}

<div className="flex flex-col align-center">
{
    cardContent?.map((item, index) => (
        <>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-60 w-1/2">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 glassBackground rounded p-4 flex flex-col justify-between leading-normal p-6">
    <div className="mb-8">
       
      <div className="text-white font-bold text-6xl mb-2">{item?.title}</div>
      <p className=" text-base text-wrap text-xl text-white">{item?.content}</p>
    </div>
    <div className="flex items-center">
       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{item?.buttonName}</button>
    </div>
  </div>
</div>
        </>
    ))
}
</div>
         
    </RootLayout>
)
}
export default process;