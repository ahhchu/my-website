//import React from 'react';
import { headShot, blue, brown, green, pink } from "../../assets";

export default function Hero() {
  const navItems = [
    { label: 'About', href: '#about', icon: blue, color: 'hover:text-amber-500 hover:border-amber-500/50' },
    { label: 'Work', href: '#experience', icon: brown, color: 'hover:text-blue-500 hover:border-blue-500/50' },
    { label: 'Projects', href: '#projects', icon: green, color: 'hover:text-emerald-500 hover:border-emerald-500/50' },
    { label: 'Contact', href: '#contact', icon: pink, color: 'hover:text-purple-500 hover:border-purple-500/50' },
  ];

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-12 px-4">
      {/* Background Decorative Rings
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="h-[320px] w-[320px] rounded-full border border-dashed border-neutral-400 sm:h-[450px] sm:w-[450px]" />
      </div> */}

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Center Container */}
        <div className="relative flex items-center justify-center">

          {/* CENTER: Headshot Image */}
          <div className="group relative h-44 w-44 overflow-hidden rounded-full border-4 border-neutral-900 bg-neutral-100 shadow-xl transition-transform duration-700 hover:scale-105 sm:h-56 sm:w-56">
            <img
              src={headShot}
              alt="Catherine Chu"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Top Left: About */}
          <a
            href="#about"
            className="font-zodiak absolute -top-4 -left-12 sm:-top-6 sm:-left-20 flex flex-col items-center gap-1 group"
          >
            <div className={`shadow-md transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-lg ${navItems[0].color}`}>
              <img src={navItems[0].icon} alt="" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">About</span>
          </a>

          {/* Top Right: Work */}
          <a
            href="#experience"
            className="font-zodiak absolute -top-4 -right-12 sm:-top-6 sm:-right-20 flex flex-col items-center gap-1 group"
          >
            <div className={`shadow-md transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-lg ${navItems[1].color}`}>
              <img src={navItems[1].icon} alt="" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">Work</span>
          </a>

          {/* Bottom Left: Projects */}
          <a
            href="#projects"
            className="font-zodiak absolute -bottom-4 -left-12 sm:-bottom-6 sm:-left-20 flex flex-col items-center gap-1 group"
          >
            <div className={`shadow-md transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-lg ${navItems[2].color}`}>
              <img src={navItems[2].icon} alt="" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">Projects</span>
          </a>

          {/* Bottom Right: Contact */}
          <a
            href="#contact"
            className="font-zodiak absolute -bottom-4 -right-12 sm:-bottom-6 sm:-right-20 flex flex-col items-center gap-1 group"
          >
            <div className={`shadow-md transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-lg ${navItems[3].color}`}>
              <img src={navItems[3].icon} alt="" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">Contact</span>
          </a>
        </div>

        {/* Hero Title / Intro */}
        <div className="mt-6 text-center">
          <h1 className="font-comico text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            Catherine Chu
        </h1>
          <p className="font-zodiak font-bold mt-2 text-base text-neutral-600"> 
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}