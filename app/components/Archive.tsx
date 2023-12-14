import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Portfolio"
          des="The website you are looking at 👀"
          listItem={["Nextjs", "Tailwind CSS", "framer-motion"]}
          link=""
          img="/images/portfolio.png"
        />
        <ArchiveCard
          title="Genset Analysis & Monitoring System"
          des="The project for bachelor's degree graduation, developed system monitoring for genset. "
          listItem={["Reactjs", "Tailwind CSS", "vite", "firebase", "arduino"]}
          link="https://gensetanalysis.vercel.app/dashboard"
          img="/images/genset.jpg"
        />
        <ArchiveCard
          title="Wika Perdana Sakti"
          des="
          Creating a company profile for a building pallet company"
          listItem={["HTML", "Tailwind CSS", "Javascript", "AlpineJs", "Swiper"]}
          link="https://github.com/alwirifa/wika-perdana"
          img="/images/wika.png"
        />
        <ArchiveCard
          title="HJK Jaya Abadi"
          des=" Creating company profile for contructision company"
          listItem={["Nextjs", "Tailwind CSS", "Swiper"]}
          link="https://hjkjayaabadi.vercel.app/"
          img="/images/hjk.png"
        />
        <ArchiveCard
          title="AirBnB Clone"
          des="Cloning Airbnb with authentication system, booking, favorites, searh, and add listing"
          listItem={["Nextjs 13", "Tailwind CSS", "MongoDB", "Prisma", "jwt"]}
          link="https://next13-airbnb-clone-ashy.vercel.app/"
          img="/images/airbnb.jpg"
        />
        <ArchiveCard
          title="Netflix Clone"
          des="cloning netflix with authentication system."
          listItem={["Nextjs 13", "Tailwind CSS", "MongoDB", "Prisma", "jwt"]}
          link="https://next-netflix-clone-alwi.vercel.app/"
          img="/images/netflix.jpg"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="MERN Authentication"
                des="Dynamic Authentication system with database"
                listItem={["Reactjs", "Tailwind CSS", "MongoDb", "jwt", "axios"]}
                link="https://mern-auth-alwi.vercel.app/login"
                img="/images/mernAuth.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Global Covid 19 Dashboard"
                des="Designed with tableau to built dashboard data to monitoring and tracking the disease from January 2020 - December 2021."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://public.tableau.com/app/profile/alwi.rifa/viz/COVID-19Cases_16403644556130/Dashboard2"
                img="/images/covid.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Movie Analysis"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://github.com/alwirifa/PortfolioProject/blob/main/Movie%20Correlation.ipynb"
                img="/images/movie.jpg"
              />
            </motion.div>

          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
