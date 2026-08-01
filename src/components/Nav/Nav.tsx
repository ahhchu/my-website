const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

function Nav() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <a href="#top" className="font-comico text-sm font-medium">
                    Catherine Chu
                </a>
                <ul className="flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="font-comico text-sm text-neutral-400 hover:text-neutral-100">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;