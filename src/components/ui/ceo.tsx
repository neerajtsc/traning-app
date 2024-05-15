"use client"

import Image from "next/image";

const Ceo = () => {
return (
    <>
    <div className="flex justify-between px-24 pt-11 fadeIn">
        <div className="w-2/5">
            <Image src="/images/ceo.png" alt="ceo" width={600} height={600} />
        </div>
        <div className="w-1/2">
            <div className="font-bold text-6xl">Message from our CEO</div>
            
            <div className="w-3/4 mb-5 pt-11 text-xl"><span className="font-bold text-8xl ">&#34;</span>First and foremost, we are committed to providing the highest quality training programs that empower individuals and organizations to reach their full potential. Our courses are meticulously designed to meet industry standards, leverage cutting-edge methodologies, and deliver tangible results that drive success.</div>
        </div>
    </div>
    </>
)
}
export default Ceo;