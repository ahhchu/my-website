import type {TypeContact} from '../../types';

const links: TypeContact[] = [
    { label: 'Email', href: 'mailto:you@example.com' },
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
];

function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-5xl border-t border-neutral-800 px-6 py-16 text-center"
        >
            <p className="text-base text-neutral-300">Open to new opportunities.</p>
            <div className="mt-4 flex justify-center gap-6">
                {links.map((link) => (
                    <a key={link.label} href={link.href} className="text-sm text-neutral-400 hover:text-neutral-100">
                        {link.label}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;