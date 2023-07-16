import React, { useState } from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import hardhat from "../assets/hardhat.png";
import solidity from "../assets/solidity.png";
import django from "../assets/django.png";
import node from "../assets/node.png";
import pandas from "../assets/pandas.png";
import mongodb from "../assets/mongodb.png";
import postgresql from "../assets/postgresql.png";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const technologies = [
    {
      name: "Python",
      category: "languages",
      image: python,
    },
    {
      name: "Pandas",
      category: "libraries",
      image: pandas,
    },
    {
      name: "Tailwind CSS",
      category: "frameworks",
      image: tailwind,
    },
    {
      name: "JavaScript",
      category: "languages",
      image: javascript,
    },
    {
      name: "Bootstrap",
      category: "frameworks",
      image: bootstrap,
    },
    {
      name: "React",
      category: "libraries",
      image: reactImage,
    },
    {
      name: "Next.js",
      category: "frameworks",
      image: nextjs,
    },
    {
      name: "Django",
      category: "frameworks",
      image: django,
    },
    {
      name: "Solidity",
      category: "blockchain",
      image: solidity,
    },
    {
      name: "Hardhat",
      category: "blockchain",
      image: hardhat,
    },
    {
      name: "MongoDB",
      category: "databases",
      image: mongodb,
    },
    {
      name: "PostgreSQL",
      category: "databases",
      image: postgresql,
    },
    {
      name: "Node.js",
      category: "frameworks",
      image: node,
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const filteredTechnologies = selectedCategory === "all"
    ? technologies.slice(0, 8)
    : technologies.filter((tech) => tech.category === selectedCategory);

  const renderedTechnologies = showAll ? technologies : filteredTechnologies;

  return (
    <div name="skills" className="w-full sm:h-screen text-[#0b171e] dark:text-[#e2fdf4]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#045d90] dark:border-[#55dbf6]">Skills</p>
          <p className="text-xl font-bold py-4">These are some of the technologies I have used for my projects.</p>
        </div>
        <div className="sm:flex justify-center text-center mb-2">
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("languages")}
          >
            Languages
          </button>
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("frameworks")}
          >
            Frameworks
          </button>
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("libraries")}
          >
            Libraries
          </button>
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("databases")}
          >
            Databases
          </button>
          <button
            className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
            onClick={() => handleCategoryChange("blockchain")}
          >
            Blockchain
          </button>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {renderedTechnologies.map((tech, index) => (
            <div key={index} className="shadow-md shadow-[#045d90] hover:scale-110 duration-500 bg-[#b3d9ef] dark:bg-[#0c57ed] rounded-full cursor-pointer">
              <img src={tech.image} alt={tech.name} className="w-20 mx-auto mt-5" />
              <p className="my-4 font-bold">{tech.name}</p>
            </div>
          ))}
        </div>
        {selectedCategory === "all" && !showAll && (
          <div className="flex justify-center">
            <button className='text-white dark:text-black dark:bg-[#55dbf6] bg-[#045d90] dark:border-transparent rounded-xl group border-2 px-6 py-3 my-2 flex items-center hover:shadow-xl dark:hover:shadow-md dark:hover:shadow-[#0c57ed]' onClick={handleShowMore}>
              Show more
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
