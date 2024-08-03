import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function MainComponent({ activeState, onHandleSelect }) {
  return (
    <>
      <div className="">
        <Header activeState={activeState} onHandleSelect={onHandleSelect} />
        {activeState === "about" && <AboutMe />}
        {activeState === "resume" && <Resume />}
        {activeState === "portfolio" && <Portfolio />}
        {activeState === "contact" && <Contact />}
      </div>
    </>
  );
}
