import { FaGripLines } from "react-icons/fa";
import CampGround from "../assets/Campground.jpg";
import FloatingCard from "./FloatingCard";
import Quiz from "../assets/Quiz.jpg";
import ProjectManager from "../assets/ProjectManager.jpg";
import portfolio from "../assets/Portfolio.jpg";
import Projects from "../Project";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <div className="px-4 sm:px-8 bg-stone-900 text-stone-50 rounded-l-xl">
        <div className="px-4 sm:px-9 py-3">
          <div className="flex">
            <h1 className="px-3 pb-4 font-bold mb-3 mt-8 text-lg sm:text-xl md:text-2xl">
              PortFolio
              <FaGripLines size={48} style={{ color: "gold" }} />
            </h1>
          </div>
        </div>

        <Card
          title="TrailHaven"
          description="Discover and book your perfect outdoor retreat with ease and convenience."
          image={CampGround}
        />
        <Card
          title="React Quiz"
          description="A dynamic React Quiz App to test and enhance your knowledge."
          image={Quiz}
        />
        <Card
          title="Portfolio"
          description="Showcasing my journey and creations in web development and design."
          image={portfolio}
        />
        <Card
          title="ProjectManager"
          description="Organizing and optimizing projects for seamless execution and success."
          image={ProjectManager}
        />
      </div>
    </>
  );
}
