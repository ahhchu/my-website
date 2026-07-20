import { experience } from '../../data/experience';

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl border-t border-neutral-800 px-6 py-16">
      <p className="mb-8 text-sm text-neutral-500">Work experience</p>
      <ul>
        {experience.map((entry) => (
          <li
            key={entry.id}
            className="grid grid-cols-1 gap-1 border-b border-neutral-800 py-6 last:border-b-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6"
          >
            <span className="text-sm text-neutral-500">
              {entry.startDate}&ndash;{entry.endDate}
            </span>
            <div>
              <p className="text-base text-neutral-100">
                {entry.role} &middot; {entry.company}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{entry.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;