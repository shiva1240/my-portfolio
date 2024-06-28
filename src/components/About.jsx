import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p>
        From a young age, I've been captivated by the endless possibilities that technology offers. This fascination led me to delve into the world of web development, where I discovered my knack for creating dynamic and responsive web applications. My expertise lies in the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. These technologies empower me to build full-stack applications that are not only functional but also visually appealing and user-friendly.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <ul className="list-disc">
          <li> Bechlor of Technology, National Institute of Technology Arunachal Pradesh, 2021-25 </li>
          <li>Senior Secondary , Kakka International School , Nalkheda , Madhya Pradesh, 2019-20Senior Secondary , Kakka International School , Nalkheda , Madhya Pradesh, 2019-20</li>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills
        </h1>
       <ul className="list-disc space-y-2">
        <li><span className="font-extrabold">Front-End Development:</span> With a keen eye for design and a solid understanding of user experience, I create responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.js. I strive to ensure that my applications are not only functional but also aesthetically pleasing.</li>
        <li><span className="font-extrabold">Back-End Development:</span> My proficiency in Node.js and Express.js enables me to develop robust server-side applications. I focus on building scalable and efficient back-end systems that support seamless data flow and provide a strong foundation for web applications.</li>
        <li><span className="font-extrabold">Database Management:</span> I have extensive experience with MongoDB, which allows me to design and manage scalable databases. My ability to handle data effectively ensures that applications run smoothly and efficiently.</li>
        <li><span className="font-extrabold">Version Control:</span> Collaboration and version control are crucial aspects of any development project. I am proficient in using Git and GitHub to manage code versions, collaborate with team members, and maintain project integrity.</li>
       </ul>
        {/* <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to leverage my expertise in the MERN stack to design and develop innovative, user-centric web applications that not only solve real-world problems but also drive efficiency and enhance digital experiences. I aim to continuously expand my knowledge and skills in web development, embracing new technologies and methodologies to stay at the forefront of the industry. By creating intuitive and scalable solutions, I strive to make a meaningful impact in the tech world and contribute to the advancement of digital innovation. I am dedicated to fostering collaboration, promoting best practices, and delivering high-quality projects that exceed expectations and deliver exceptional value to users and stakeholders alike.
        </p>
      </div>
    </div>
  );
}

export default About;
