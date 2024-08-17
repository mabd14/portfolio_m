import React from "react";

const QuickIntro = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl md:text-7xl font-semibold mb-4 relative w-[max-content] font-mono">
        hello, <span className="text-blue-300">mahamed</span> here
      </h1>
      <p className="text-center max-w-2xl">
        I recently graduated from Goldsmiths, University of London, where I
        earned a First Class degree in BSc Computer Science. During my time
        there, I developed a deep passion for technology and its potential to
        drive positive change. I'm particularly fascinated by products and
        innovations that not only address real-world challenges but also
        contribute positively to society.
      </p>
    </div>
  );
};

export default QuickIntro;


