import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import Card from "./Card";
import img1 from "../../public/projectImg/im1.png"
import img2 from "../../public/projectImg/im2.png"
import img3 from "../../public/projectImg/im3.png"
import img4 from "../../public/projectImg/im4.png"
import img5 from "../../public/projectImg/im5.png"
import img6 from "../../public/projectImg/im6.png"
import img7 from "../../public/projectImg/im7.png"
import img8 from "../../public/projectImg/im8.png"

function Project() {
  
  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Project</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          
          <Card Proimg ={img1} 
          gitHubLink={`https://github.com/shiva1240/Chatify-chat-app.git`}
          about={`A Full Stack chat web app build using react js and Stream chat API`}
          title={"Chatify"} 
          />
           <Card Proimg ={img2} 
          gitHubLink={`https://github.com/shiva1240/MyBlog---App.git`}
          about={`A Full Stack blogging app build using react js,tailwind CSS and Appwrite.`}
          title={"MyBlog"} 
          />
            <Card Proimg ={img3} 
          gitHubLink={`https://github.com/shiva1240/To-Do-list.git`}
          about={`To-do list manager which creates, edit , delete task on click`}
          title={"To-do-list Manager"} 
          />
            <Card Proimg ={img4} 
          gitHubLink={`https://github.com/shiva1240/Password-genrator.git`}
          about={`A utility Password generator app using react js`}
          title={"Password-Genrator"} 
          />
         
         
        </div>
      </div>
      <div>
        <span className=" underline font-semibold">Front-end Web Pages</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          
          <Card Proimg ={img5} 
          gitHubLink={`https://github.com/shiva1240/front-end-web-pages/tree/main/project%205`}
          about={`Coffee shop front-End website build using HTML and vanilla CSS`}
          title={"Coffee-Shop"} 
          />
           <Card Proimg ={img6} 
          gitHubLink={`https://github.com/shiva1240/front-end-web-pages/tree/main/project%206`}
          about={`Travel Agency front-End website build Using HTML and vanilla CSS `}
          title={"Travel-Agency"} 
          />
            <Card Proimg ={img7} 
          gitHubLink={`https://github.com/shiva1240/To-Do-list.git`}
          about={`Clone of Landing page of Dominoz build using tailwind CSS`}
          title={"Dominoz-clone(Landing-page)"} 
          />
            <Card Proimg ={img8} 
          gitHubLink={`https://github.com/shiva1240/front-end-web-pages/tree/main/project%203`}
          about={`Front-End of Restraunt website build using HTML and vanilla CSS  `}
          title={"Restraunt"} 
          />
         
         
        </div>
      </div>
    </div>
  );
}

export default Project;
