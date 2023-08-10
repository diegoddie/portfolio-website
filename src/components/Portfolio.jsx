import React, { useState } from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import BitcoinExchange from '../assets/portfolio/BitcoinExchange.png';
import CarShowcase from '../assets/portfolio/CarShowcase.png';
import CrowdfundingDapp from '../assets/portfolio/CrowdfundingDapp.png';
import Cryptoverse from '../assets/portfolio/cryptoverse.png';
import Easybank from '../assets/portfolio/easybank.png';
import Ecommerce from '../assets/portfolio/Ecommerce.png';
import NetflixClone from '../assets/portfolio/NetflixClone.png';
import VotingDapp from '../assets/portfolio/VOTING.png';
import Weather from '../assets/portfolio/Weather.png';
import REIS from '../assets/portfolio/REIS.png';
import WizAIrd from '../assets/portfolio/WizAIrd.png';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: CrowdfundingDapp,
      title: "Crowdfunding Dapp",
      code: "https://github.com/diegoddie/Web3Raise-CrowdfundingDapp",
      live: "https://web3raise.netlify.app/",
      category: "blockchain",
    },
    {
      id: 2,
      src: WizAIrd,
      title: "WizAIrd",
      code: "https://github.com/diegoddie/AI_Generator_SaaS",
      live: "https://ai-generator-saa-s.vercel.app/",
      category: "full stack",
    },
    {
      id: 3,
      src: Ecommerce,
      title: "Ecommerce Website",
      code: "https://github.com/diegoddie/NextJs_FullStack_Ecommerce",
      live: "https://epic-store-one.vercel.app/",
      category: "full stack",
    },
    {
      id: 4,
      src: VotingDapp,
      title: "Voting Dapp",
      code: "https://github.com/diegoddie/VotingDapp-Start2ImpactProject",
      live: "https://votingdapps2i.netlify.app/",
      category: "blockchain",
    },
    {
      id: 5,
      src: NetflixClone,
      title: "Netflix Clone",
      code: "https://github.com/diegoddie/FullStack-netflix-clone",
      live: "https://netflix-clone-chi-swart.vercel.app/auth",
      category: "full stack",
    },
    {
      id: 6,
      src: CarShowcase,
      title: "Car Showcase",
      code: "https://github.com/diegoddie/Nextjs_CarsShowcase",
      live: "https://nextjs-cars-showcase.vercel.app/",
      category: "full stack",
    },
    {
      id: 7,
      src: BitcoinExchange,
      title: "Bitcoin Exchange",
      code: "https://github.com/diegoddie/Bitcoin_exchange",
      category: "full stack",
    },
    {
      id: 8,
      src: Easybank,
      title: "Landing Page",
      code: "https://github.com/diegoddie/EasyBank_LandingPage",
      live: "https://diegoddie.github.io/EasyBank_LandingPage/",
      category: "front end",
    },
    {
      id: 9,
      src: Weather,
      title: "Weather App",
      code: "https://github.com/diegoddie/React_WeatherApp",
      live: "https://react-weather-app-fn7f.vercel.app/",
      category: "APIs",
    },
    {
      id: 10,
      src: REIS,
      title: "REIS Real Estate",
      code: "https://github.com/diegoddie/RealEstate_locofy",
      live: "https://real-estate-locofy.vercel.app/",
      category: "front end",
    },
    {
      id: 11,
      src: Cryptoverse,
      title: "Coingecko clone",
      code: "https://github.com/diegoddie/cryptoverse",
      live: "https://cryptoverse-coral.vercel.app/",
      category: "full stack",
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const filteredPortfolios = selectedCategory === 'all'
    ? portfolios.slice(0, 6)
    : portfolios.filter((portfolio) => portfolio.category === selectedCategory);

  const renderedPortfolios = showAll ? portfolios : filteredPortfolios;

  return (
    <div name="portfolio" className="w-full sm:h-screen text-[#0b171e] dark:text-[#e2fdf4]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#045d90] dark:border-[#55dbf6]">Portfolio</p>
          <p className="text-xl font-bold py-4">Check out some of my recent works!</p>
        </div>

          <div className="sm:flex justify-center text-center mb-4">
            <button
              className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
              onClick={() => handleCategoryChange("all")}
            >
              All
            </button>
            <button
              className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
              onClick={() => handleCategoryChange("front end")}
            >
              Front End
            </button>
            <button
              className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
              onClick={() => handleCategoryChange("full stack")}
            >
              Full Stack
            </button>
            <button
              className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
              onClick={() => handleCategoryChange("blockchain")}
            >
              Blockchain
            </button>
            <button
              className='px-4 py-2 font-bold transition duration-150 border-b-4 hover:border-[#045d90] dark:hover:border-[#0c57ed] border-transparent'
              onClick={() => handleCategoryChange("APIs")}
            >
              APIs
            </button>
          </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 sm:pt-2">
          {renderedPortfolios.map(({ id, src, code, live, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-110 cursor-pointer w-full object-fit h-48" />
              {hoveredProject === id && (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] rounded-md transition-opacity duration-300">
                  <p className="text-white text-lg font-bold mb-2">{title}</p>
                  <div className="flex">
                    {live && (
                      <a href={live} className="px-4 py-2 mx-1 bg-[#045d90] text-white dark:text-black dark:bg-[#55dbf6] rounded-xl hover:opacity-80">
                        Live
                      </a>
                    )}
                    <a href={code} className="px-4 py-2 mx-1 bg-[#045d90] text-white dark:text-black dark:bg-[#55dbf6] rounded-xl hover:opacity-80">
                      Code
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedCategory === 'all' && !showAll && (
          <div className="flex justify-center mt-4">
            <button className='text-white bg-[#045d90] dark:text-black dark:bg-[#55dbf6] dark:border-transparent dark:hover:shadow-md dark:hover:shadow-[#0c57ed] rounded-xl group border-2 px-6 py-3 my-2 flex items-center hover:shadow-xl' onClick={handleShowMore}>
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
};

export default Portfolio;
