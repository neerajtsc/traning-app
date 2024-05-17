"use client"

import Image from "next/image";

const Ceo = () => {
return (
    <>
    <div className="flex justify-between px-24 pt-11 fadeIn items-center">
        <div className="w-2/5">
            <Image src="/images/ceoImg.jpg" alt="ceo" width={600} height={600} className="maskImg"/>
        </div>
        <div className="w-1/2">
            <div className="font-bold" style={{fontSize: "3.5rem"}}>Message from our CEO</div>
            
            <div className="w-11/12 text-justify mb-5 pt-11 text-xl"><span className="font-bold text-8xl ">&#34;</span>First and foremost, we are committed to providing the highest quality training programs that empower individuals and organizations to reach their full potential. Our courses are meticulously designed to meet industry standards, leverage cutting-edge methodologies, and deliver tangible results that drive success.Furthermore, our commitment to diversity, equity, and inclusion remains unwavering. We believe that a diverse workforce fosters innovation, creativity, and ultimately, success. That's why we actively promote diversity in all aspects of our training programs, ensuring that everyone has equal access to opportunities for growth and development.</div>
        </div>
    </div>
    </>
)
}
export default Ceo;