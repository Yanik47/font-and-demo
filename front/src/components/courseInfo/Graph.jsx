import React from "react";
import BackGr from "../../assets/deconstructed.svg";

function Graph({ graphData }) {
  const maxStepValue = Math.max(...graphData.steps.map((step) => step.Value));

  return (
    <div
      className="py-5"
    >
      <div className="rounded-lg shadow-lg mt-10 pb-4 mx-4 bg-white">
        <h1 className="font-bold text-lg md:text-2xl text-left pl-4 py-4">
          {graphData.GraphDescription}
        </h1>
        <div className="flex flex-col">
          {graphData.steps.map((step, index) => {
            const widthPercentage = (step.Value / maxStepValue) * 100;
            return (
              <div
                key={index}
                className="graph-step flex flex-row text-left py-2 items-center"
              >
                <div className="flex flex-col items-start">
                  <div className="px-3 w-1/3 font-bold text-left text-md md:text-lg">
                    {step.Name}
                  </div>
                  <div className="hidden md:block text-left px-3 ">
                    {step.Description}
                  </div>
                </div>
                <div className="w-full">
                  <div
                    className="rounded-lg pl-3 pr-2 py-2 items-center text-white"
                    style={{
                      width: `calc(${widthPercentage}% - 10px)`,
                      backgroundColor: step.Color,
                    }}
                  >
                    {step.Plotlabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Graph;
