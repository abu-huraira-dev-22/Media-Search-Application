import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const disptach = useDispatch();
  const  activeTab= useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTab===elem?'bg-blue-700':'bg-gray-500')} transition px-5 rounded py-2 uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              disptach(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
