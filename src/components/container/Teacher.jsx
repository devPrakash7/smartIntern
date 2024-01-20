import React from "react";
import teacher1 from "../../assets/tranner-2.png";
import teacher2 from "../../assets/tranner-5.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";


const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Mastering ReactJS and React Native: A 5-Year Journey of Excellence. Our seasoned professional 
          boasts a rich 5-year track record specializing in ReactJS and React Native development. 
          With a wealth of experience, this expert has navigated diverse projects, honing skills in crafting 
          responsive web interfaces and cross-platform mobile applications. Join our platform to tap into a treasure 
          trove of knowledge and expertise, 
          as we explore the dynamic world of ReactJS and React Native together.!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Join Our Platform as an Instructor! Our esteemed trainer brings over 3 years of hands-on experience in 
          MERN (MongoDB, Express.js, React, Node.js) stack development. Dive into the world of cutting-edge technologies 
          with a seasoned expert who is passionate about sharing practical insights and real-world applications. 
          Become an integral part of our educational community and inspire the next generation of developers 
          with your MERN stack mastery!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
