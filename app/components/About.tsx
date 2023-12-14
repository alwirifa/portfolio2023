'use client'

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { GoDotFill } from 'react-icons/go'

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a fresh graduate from{" "}
            <a href="https://www.upi.edu/" target="_blank" className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Universitas Pendidikan Indonesia
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
            {" "}
            who has interest and skills in software engineering, especially in front-end web developer. I like to create dynamic and user friendly interfaces using various web technologies such as React and Next. I enjoy facing challenges in creating robust and high-performance systems, capable of managing large data volumes, and supporting complex business processes.
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at {" "}
            <span className="text-textGreen">
              a huge corporation,
            </span>
            {" "}and{" "}
            <span className="text-textGreen">
              freelance web developer.
            </span>

          </p>
          <p>
            I have a problem-solving mindset, good communication skills, and a professional attitude in working individually or in a team. I am ready to learn new things and contribute to the development of quality software.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <GoDotFill />
              </span>
              Go
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              {/* <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              /> */}
              gambar
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
