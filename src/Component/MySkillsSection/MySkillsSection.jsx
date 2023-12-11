
import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MySkillsSection extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: -10,
      cssEase: "linear"
    };
    return (
      <div className="mx-10" id='skills'>
        <h2  className="text-center font-bold text-white text-4xl m-4">Skills</h2>
        <Slider {...settings}>
          <div>
            <img className="w-20 h-20" src="https://i.ibb.co/jfPvwbT/react.png" alt="" />
          </div>
          <div>
            <img className="w-20 h-20" src="https://i.ibb.co/XXHgrGk/tailwind-css.png" alt="" />
          </div>
          <div>
             <img  className="w-40 h-32" src="https://i.ibb.co/Hp2d0Sp/daisyui.png" alt="" />
          </div>
          <div>
             <img className="w-20 h-20" src="https://i.ibb.co/qrVfd70/nodejs.png" alt="" />
          </div>
          <div>
            <img className="w-20 h-20" src="https://i.ibb.co/QppTBKs/express-js.png" alt="" />
          </div>
          <div>
             <img className="w-20 h-20" src="https://i.ibb.co/jvvqh9d/mongodb.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}