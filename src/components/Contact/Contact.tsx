import type { TypeContact } from '../../types';

const links: TypeContact[] = [
    { label: 'Email', href: 'mailto:catherinechu.cc@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/catherinechucc/' },
];

function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-5xl px-6 py-16 text-center"
        >
            <span className="font-zodiak mb-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-medium text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to new opportunities
            </span>
        <br/>
            <h2 className="font-comico mt-1 text-2xl font-semibold text-neutral-900 sm:text-3xl">
                Let's work together!
            </h2>

            <div className="mt-8 flex justify-center gap-6">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.label === 'Email' ? undefined : '_blank'}
                        rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                        className="font-zodiak text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-900"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;