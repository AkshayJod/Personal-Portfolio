import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Trip Planner",
      main: "Plan your trips with AI recommendations.",
      image: "https://picsum.photos/250/150?random=1",
    },
    {
      title: "FusionMeet",
      main: "A platform for video calling and screenshare.",
      image: "https://picsum.photos/250/150?random=2",
    },
    {
      title: "Weather App",
      main: "Real-time weather forecasts using APIs.",
      image: "https://picsum.photos/250/150?random=3",
    },
  ];

  return (
    <div
      id="Projects"
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#1e1e30] to-[#12122a] p-8"
    >
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-20 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div className="flex justify-center">
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              image={project.image}
              className="transform transition-all duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
