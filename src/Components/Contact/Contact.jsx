import React from "react";
import { motion } from "framer-motion";
import mapImage from "../../assets/images/map.png";

function Contact() {
  return (
    <>
      <div className="w-full p-6 mt-20">
        <div className="w-full flex md:flex-row flex-col justify-evenly items-center">
          {/* Left Section with Heading and Form */}
          <div className="md:w-[40%] flex flex-col">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 25,
                delay: 0.2,
              }}
              className="text-4xl font-semibold"
            >
              Buy <span className="text-primary">Coffee</span> from anywhere
            </motion.h1>

            {/* Form Section */}
            <form className="mt-6 space-y-4">
              {/* Row 1: Name and Email */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <motion.input
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                      delay: 0.4,
                    }}
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full p-2 mt-2 border border-secondary rounded-md"
                  />
                </div>

                <div className="w-1/2">
                  <motion.input
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                      delay: 0.6,
                    }}
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-2 mt-2 border border-secondary rounded-md"
                  />
                </div>
              </div>

              {/* Row 2: Message and Phone Number */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <motion.textarea
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                      delay: 0.8,
                    }}
                    id="message"
                    placeholder="Message"
                    className="w-full p-1 mt-2 border border-secondary rounded-md"
                  />
                </div>

                <div className="w-1/2">
                  <motion.input
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                      delay: 1.0,
                    }}
                    type="text"
                    id="phone"
                    placeholder="Number"
                    className="w-full p-2 mt-2 border border-secondary rounded-md"
                  />
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 25,
                }}
                className="w-full p-2 bg-primary text-white font-semibold rounded-md"
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Right Section with Map Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
              delay: 0.6,
            }}
            className="md:w-[40%] mt-8 md:mt-0"
          >
            <img
              src={mapImage}
              alt="Map"
              className="h-[250px] w-full object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
