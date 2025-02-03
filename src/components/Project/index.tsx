"use client"; // Mark as a Client Component

import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    subtitle: "A cool project",
    image: "/images/project1.jpg",
  },
  {
    title: "Project 2",
    subtitle: "Another cool project",
    image: "/images/project2.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="parent-element py-16 bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">My Professional Project</h2>
        <p className="text-center text-4xl font-bold py-56 underline text-black dark:text-white">Hold On! this section is under maintenance</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.subtitle}
              </p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
