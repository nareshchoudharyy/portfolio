import About from "@/components/About";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="px-5 md:px-0">
      <Intro />
      <div className="border-t-[0.5px] border-black dark:border-[#ffffff] w-full mb-10 md:mb-20 mx-auto" />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GetInTouch />
    </div>
  );
}