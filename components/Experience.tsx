import React, { useState } from "react";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="flex justify-center items-center">
    <section>
      <h2 className="text-blue-300 text-2xl">/ experience</h2>
      <h2 className="text-2xl">Sales Assistant @ <span className="text-blue-300">Marks & Spencer</span></h2>
      <p>
        - Excelled in a fast-paced retail setting, consistently delivering
        exceptional customer service and exceeding satisfaction goals.
        <br></br>- Actively engaged with customers, effectively addressed
        inquiries, and provided expert guidance to enhance their shopping
        experience.
        <br></br>- Skilfully resolved customer complaints and issues, employing
        effective problem-solving strategies to ensure customer loyalty and
        satisfaction.
        <br></br>- Demonstrated strong organisational skills through effective
        stock rotation and aisle upkeep, demonstrating acute attention to detail
        and commitment to operational excellence.
      </p>

      <h2 className="text-2xl">COVID-19 Tester @ <span className="text-blue-300">The Quest Academy</span></h2>
      <p>
        - Played a vital role in the school’s pandemic response by administering
        and managing COVID-19 testing for students, ensuring a safe and orderly
        testing environment.
        <br></br>- Trained and coordinated with a team to streamline testing
        processes.
        <br></br>- Managed the accurate documentation and secure handling of
        sensitive information, adhering to strict health and safety protocols.
      </p>
    </section>
    </div>
  );
};

export default Experience;
