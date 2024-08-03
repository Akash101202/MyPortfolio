import { FaGripLines } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";
import FloatingCard from "./FloatingCard";
import Card from "./Card";
import XcelCorp from "../assets/XcelCorp.jpg";
import Prinston from "../assets/Prinston.jpg";
import GenerativeAi from "../assets/GenerativeAi.jpg";
import UdemyWeb from "../assets/UdemyWeb.jpg";

export default function Skills() {
  return (
    <>
      <div className="px-4 sm:px-8 bg-stone-900 text-stone-50 rounded-l-xl">
        <div className="px-4 sm:px-9 py-3">
          <div className="flex">
            <h1 className="px-3 pb-4 font-bold mb-3 mt-8 text-lg sm:text-xl md:text-2xl">
              Resume
              <FaGripLines size={48} style={{ color: "gold" }} />
            </h1>
          </div>
          <div className="flex mb-2">
            <FaBookOpen size={30} className="mt-2" />
            <h2 className="px-4 font-bold">Education</h2>
          </div>
          <menu>
            <ul>
              <li>
                <div className="flex px-3 py-3 border-b-2">
                  <FaRegDotCircle className="mt-1" />
                  <h3 className="ml-3 font-bold">Army Public School</h3>
                </div>
                <h4 className="ml-10 text-yellow-500">High School 2016-2018</h4>
              </li>
              <li>
                <div className="flex px-3 py-3 border-b-2">
                  <FaRegDotCircle className="mt-1" />
                  <h4 className="ml-3 font-bold">St Francis College</h4>
                </div>
                <h3 className="ml-10 text-yellow-500">
                  Bachelors In Computer Applications 2021-2024
                </h3>
              </li>
            </ul>
          </menu>
          <div className="flex mt-8">
            <FaBookOpen size={30} className="mt-2" />
            <h2 className="px-4 font-bold">Experience</h2>
          </div>
          <menu>
            <ul>
              <li>
                <div className="flex px-3 py-3 border-b-2">
                  <FaRegDotCircle className="mt-1" />
                  <h3 className="ml-3 font-bold">
                    Full Stack Web Developer Intern at Xcel Corp
                  </h3>
                </div>
                <h4 className="ml-10 text-yellow-500">May 2024 – Jun 2024</h4>
                <p className="px-10 py-4">
                  • Worked with Django and React to build a Learning Management
                  System (LMS) • Collaborated with a team to design and
                  implement user-friendly interfaces • Performed code reviews
                  and provided constructive feedback to peers
                </p>
              </li>
              <li>
                <div className="flex px-3 py-3 border-b-2">
                  <FaRegDotCircle className="mt-1" />
                  <h4 className="ml-3 font-bold">
                    Full Stack Web Developer Intern at Princton Smart Engineers
                  </h4>
                </div>
                <h3 className="ml-10 text-yellow-500">jul 2024 – Aug 2024</h3>
                <p className="px-10 py-4">
                  • Developed features and fixed bugs for web applications using
                  Node.js and React • Integrated third-party APIs to enhance
                  application functionality • Implemented authentication and
                  authorization mechanisms
                </p>
              </li>
              <li>
                <div className="flex px-3 py-3 border-b-2">
                  <FaRegDotCircle className="mt-1" />
                  <h4 className="ml-3 font-bold">
                    AWS Intern re/start Skill Enhancement training
                  </h4>
                </div>
                <h3 className="ml-10 text-yellow-500">jul 2024 – Aug 2024</h3>
                <p className="px-10 py-4">
                  • Set up and maintained AWS infrastructure for various
                  projects • Automated deployment processes using AWS tools and
                  services • Worked on cost optimization strategies for cloud
                  resources
                </p>
              </li>
            </ul>
          </menu>
        </div>
        <h2 className="font-bold">My Skills</h2>
        <FaGripLines size={48} style={{ color: "gold" }} />
        <FloatingCard>
          <div className="lg:flex sm:px-20">
            <h3 className="px-3">Web Development 80%</h3>
            <progress value="80" max="100" />

            <h3 className="px-3">Graphic Design 80%</h3>
            <progress value="80" max="100" />

            <h3 className="px-3">Next js 60%</h3>
            <progress value="60" max="100" />
          </div>
        </FloatingCard>
        <h2 className="font-bold mt-8">Interships</h2>
        <FaGripLines size={48} style={{ color: "gold" }} />
        <div className="flex gap-8">
          <Card
            title="Xcel Corp"
            description="1 month internship at Xcel Corp"
            image={XcelCorp}
          />
          <Card
            title="Prinston Smart Engineers"
            description="1 month internship at Prinston Smart Engineers"
            image={Prinston}
          />
        </div>
        <h2 className="font-bold mt-8">Interships</h2>
        <FaGripLines size={48} style={{ color: "gold" }} />
        <div className="flex gap-8">
          <Card
            title="LinkedIn"
            description="Course Completion Certificate"
            image={GenerativeAi}
          />
          <Card
            title="Udemy"
            description="FullStack Course Completion Certificate"
            image={UdemyWeb}
          />
        </div>
      </div>
    </>
  );
}
