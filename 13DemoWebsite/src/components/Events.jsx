import React from "react";

function Events() {
  return (
    <div>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <p className="text-yellow-400 text-2xl">Upcoming</p>
        <h1 className="text-8xl font-extrabold">Digital Events</h1>
        <div className="bg-yellow-400 py-1 w-[15%] rounded my-3"></div>
        <div className="h-[90vh] w-full flex flex-col justify-center items-center">
          <div className="bg-yellow-400 py-1 w-[80%] rounded"></div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center px-[2vw] py-[1vw]">
              <h1 className="font-extrabold text-5xl">
                25 <br /> September
              </h1>
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, saepe!
              </p>
            </div>
            <button className="py-3 px-8 bg-yellow-400 rounded-3xl my-[2vw]">
              Details
            </button>
          </div>
          <div className="bg-yellow-400 py-1 w-[80%] rounded"></div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center px-[2vw] py-[1vw]">
              <h1 className="font-extrabold text-5xl">
                25 <br /> September
              </h1>
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, saepe!
              </p>
            </div>
            <button className="py-3 px-8 bg-yellow-400 rounded-3xl my-[2vw]">
              Details
            </button>
          </div>
          <div className="bg-yellow-400 py-1 w-[80%] rounded"></div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center px-[2vw] py-[1vw]">
              <h1 className="font-extrabold text-5xl">
                25 <br /> September
              </h1>
              <p className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, saepe!
              </p>
            </div>
            <button className="py-3 px-8 bg-yellow-400 rounded-3xl my-[2vw]">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





export default Events;
