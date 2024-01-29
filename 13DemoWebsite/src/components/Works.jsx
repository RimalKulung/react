import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <p className="text-yellow-400 text-2xl">Portfolio and Projects</p>
        <h1 className="text-8xl font-extrabold">Our Works</h1>
        <div className="bg-yellow-400 py-1 w-[15%] rounded my-3"></div>
        <div className="min-h-[50vh]mx-[10vw] flex">
            {data.map((d) => (
              <div className="">
                <img src={d.img} alt="" className="h-[30vw] px-[2vw] rounded-md" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

const data = [
  {
    img: "https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    img: "https://images.pexels.com/photos/11608639/pexels-photo-11608639.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    img: "https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    img: "https://images.pexels.com/photos/19899552/pexels-photo-19899552/free-photo-of-wanaka-tree-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

export default Services;
