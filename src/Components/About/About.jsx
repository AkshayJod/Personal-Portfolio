import AboutImg from "../../assets/secondary.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex md:flex-row overflow-hidden items-center justify-between bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About</h2>
        <div className="space-y-6 md:space-y-8">
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-indigo-500" />
            <div className="w-96">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-md leading-tight text-gray-400">
                A front-end developer is a software professional who creates the user interface (UI) and user experience (UX) for websites and web applications.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-indigo-500" />
            <div className="w-96">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white">
                Database Developer
              </h3>
              <p className="text-sm md:text-md leading-tight text-gray-400">
                A database developer is an IT professional who creates and maintains databases to help organizations use data more effectively.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-indigo-500" />
            <div className="w-96">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white">
                Backend Developer
              </h3>
              <p className="text-sm md:text-md leading-tight text-gray-400">
                Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          className="md:h-80 rounded-lg shadow-md w-full object-cover"
          src={AboutImg}
          alt="About img"
        />
      </div>
    </div>
  );
};

export default About;
