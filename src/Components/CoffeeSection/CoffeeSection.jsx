import React from "react";
import glass1 from "../../assets/images/glass1.png";
import glass2 from "../../assets/images/glass2.png";
import { motion } from "framer-motion";

function CoffeeSection() {
  return (
    <>
      {/* Coffee Section */}
      <div className="flex flex-col w-full justify-center items-center p-6 mt-10 space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.4,
          }}
          className="text-darkGray text-3xl font-bold"
        >
          Our <span className="text-primary">Coffee</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
            delay: 0.5,
          }}
          className="w-full md:w-[50%] lg:w-[35%] text-center text-wrap"
        >
          Our coffee shop is known for its fresh, organic ingredients and
          attention to detail. We strive to provide our customers with a taste
          of the finest coffee.
        </motion.p>
      </div>

      <div className="w-full">
        <div className="md:flex md:flex-row md:space-x-6 flex-col justify-center items-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
            className="flex flex-col justify-center items-center w-full md:w-[30%]"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={glass1}
              alt="Black Coffee"
              className="w-[50%] md:w-[30%] cursor-pointer img-shadow2"
            />
            <h1 className="text-primary text-2xl font-semibold mt-3">
              Black Coffee
            </h1>
            <p className="text-darkGray mt-2 text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quia?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="flex flex-col justify-center items-center w-full md:w-[30%]"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={glass2}
              alt="Espresso Coffee"
              className="w-[50%] md:w-[30%] cursor-pointer img-shadow2"
            />
            <h1 className="text-primary text-2xl font-semibold mt-3">
              Espresso Coffee
            </h1>
            <p className="text-darkGray mt-2 text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quia?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.9,
            }}
            className="flex flex-col justify-center items-center w-full md:w-[30%] mt-6 md:mt-0"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={glass1}
              alt="Latte Coffee"
              className="w-[50%] md:w-[30%] cursor-pointer img-shadow2"
            />
            <h1 className="text-primary text-2xl font-semibold mt-3">
              Latte Coffee
            </h1>
            <p className="text-darkGray mt-2 text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quia?
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default CoffeeSection;
