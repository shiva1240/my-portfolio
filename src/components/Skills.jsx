import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import tailwind from "../../public/tailwind.png"
import cpp from "../../public/cpp.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"
import express from "../../public/express.png"
import mongodb from "../../public/mongodb.jpg"
import python from "../../public/python.webp"

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo:tailwind ,
      name: "Tailwind",
    },
    {
      id: 5,
      logo:cpp ,
      name: "C++",
    },
    {
      id: 6,
      logo: reactjs,
      name: "ReactJs",
    },
    {
      id: 7,
      logo: node,
      name: "NodeJs",
    },
    {
      id: 8,
      logo: express,
      name: "ExpressJs",
    },
    {
      id: 9,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 10,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
     
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
