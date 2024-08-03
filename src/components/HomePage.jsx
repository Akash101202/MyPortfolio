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
      <div className="flex flex-col md:flex-row px-4 md:px-8 mt-5 overflow-hidden">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5 mt-4 md:mt-0 md:ml-8">
          <MainComponent
            activeState={activeState}
            onHandleSelect={onHandleSelect}
          />
        </div>
      </div>
    </>
  );
}
