import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <About />
      {/* {<Projects />} */}
      <Contact />
    </div>
  )
}