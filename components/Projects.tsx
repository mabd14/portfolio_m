"use client";
import React from "react";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxBorderSolid } from "react-icons/rx";
const Projects = () => {
  const slides = [
    {
      url: "/images/taskappimages/AboutPage.png",
    },
    {
      url: "/images/taskappimages/ExistingCourseTask.png",
    },
    {
      url: "/images/taskappimages/FocusPage.png",
    },
    {
      url: "/images/taskappimages/HomePagewithusername.png",
    },
    {
      url: "/images/taskappimages/Homepage.png",
    },
    {
      url: "/images/taskappimages/Login.png",
    },
    {
      url: "/images/taskappimages/NewCourseTask.png",
    },
    {
      url: "/images/taskappimages/QuickNotesPage.png",
    },
    {
      url: "/images/taskappimages/RegisterPage.png",
    },
    {
      url: "/images/taskappimages/View TaskPage.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex justify-center items-center">
      <section id="projects">
        <h2 className="text-blue-300 text-2xl">/ projects</h2>
        <ul className="list-disc ml-5">
          <li>
            <Link
              href="https://github.com/mabd14/task-app"
              className="no-underline;"
            >
              Scholar Flow
            </Link>

            <p>
              The primary goal of this application is to assist students in
              organizing their academic tasks and managing their time
              efficiently throughout their degree.
            </p>
            <p>
              This project was built using Node.js, SQL, HTML, and CSS,
              showcasing the skills I developed during my web development
              studies at university.
            </p>
          </li>
          <div className="max-w-[1150px] h-[780px] w-full m-auto py-16 px-5 relative group relative max-w-xs overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:scale-110">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            >
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
            <div className="flex top-5 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}
                >
                  <RxBorderSolid />
                </div>
              ))}
            </div>
          </div>
          <li>
            <Link href="https://github.com/mabd14/FYP-Implementation_and_Analysis">
              <span>Final Year Project</span>
            </Link>
            <p>
              Optimising CNN Architectures for COVID- 19 Detection from Chest
              X-Rays
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
