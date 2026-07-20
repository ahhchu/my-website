function Hero() {
    return (
        <section id="top" className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-4 text-sm text-neutral-500">Catherine Chu</p>
            <h1 className="max-w-2xl text-4xl font-medium leading-tight text-neutral-100">
                Full Stack Software Engineer
            </h1>
            <p className="mt-4 max-w-md text-base text-neutral-400">
                Full stack software engineer with client facing skills.
            </p>
            <div className="mt-8 flex gap-3">
                <a
                    href="#projects"
                    className="rounded-sm border border-neutral-100 px-4 py-2 text-sm text-neutral-100"
                >
                    View work
                </a>
                <a
                    href="#contact"
                    className="rounded-sm border border-neutral-700 px-4 py-2 text-sm text-neutral-300"
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
}

export default Hero;