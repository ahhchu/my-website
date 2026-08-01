import { experience } from '../../data/experience';

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16" text-left>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200" />

        <ul className="space-y-10">
          {experience.map((entry) => (
            <li key={entry.id} className="relative pl-10">
              <div className="absolute left-0 top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-neutral-900 bg-white" />

              <p className="text-sm text-neutral-500">
                {entry.startDate}&ndash;{entry.endDate}
              </p>

              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {entry.role}
              </p>
              <p className="text-sm font-medium text-neutral-600">{entry.company}</p>

              {entry.highlights ? (
                <ul className="mt-3 max-w-2xl space-y-2">
                  {entry.highlights.map((h) => (
                    <li key={h.keyword} className="text-sm leading-relaxed text-neutral-700">
                      <span className="font-semibold text-neutral-900">{h.keyword}:</span>{' '}
                      {h.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
                  {entry.summary}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;