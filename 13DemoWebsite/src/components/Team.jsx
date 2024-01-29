import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold">Meet Team</h1>
        <div className="bg-yellow-400 py-1 w-[15%] rounded my-3"></div>
      </div>
      <div className="overflow-hidden text-center h-[60vh]">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="relative">
              <div className="flex justify-center items-center">
                <img src={d.img} alt="" className="h-[50vh] rounded-md" />
              </div>
              <div className="bg-black mx-[3vw] text-white rounded-lg hover:text-black hover:bg-yellow-500 duration-500 absolute top-[72%] leading-tight py-5">
                <h1 className="text-[2vw] font-bold">{d.name}</h1>
                <p className="text-[1vw] px-[1vw] font-semibold">{d.exe}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

const data = [
  {
    img: "https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Ram",
    exe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed.",
  },
  {
    img: "https://images.pexels.com/photos/6203497/pexels-photo-6203497.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shyam",
    exe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed.",
  },
  {
    img: "https://images.pexels.com/photos/15668552/pexels-photo-15668552/free-photo-of-cinematic-portrait-of-male-model-billy-dunston-doing-aquaman-cosplay-in-the-columbia-river-gorge-photo-by-portland-photographer-lance-reis-kickassdesigns-on-insta.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Hari",
    exe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed.",
  },
  {
    img: "https://images.pexels.com/photos/3946868/pexels-photo-3946868.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Gopal",
    exe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed.",
  },
];

export default Team;
