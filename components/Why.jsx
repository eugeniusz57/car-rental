"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";
import Image from "next/image";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";
const Why = () => {
  return (
    <section className="section flex items-center " id="why">
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          className="max-w-[680px] text-center mx-auto mb-2"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction
        </motion.p>
        <motion.div
          className="hidden md:flex justify-center mb-6 xl:mb-2"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Image
            src={"/images/why/car.svg"}
            width={1060}
            height={420}
            alt="picture car"
          />
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden xl:flex ">
              We prioritize your need and we go about and beyond to ensure your
              eperience with us is nothing short of uotstanding
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Modern & well maintained vehicles</h3>
            <p className="hidden xl:flex ">
              We prioritize your need and we go about and beyond to ensure your
              eperience with us is nothing short of uotstanding
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Prompt and flexible services</h3>
            <p className="hidden xl:flex ">
              We prioritize your need and we go about and beyond to ensure your
              eperience with us is nothing short of uotstanding
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
