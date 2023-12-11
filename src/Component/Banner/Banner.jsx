import { FaDownload, FaPhone } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-center mt-2 mb-2 text-white">

      <img className="profile-picture w-48 h-48 rounded-full mb-4" src="https://i.ibb.co/1bcc9vN/seyam-removebg-preview.png" alt="Seyam's profile" />

      <div className="max-w-md">
        <h3 className="text-2xl mb-2">Hi, I am</h3>
        <h1 className="text-4xl font-bold my-2">Seyam</h1>
        <p className="mb-4">Crafting Digital Elegance: Join Me in Building Your Responsive and Unique Website.</p>
        <div className="flex flex-col space-y-4">
          <button className="btn btn-primary flex items-center space-x-2">
            <FaDownload className="text-white" />
            Download CV
          </button>
          <button className="btn btn-secondary flex items-center space-x-2">
            <FaPhone className="text-white" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
