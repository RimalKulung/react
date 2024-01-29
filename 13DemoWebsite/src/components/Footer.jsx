import React from "react";
import { FaSearch, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-fixed bg-cover">
        <p className="text-yellow-400 text-2xl">We develop digital future</p>
        <h1 className="text-8xl font-extrabold">Lets Talk?</h1>
        <div className="flex gap-[2vw] my-[3vw]">
          <button className="bg-yellow-400 px-[4vw] py-[1vw] rounded-full cursor-pointer text-[1.3vw] font-bold">
            9842867660
          </button>
          <button className="bg-black text-white px-[4vw] py-[1vw] rounded-full cursor-pointer text-[1.3vw] font-bold">
            Make an Enquiry
          </button>
        </div>
      </div>
      <div className="h-50vh bg-[#1b1b1b] text-white">
        <div className="flex justify-between p-[5vw]">
          <div className="mx-[3vw] w-[25%]">
            <h1 className="text-[5vw] font-bold">Rimal</h1>
            <p className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              maxime quisquam qui dolorem iste voluptates consequuntur omnis
              repudiandae optio deleniti.
            </p>
            <div className="flex gap-[1vw] py-3">
              <a href="">
                <FaFacebook className="text-[2vw]" />
              </a>
              <a href="">
                <FaLinkedin className="text-[2vw]" />
              </a>
              <a href="">
                <FaGithub className="text-[2vw]" />
              </a>
            </div>
          </div>
          <div className="w-[25%]">
            <h1 className="text-[2vw] font-bold">Quick Links</h1>
            <ul className="py-[1vw]">
              <li className="p-1 text-xl">
                <a href="">• Home</a>
              </li>
              <li className="p-1 text-xl">
                <a href="">• About</a>
              </li>
              <li className="p-1 text-xl">
                <a href="">• Services</a>
              </li>
              <li className="p-1 text-xl">
                <a href="">• Works</a>
              </li>
              <li className="p-1 text-xl">
                <a href="">• Team</a>
              </li>
            </ul>
          </div>
          <div className="w-[25%]">
            <h1 className="text-[2vw] font-bold py-3">Contach Info</h1>
            <p>Nepal, Kathmandu-New Baneshwor</p>
            <h1 className="text-3xl font-bold text-yellow-500 py-3">
              9842867660
            </h1>
            <p className="py-2">rimalklg@gmail.com</p>
            <div className="w-[70%] py-1 rounded-md bg-yellow-400 "></div>
          </div>
          <div className="w-[25%]">
            <h1 className="text-[2vw] font-bold">Subscribe</h1>
            <p className="py-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio necessitatibus, at neque nam sint consequatur ullam
              unde vel dolores nisi.
            </p>
            <div className="flex bg-white justify-center items-center rounded-full text-2xl focus:outline-none focus:border-none focus:ring">
              <input type="text" />
              <FaSearch className="text-black m-3 cursor-pointer" />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center py-5">

        <p> &#169; All rights reserved - 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
