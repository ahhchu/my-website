import gradPhoto from "../../assets/gradPhoto.png";

const skills = [
    {
        title: "Frontend",
        body: "I love bringing design concepts to life. Experienced in TypeScript, React, accessible web design (WCAG)."
    },
    {
        title: "Backend & APIs",
        body: "Building stable platform foundations, writing RESTful APIs, and testing in Postman. Experienced in Python, Java, and SQL.",
    },
    {
        title: "Data Engineering",
        body: "Designing ETL/ELT pipelines with Python, SQL, and AWS to keep data flowing.",
    },
    {
        title: "Data Science & ML",
        body: "Hands-on with Python, R, and scikit-learn to build machine learning models that solve real problems.",
    },
];

const offline = [
    {
        title: "Novice Baker",
        body: "My latest bake is salt bread served with homemade guava lemon jam.",
    },
    {
        title: "Cat Lover",
        body: "I don't have a cat of my own yet, so I get my fix by volunteering with shelter cats",
    },
];


function About() {
    return (
        <section id="about" className="mx-auto max-w-5xl px-6 py-16 text-left">

            {/* Intro, with photo */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[220px_minmax(0,1fr)]">
                <img
                    src={gradPhoto}
                    alt="Photo of me"
                    className="w-56 h-auto border border-neutral-200"
                />
                <div>
                    <h2 className="mb-3 text-xl font-semibold text-neutral-900">
                         Hi! 안녕!
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
                      I build software because I love taking cool ideas and turning them into things people actually use.
                      I'm equally happy working on web components, backend architecture, or data pipelines—as long as I'm doing it alongside a team that 
                      values great communication and chit chat. I value understanding the business why behind every feature so we're building what truly matters.
                    </p>
                   <br />
                    <br />
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700">
                        <span className="font-semibold text-neutral-900">BS in CS</span> — UGA ('25)
                        <br />
                        <span className="font-semibold text-neutral-900">MS in CS (AI)</span> — Georgia Tech(Ongoing)
                    </p>
                </div>
            </div>

            {/* What I Bring to the Table — card grid */}
            <div className="mt-16">
                <h3 className="mb-6 text-lg font-semibold text-neutral-900">
                    What I Bring to the Table
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.title}
                            className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400"
                        >
                            <p className="mb-2 font-semibold text-neutral-900">
                                {skill.title}
                            </p>
                            <p className="text-sm leading-relaxed text-neutral-700">
                                {skill.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* When I'm Offline — card grid */}
            <div className="mt-16">
                <h3 className="mb-6 text-lg font-semibold text-neutral-900">
                    When I'm Offline
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {offline.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400"
                        >
                            <p className="mb-2 font-semibold text-neutral-900">
                                {item.title}
                            </p>
                            <p className="text-sm leading-relaxed text-neutral-700">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Let's Connect
            <div className="mt-16">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Let's Connect!
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-neutral-700">
                    I'm always excited to collaborate on cool projects, discuss new
                    tech, or swap your favorite baking recipes. Feel free to reach
                    out!
                </p>
            </div> */}
        </section>
    );
}

export default About;