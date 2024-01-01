import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/images (1).jpg";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Ethiopia",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectu quia sapiente consequuntur",
    company: "Novalia Emp Co.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        {
        Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div  key={id}  className="group grpup/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-primaryPink shadow-lg shadow-shadowColor hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h3 className="text-[16px] font-normal text-slate-400 group-hover:text-white">
                {title}
                </h3>
                <span className="flex items-center text-[#ccc] gap-1 text-sm">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                 {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-normal text-slate-700 hover:bg-white group-hover:/item:text-slate-700 group-hover:text-slate-700">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
