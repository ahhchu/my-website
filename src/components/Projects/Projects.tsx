import githubIcon from "../../assets/github.png";
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

function isUrl(value?: string) {
  return !!value && (value.startsWith('http://') || value.startsWith('https://'));
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 text-left">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-neutral-200 p-4"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-32 w-full rounded-sm border border-neutral-200 object-contain bg-neutral-50"
              />
            ) : (
              <div className="mb-4 flex h-32 w-full items-center justify-center rounded-sm border border-dashed border-neutral-300 bg-neutral-50">
                <span className="text-sm font-medium text-neutral-400">
                  {project.title}
                </span>
              </div>
            )}

            <p className="text-base text-neutral-900">{project.title}</p>
            <p className="mt-1 text-sm text-neutral-600">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>

           <div className="mt-auto flex flex-col gap-2 border-t border-neutral-100 pt-4">
              {isUrl(project.link) ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit project site
                </a>
              ) : null}

              {isUrl(project.repo) ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 object-contain" />
                  View repo
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                  <img src={githubIcon} alt="" className="h-4 w-4 object-contain opacity-50" />
                  {project.repo ?? 'Repo coming soon'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;