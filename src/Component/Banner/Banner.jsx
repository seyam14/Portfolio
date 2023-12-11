import { FaDownload, FaPhone } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="  sm:items-center mt-20 sm:flex-row  md:flex lg:flex items-center lg:justify-between text-center mt-2 mb-2 text-white">
      <div className=" max-w-md ">
        <h3 className=" text-3xl  mb-2">Hi, I am</h3>
        <h1 className=" text-5xl font-bold my-2">Seyam</h1>
        <p className=" mb-4">Crafting Digital Elegance: Join Me in Building Your Responsive and Unique Website.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://drive.google.com/file/d/1SznKKI-IfsWK1vATVSUc71swn_fKhQJR/view?usp=drive_link"><button className="btn btn-primary flex items-center space-x-2">
            <FaDownload className="text-white" />
            Download CV
          </button> </a>
          <button className="btn btn-secondary flex items-center space-x-2">
            <FaPhone className="text-white" />
            Contact
          </button>
        </div>
      </div>
      <img className="profile-picture w-72 rounded-full sm:ml-12 md:mr-12 lg:mr-16 " src="https://i.ibb.co/1bcc9vN/seyam-removebg-preview.png" alt="Seyam's profile" />
    </div>
  );
};

export default Banner;