import { CodeTerminal } from "@/components/main/code-terminal";
import { Contact } from "@/components/main/contact";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <CodeTerminal />
        <Skills />
        {/* <Encryption /> */}
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
