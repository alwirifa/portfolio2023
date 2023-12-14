'use client'

import Image from "next/image";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
  img: string;
}

const ArchiveCard = ({ title, des, listItem, img, link }: Props) => {
  return (
    <a id="project" href={link} target="_blank">
      <div className="w-full p-6 rounded-lg bg-[#112240] h-96 flex flex-col justify-center space-y-6 hover:-translate-y-2 transition-transform duration-300 group">
        <Image
          className="rounded-lg h-full object-cover"
          src={img}
          alt="profileImg"
          width={400}
          height={300}
        />
        <div>
          <div className="flex justify-between items-center">
            {/* <FaRegFolder className="text-4xl text-textGreen" />
             */}
            <h2 className="text-lg font-semibold tracking-wide group-hover:text-textGreen">
              {title}
            </h2>
            <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
          </div>

          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
