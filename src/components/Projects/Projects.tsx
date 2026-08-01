import { projects } from '../../data/projects';
import SkillsSidebar from '../Skills/skills';

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-8 text-sm text-neutral-500">Projects</p>
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="flex flex-col border border-neutral-800 p-4"
            >
              <div
                className="mb-4 h-32 w-full border border-dashed border-neutral-700"
                aria-hidden="true"
              />
              <p className="text-base text-neutral-100">{project.title}</p>
              <p className="mt-1 text-sm text-neutral-400">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-neutral-500">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <SkillsSidebar />
      </div>
    </section>
  );
}

export default Projects;