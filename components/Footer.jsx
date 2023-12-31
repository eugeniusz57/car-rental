"use client";

import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";
import Image from "next/image";
import { Link } from "react-scroll";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image
                src={"/icons/logo.svg"}
                width={200}
                height={200}
                alt="photo logo"
              />
            </Link>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              nobis magnam animi rem!
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone /> <div className="font-medium">(123)456-7890</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />{" "}
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold ">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="text-semibold">09:00AM - 09:00PM </div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="text-semibold">09:00AM - 07:00PM </div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="text-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-seconfary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your email"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
