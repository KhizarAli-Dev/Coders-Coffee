import React, { useState } from "react";
import BgImage from "../../assets/images/banner.png";
import coffeeImage from "../../assets/images/coffee.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      {/* Background Image */}
      <main style={bgImage}>
        <section className="relative min-h-[750px] w-full">
          <div className="p-[1rem] sm:p-[2rem]">
            {/* Navbar */}
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
              {/* Left Side */}
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                  }}
                  className="text-7xl font-bold leading-tight ml-14 "
                >
                  Coders Coffee
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Black Lifestyle</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sapiente ad ipsam nam eligendi officia corrupti recusandae
                      dignissimos error magnam nisi maxime, rem quos eius facere
                      vero, nihil voluptates praesentium sed esse perspiciatis
                      libero neque doloremque dolorum. Ea, illum adipisci?
                      Provident, assumenda! Odit dolores quibusdam
                    </h1>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                </motion.div>
              </div>
              {/* Center Image */}
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={coffeeImage}
                  alt="coffeeImage"
                  className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                />
                {/* orange entering circle */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
                ></motion.div>
                {/* Big Text Section */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="absolute -top-20 left-[200px] z-[1]"
                >
                  <h1 className="text-[140px] scale-150 font-bold text-darkGray/30 leading-none ">
                    Coders Coffee
                  </h1>
                </motion.div>
              </div>
              {/* Right Side */}
              <div className="hidden lg:block text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14 ">
                  Coders Coffee
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl"> Coders Coffee</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sapiente ad ipsam nam eligendi officia corrupti recusandae
                      dignissimos error magnam nisi dignissimos error magnam
                      nisi dignissimos error magnam nisi dignissimos error
                      magnam nisi dignissimos error magnam nisi dignissimos
                      error magnam nisi
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sidebar Menu Section */}
          {
            sidebar && (
              <motion.div initial={{x: '100%'}} whileInView={{x: 0}} className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 ">
              {/* White Line */}
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                  <div className="w-[1px] h-[70px] bg-white "></div>
                  {/* Social Icons */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                    <FaInstagram className="text-2xl" />
                  </div>
  
                  <div className="w-[1px] h-[70px] bg-white "></div>
                </div>
              </div>
            </motion.div>
            )
          }
        </section>
      </main>
    </>
  );
}

export default Hero;
