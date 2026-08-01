import type { ReactNode } from "react";

function Folder({
    id,
    label,
    tabOffset = 0,
    children,
}: {
    id?: string;
    label: string;
    tabOffset?: number;
    children: ReactNode;
}) {
    return (
        <div id={id} className="relative mx-auto max-w-5xl first:mt-0 px-6 text-left">
            <span
                className="absolute -top-[42px] z-10 w-56 text-center rounded-t-xl border border-b-0 border-neutral-200 bg-white px-6 py-3 text-base font-medium text-neutral-600"
                style={{ left: `${24 + tabOffset}px` }}
            >
                {label}
            </span>
            <div className="rounded-b-lg rounded-tr-lg border border-neutral-200 bg-white p-6 sm:p-10">
                {children}
            </div>
        </div>
    );
}

export default Folder;