import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <p className="text-yellow-400 text-2xl">What Clients Say</p>
        <h1 className="text-8xl font-extrabold">Testimonials</h1>
        <div className="bg-yellow-400 py-1 w-[15%] rounded my-3"></div>
        <div className="mx-[2vw] min-h-[50vh] flex flex-wrap justify-center">
            {clients.map((d) => (
              <div className="bg-[#1b1b1b] text-white rounded-md w-[35vw] m-[1vw]">
                <div className="p-[5vw] flex flex-col my-[1vw] justify-center items-start">
                  <div className="h-[60%]">
                    <p className="text-[1.2vw] font-semibold">
                      '{d.tesmonial}'
                    </p>
                  </div>
                  <div className="bg-yellow-500 py-1 w-full rounded-md my-[1vw]"></div>
                  <div className="h-40% flex">
                    <img src={d.img} alt="" className="h-[5vw] rounded-md" />
                    <div className="mx-[2vw]">
                      <h1 className="text-yellow-400 text-[2vw] font-bold">
                        {d.name}
                      </h1>
                      <p>{d.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

const clients = [
  {
    img: "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Ram",
    position: "Ceo of xyz",
    tesmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, neque unde ducimus at aperiam nihil. Fuga itaque natus nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos labore fuga eum. Vel error eligendi magnam id soluta nulla iure excepturi incidunt voluptatem, nihil fugiat in fugit earum consectetur?",
  },
  {
    img: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Hari",
    position: "Makeup arttist",
    tesmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, neque unde ducimus at aperiam nihil. Fuga itaque natus nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos labore fuga eum. Vel error eligendi magnam id soluta nulla iure excepturi incidunt voluptatem, nihil fugiat in fugit earum consectetur?",
  },
  {
    img: "https://images.pexels.com/photos/615369/pexels-photo-615369.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Gopal",
    position: "Dentist",
    tesmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, neque unde ducimus at aperiam nihil. Fuga itaque natus nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos labore fuga eum. Vel error eligendi magnam id soluta nulla iure excepturi incidunt voluptatem, nihil fugiat in fugit earum consectetur?",
  },
  {
    img: "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sita",
    position: "Dishwasher",
    tesmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, neque unde ducimus at aperiam nihil. Fuga itaque natus nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos labore fuga eum. Vel error eligendi magnam id soluta nulla iure excepturi incidunt voluptatem, nihil fugiat in fugit earum consectetur?",
  },
  {
    img: "https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Rita",
    position: "Pale",
    tesmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, neque unde ducimus at aperiam nihil. Fuga itaque natus nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos labore fuga eum. Vel error eligendi magnam id soluta nulla iure excepturi incidunt voluptatem, nihil fugiat in fugit earum consectetur?",
  },
];

export default Testimonials;
