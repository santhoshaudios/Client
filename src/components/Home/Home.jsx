import React, { useState } from "react";
import Banner1 from "../../asserts/images/banner1.png";
import Banner2 from "../../asserts/images/banner2.png";
import { motion} from "framer-motion";


function Home({data}) {
  var images=[Banner1,Banner2]
  const [index,setIndex]=useState(0)
  const [image,setImage]=useState(Banner1)

  const updateImage=()=>{
    if(index===1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
    setImage(images[index])
  }

  
  return (
    <div className="bg-gradient-to-r from-[#91D8E4] to-[#82AAE3] h-[65vh] pt-16 px-5 h-[70vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 flex items-center">
        <motion.div className="flex justify-center items-center pt-11 hidden lg:block " animate={{x:0,scale:1}} initial={{x:-100}} transition={{type:"spring"}}>
          <img
            src={image}
            className="animate-pulse  h-100 cursor-pointer drop-shadow-2xl"
            alt={"Banner"+index}
            onClick={updateImage}
          />
        </motion.div>
        <motion.div className="text-white flex justify-center lg:justify-start relative z-1" animate={{x:0}} initial={{x:100}} transition={{type:"spring"}}>
          <div>
            <div className="font-medium text-6xl pt-24 lg:pt-0  py-7 text-center text-indigo-900">
              {data.Title}
            </div>
            <div className="flex justify-center px-5 md:px-0">
              <div>
                <div className="flex pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 md:h-8"
                  >
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                  </svg>
                  <div className="font-thin text-2xl md:text-4xl font-mono text-center pt-5 pl-4">
                    {data.Quotes[0]}
                  </div>
                </div>
                <div className="font-thin text-2xl md:text-4xl font-mono text-center">
                {data.Quotes[1]}
                </div>
                <div className="flex">
                  <div className="font-thin text-2xl md:text-4xl font-mono text-center pr-4">
                  {data.Quotes[2]}
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-5 md:h-8 "
                    >
                      <path
                        className=""
                        d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
