import VisitButton from "./ui/VisitButton";
import { projects } from "./data/projects";
import StackBadge from "./ui/StackBadge";

export default function Projects() {
  return (
    <article id="projects" className="flex flex-col w-full gap-2">
      <h2>Private projects</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col w-full justify-between gap-2 border border-gray-500/50 rounded-xl p-4 shadow-md"
          >
            <img
              className="w-full h-auto shadow-md p-2"
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
            />
            <p className="text-lg leading-5 font-semibold">{project.title}</p>
            <p className="text-xs font-semibold text-gray-500">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.stack.map((stack, index) => (
                <StackBadge key={index} label={stack} />
              ))}
            </div>
            <VisitButton
              url={project.url}
              label={`Visit ${project.title}`}
              marginTop={2}
            />
          </div>
        ))}
      </section>
    </article>
  );
}
