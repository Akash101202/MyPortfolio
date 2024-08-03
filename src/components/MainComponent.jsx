import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function MainComponent({ activeState, onHandleSelect }) {
  return (
    <>
      <div className="w-full p-4 md:p-8">
        <Header activeState={activeState} onHandleSelect={onHandleSelect} />
        <div className="mt-4">
          {activeState === "about" && <AboutMe />}
          {activeState === "resume" && <Resume />}
          {activeState === "portfolio" && <Portfolio />}
          {activeState === "contact" && <Contact />}
        </div>
      </div>
    </>
  );
}
