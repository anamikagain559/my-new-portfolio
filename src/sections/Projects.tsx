import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";


// Portfolio projects data
// This data can be fetched from an API or a database in a real-world application
// For this example, we are using static data
// You can replace this with your own data or fetch it from an API
// The data structure is an array of objects, each representing a project
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <div>
    <div className="container">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real-world Results</p>
      <h2>Featured Project</h2>
      <p>See how I transformed concepts into engaging digital experiences.</p>
      <div>
        {portfolioProjects.map(project=>(
          <div key={project.title}>
            <div>
              <span>{project.company}</span>
              <span>{project.year}</span>

            </div>
            <h3>{project.title}</h3>
            <hr />
            <ul>
              {project.results.map((result, index) => (
                <li key={index}>{result.title}</li>
              ))}
            </ul>
         <a href={project.link}>
             <button>View Live Site</button>
         </a>
         <Image src={project.image} alt={project.title} />
            </div>
        ))}
      </div>
    </div>
  </div>;
};
