import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
 import { ProjectsSection } from "@/sections/Projects";
 import { AboutSection } from "@/sections/About";
 import { TapeSection } from "@/sections/Tape";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <AboutSection/>
      <TapeSection/>
      {/* Add more sections as needed */}
    </div>
  );
}
