//import React from 'react';
import { headShot, blue, brown, green, pink } from "../../assets";

export default function Hero() {
  const navItems = [
    { label: 'About', href: '#about', icon: blue },
    { label: 'Work', href: '#work', icon: brown },
    { label: 'Projects', href: '#projects', icon: green },
    { label: 'Contact', href: '#contact', icon: pink },
  ];

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-12 px-4">
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative flex items-center justify-center">

          {/* CENTER: Headshot Image */}
          <div className="group relative h-56 w-56 overflow-hidden rounded-full border-4 border-neutral-300 bg-neutral-100 shadow-xl transition-transform duration-300 hover:scale-105 sm:h-72 sm:w-72">
            <img
              src={headShot}
              alt="Catherine Chu"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Top Left: About */}
          <a
            href="#about"
           className="font-zodiak absolute -top-16 -left-40 sm:-top-24 sm:-left-56 flex flex-col items-center gap-1 group"
          >
            <img
                src={blue}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-110"
            />
            <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">About</span>
          </a>

          {/* Top Right: Work */}
          <a
            href="#work"
            className="font-zodiak absolute -top-16 -right-40 sm:-top-24 sm:-right-56 flex flex-col items-center gap-1 group"
          >
            <img
                src={brown}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-110"
            />
            <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">Work</span>
          </a>

          {/* Bottom Left: Projects */}
          <a
            href="#projects"
            className="font-zodiak absolute -bottom-16 -left-40 sm:-bottom-24 sm:-left-56 flex flex-col items-center gap-1 group"
          >
            <img
                src={green}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-110"
            />
            <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">Projects</span>
          </a> 

          {/* Bottom Right: Contact */}
          <a
            href="#contact"
            className="font-zodiak absolute -bottom-16 -right-40 sm:-bottom-24 sm:-right-56 flex flex-col items-center gap-1 group"
          >
            <img
                src={pink}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-110"
            />
            <span className="text-sm font-semibold text-neutral-600 group-hover:text-neutral-900">Contact</span>
          </a>
        </div>

        {/* Hero Title / Intro */}
        <div className="mt-6 text-center">
          <h1 className="font-comico text-4xl tracking-tight text-neutral-900 sm:text-5xl">
            Catherine Chu
          </h1>
          <p className="font-zodiak font-bold mt-2 text-lg text-neutral-600">
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}