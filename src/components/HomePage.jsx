import { useState } from "react";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";

export default function HomePage() {
  const [activeState, setActiveState] = useState("about");
  function onHandleSelect(section) {
    setActiveState(section);
  }
  return (
    <>
      <div className="px-8 overflow-hidden mt-5 ">
        <Sidebar />
        <div className="fixed-size-container">
          <MainComponent
            activeState={activeState}
            onHandleSelect={onHandleSelect}
          />
        </div>
      </div>
    </>
  );
}
