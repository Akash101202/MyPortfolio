import FloatingCard from "./FloatingCard";
import { FaGripLines } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";

export default function AboutMe({ onHandleSelect, activeState }) {
  return (
    <div className="px-4 sm:px-8 bg-stone-900 text-stone-50 rounded-l-xl">
      <div className="px-4 sm:px-9 py-3">
        <div className="flex">
          <h1 className="px-3 pb-4 font-bold mb-3 mt-8 text-lg sm:text-xl md:text-2xl">
            About Me
            <FaGripLines size={48} style={{ color: "gold" }} />
          </h1>
        </div>

        <p className="px-3 py-4 text-sm sm:text-base">
          Enthusiastic and detail-oriented Full Stack Web Developer with
          hands-on experience in building robust web applications using modern
          frameworks such as Django, React, and Node.js. Proficient in
          JavaScript, Python, and cloud technologies, with practical exposure to
          AWS infrastructure management. Adept at collaborating with
          cross-functional teams to design and implement scalable solutions,
          with a proven track record of developing user-friendly interfaces and
          integrating third-party APIs. Strong problem-solving skills,
          demonstrated through successful internships and projects, including a
          Learning Management System and a digital attendance system. Passionate
          about continuous learning and committed to delivering high-quality,
          maintainable code.
        </p>
        <h2 className="px-3 pb-4 font-bold mb-3 text-lg sm:text-xl md:text-2xl">
          What I'm Doing
          <FaGripLines size={48} style={{ color: "gold" }} />
        </h2>
      </div>
      <div className="ml-6 sm:ml-12">
        <div className="flex flex-col sm:flex-row gap-8 pb-3 card">
          <FloatingCard>
            <div className="flex gap-5">
              <FaLaptop size={48} style={{ color: "gold" }} />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Web Development
              </h2>
            </div>
            <p className="text-stone-400 px-6 sm:px-16 text-sm sm:text-base">
              "Crafting seamless web experiences with a blend of creativity and
              technical expertise."
            </p>
          </FloatingCard>
          <FloatingCard>
            <div className="flex gap-5">
              <RiNextjsFill size={48} style={{ color: "gold" }} />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Learning Next js
              </h2>
            </div>
            <p className="text-stone-400 px-6 sm:px-16 text-sm sm:text-base">
              "Building a robust and scalable web application using Next.js to
              server-side rendering and optimization"
            </p>
          </FloatingCard>
        </div>
      </div>
      <h2 className="px-3 pb-4 font-bold mb-3 mt-8 ml-6 sm:ml-8 text-lg sm:text-xl md:text-2xl">
        Other Interests
        <FaGripLines size={48} style={{ color: "gold" }} />
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 px-4 sm:px-8 py-8">
        <FloatingCard>
          <div className="flex gap-5">
            <FaGuitar size={48} style={{ color: "gold" }} />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Music
            </h2>
          </div>
          <p className="text-stone-400 px-6 sm:px-16 text-sm sm:text-base">
            "Music is my escape, my passion, and my creative outlet."
          </p>
        </FloatingCard>
        <FloatingCard>
          <div className="flex gap-5">
            <MdOutlineSportsHandball size={48} style={{ color: "gold" }} />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Reading
            </h2>
          </div>
          <p className="text-stone-400 px-6 sm:px-16 text-sm sm:text-base">
            "Books are my gateway to endless worlds and adventures."
          </p>
        </FloatingCard>
      </div>
      <h2 className="px-3 pb-4 font-bold mb-3 text-lg sm:text-xl md:text-2xl">
        Communication
        <FaGripLines size={48} style={{ color: "gold" }} />
      </h2>
      <div className="flex flex-col sm:flex-row items-center">
        <h3 className="px-3 pb-4 font-bold mb-3">English</h3>
        <progress className="w-full sm:w-1/4" value="90" max="100"></progress>
        <h3 className="px-3 pb-4 font-bold mb-3">Hindi</h3>
        <progress className="w-full sm:w-1/4" value="100" max="100"></progress>
        <h3 className="px-3 pb-4 font-bold mb-3">Malayalam</h3>
        <progress className="w-full sm:w-1/4" value="70" max="100"></progress>
        <h3 className="px-3 pb-4 font-bold mb-3">Tamil</h3>
        <progress className="w-full sm:w-1/4" value="70" max="100"></progress>
      </div>
    </div>
  );
}
