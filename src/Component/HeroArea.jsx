import React from "react";

function HeroArea({count, resolveCount}) {

  return (
    <>
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex gap-10 flex-col md:flex-row m-4">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 flex rounded-2xl flex-col md:flex-row">
            <img
              src="./vector1.png"
              alt=""
              className="w-[200px] h-[300px] object-cover"
            />
            <div className="flex flex-col items-center justify-center w-[300px]  mx-auto">
              <h1 className="text-4xl font-medium w-[200px] text-center">
                In-Progress
              </h1>
              <span className="text-5xl font-bold py-3">{count}</span>
            </div>
            <img
              src="./vector.png"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
          </div>
          <div className=" bg-gradient-to-r from-green-400 to-teal-500 flex rounded-2xl flex-col md:flex-row">
            <img
              src="./vector1.png"
              alt=""
              className="w-[200px] h-[300px] object-cover"
            />
            <div className="flex flex-col items-center justify-center w-[300px] mx-auto">
              <h1 className="text-4xl font-medium w-[200px] text-center">
               Resolved
              </h1>
              <span className="text-5xl font-bold py-3">{resolveCount}</span>
            </div>
            <img
              src="./vector.png"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroArea;
