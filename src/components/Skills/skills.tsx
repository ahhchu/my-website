import { skills } from '../../data/skills';

function SkillsSidebar() {
  return (
    <aside className="flex flex-row flex-wrap gap-8 sm:w-48 sm:shrink-0 sm:flex-col sm:gap-6">
      {skills.map((group) => (
        <div key={group.category}>
          <p className="mb-2 text-sm text-neutral-500">{group.category}</p>
          <ul className="flex flex-wrap gap-2 sm:flex-col sm:gap-1">
            {group.items.map((item) => (
              <li key={item} className="text-sm text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default SkillsSidebar;