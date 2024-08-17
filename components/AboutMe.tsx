import React from "react";
import ProfilePicture from "@/components/ProfilePicture";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <section id="about-me" className="p-6">
        <h2 className="text-blue-300 text-5xl mb-4">/ about me</h2>
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <p className="mb-4">
              I graduated from Goldsmiths, University of London with a BSc in
              Computer Science, earning First Class Honours.
            </p>
            <p className="mb-4">
              Here are some technologies I have worked with:
            </p>
            <p className="mb-4">
              Here are some technologies I have worked with:
            </p>
            <ul className="text-2xl">
              {[
                "Python",
                "Typescript",
                "JavaScript",
                "Next.js",
                "React",
                "Tailwind",
                "HTML",
                "CSS",
                "Java",
              ].map((tech) => (
                <li
                  key={tech}
                  className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <p>
              Outside of work, I enjoy indulging in hobbies such as reading and
              drawing.
            </p>
          </div>
          <ProfilePicture />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
