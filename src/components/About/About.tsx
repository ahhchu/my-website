function About() {
    return (
        <section id="about" className="mx-auto max-w-5xl border-t border-neutral-800 px-6 py-16">
            <p className="mb-8 text-sm text-neutral-500">About</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[140px_minmax(0,1fr)]">
                <div className="h-36 w-36 border border-dashed border-neutral-700" aria-hidden="true" />
                <div>
                    <p className="max-w-md text-base leading-relaxed text-neutral-300">
                        blurb blurb blurb blurb....
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;