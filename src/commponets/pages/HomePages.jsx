import HeroImage from '../assets/iconhome1.png';
import AboutImage from '../assets/about.svg';
import Proyek1 from '../assets/proyek-1.webp';
import Proyek2 from '../assets/proyek-2.webp';
import Proyek3 from '../assets/proyek-3.webp';
import Proyek4 from '../assets/proyek-4.webp';
import Proyek5 from '../assets/proyek-5.webp';
import profil from '../assets/profil_1.png';
import img from '../assets/css.svg';
import img2 from '../assets/html.svg';
import img3 from '../assets/react.svg';
import img4 from '../assets/mysql.svg';
import img5 from '../assets/bootstrap.svg';
import img6 from '../assets/firebase.svg';
import img7 from '../assets/javascript.svg';
import img8 from '../assets/tailwind.svg';
import img9 from '../assets/figma.svg';
import img10 from '../assets/github.svg';
import img11 from '../assets/git-bash.svg';
import img12 from '../assets/visual-studio-code.svg';
import img13 from '../assets/canva.svg';
import img14 from '../assets/android-studio.svg';
import img15 from '../assets/kotlin.svg';

import Marquee from 'react-fast-marquee';
import { TypeAnimation } from 'react-type-animation';
import { delay, motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import { section } from 'framer-motion/client';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const homepages = () => {
  return (
    <div className="pb-10 homepage ">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 pt-32 hero md:grid-cols-2">
          <div className="box">
            {/* <h1 className="text-3xl font-medium lg:text-7xl/tight mb-7"> */}
            <motion.h1
              variants={container(0)}
              animate="visible"
              initial="hidden"
              whileHover={{ y: 20 }}
              className="text-3xl font-medium lg:text-7xl/tight text-black-500 mb-7"
            >
              Adi Wijaya
            </motion.h1>
            {/* </h1> */}
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="text-transparent bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-base/8 m-4tracking-tight"
            >
              FRONT END & FULL STACK DEVELOPER
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-light tracking-tight"
            >
              a Full Stack developer based in Indonesia, Adi, UK. I have worked on a wide range of Full Stack Dev projects, from Petani Pintar applications to eCommerce booking platforms, with a focus on creating clean, well-crafted
              interfaces that not only look great but also provide a seamless user experience.
            </motion.p>
          </div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              src={HeroImage}
              alt="Hero"
              className="md:w-full w-[400px] mx-auto md:m-0 "
            />
          </motion.div>
        </div>

        <div
          className="grid items-center grid-cols-1 gap-10 pt-32 about md:grid-cols-2 md:gap-20 md:pt-20"
          id="about"
        >
          <div className="order-2 box md:order-1">
            <motion.img
              whileHover={{ rotate: '2.5deg', scale: 1.2 }}
              src={profil}
              alt="Profil"
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 lg:w-[300px] w-[300px] md:m  mx-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
            ></motion.img>
          </div>
          <div className="order-1 box md:order-2">
            <motion.ol
              class="relative border-s border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 2, x: 500 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{' '}
                  <svg
                    class="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </li>
              <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </li>
            </motion.ol>
          </div>
        </div>
        <div
          className="pt-32 services "
          id="services"
        >
          <motion.h1
            className="mb-2 text-3xl font-medium text-center lg:text-5xl/tight"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Skill
          </motion.h1>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <motion.p
            className="mb-2 text-xl font-medium text-center lg:text-xl/tight"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Language & Framework
          </motion.p>
          <Marquee
            pauseOnHover
            direction="right"
            speed={100}
            delay={1}
          >
            <div className="image_wrapper px-7">
              <img
                src={img}
                alt="Img"
                className=" size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img2}
                alt="Img2"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img3}
                alt="Img3"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img7}
                alt="Img7"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img5}
                alt="Img5"
                className="size-32"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img6}
                alt="Img6"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img4}
                alt="Img4"
                className="size-32"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img8}
                alt="Img8"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img15}
                alt="Img15"
                className="size-20"
              />
            </div>
          </Marquee>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <motion.p
            className="mb-2 text-xl font-medium text-center lg:text-xl/tight"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Tools
          </motion.p>
          <Marquee
            pauseOnHover
            direction="left"
            speed={100}
            delay={1}
          >
            <div className="px-12 image_wrapper">
              <img
                src={img9}
                alt="Img9"
                className=" size-24"
              />
            </div>
            <div className="px-12 image_wrapper">
              <img
                src={img10}
                alt="Img10"
                className="size-24"
              />
            </div>
            <div className="px-12 image_wrapper">
              <img
                src={img11}
                alt="Img11"
                className="size-24"
              />
            </div>
            <div className="px-12 image_wrapper">
              <img
                src={img12}
                alt="Img12"
                className="size-24"
              />
            </div>
            <div className="px-12 image_wrapper">
              <img
                src={img13}
                alt="Img13"
                className="size-28"
              />
            </div>
            <div className="px-12 image_wrapper">
              <img
                src={img14}
                alt="Img14"
                className="size-28"
              />
            </div>
          </Marquee>
        </div>
        <div
          className="pt-32 proyek "
          id="proyek"
        >
          <h1 className="mb-2 text-3xl font-medium text-center lg:text-5xl/tight">Projects</h1>
          <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="grid grid-cols-1 gap-6 pt-12 proyek-box lg:grid-cols-3 md:grid-cols-2">
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek1}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek2}
                  alt="Proyek 2"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek3}
                  alt="Proyek 3"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek4}
                  alt="Proyek 4"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek5}
                  alt="Proyek 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek5}
                  alt="Proyek 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepages;
