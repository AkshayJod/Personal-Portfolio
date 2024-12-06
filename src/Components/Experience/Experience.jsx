import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiRedis, SiMongodb, SiPostgresql, SiExpress, SiTypescript } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-12 text-center">Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Technology Icons */}
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaHtml5 color="#E34F26" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaCss3 color="#1572B6" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaReact color="#61DAFB" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaJs color="#F7DF1E" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaFigma color="#F24E1E" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <SiMongodb color="#47A248" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <SiRedis color="#FF4438" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaNodeJs color="#339933" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <SiExpress color="#000000" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <SiPostgresql color="#336791" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <FaDocker color="#2496ED" size={60} />
        </div>
        <div className="p-6 bg-zinc-950 flex justify-center items-center rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110">
          <SiTypescript color="#3178C6" size={60} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
