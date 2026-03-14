"use client"

import { useState, useEffect } from "react";
import BlastText from "./utls/blasttext";
import Image from "next/image";

export default function About() {
    const [sparks, setSparks] = useState([]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const createSparks = () => {
        const count = 30;

        const newSparks = Array.from({ length: count }).map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 80 + 40;

            return {
                id: i,
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                size: Math.random() * 6 + 3,
                delay: Math.random() * 0.1,
            };
        });

        setSparks(newSparks);
        setTimeout(() => setSparks([]), 700);
    };

    return (
        <section
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center py-16 scroll-mt-24"
        >
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 px-4">
            
            {/* Image */}
            <div className="md:w-1/3 justify-center rounded-lg overflow-hidden hidden md:flex">
                <Image
                    src="/bustv3.png"
                    alt="Portrait"
                    width={450}
                    height={450}
                    className="object-contain"
                />
            </div>

            {/* About Text */}
            <div className="md:w-1/2 text-center flex flex-col md:text-left">
                <p className="text-lg">

                    {/* Mobile version */}
                    <span className="md:hidden">
                        I'm <span className="hover:text-accent transition-colors">Debojyoti Ganguly</span>, a developer and designer focused on creating clean, engaging digital experiences. 
                        I enjoy combining technical problem-solving with visual thinking to build interfaces that feel intuitive and purposeful.

                        <br /><br />

                        I spend much of my time experimenting with new technologies, exploring creative coding, and collaborating with other developers and designers.

                        <br /><br />

                        And remember — always pay{" "}
                        {isMobile ? (
                            <strong>ATTENTION</strong>
                        ) : (
                            <span onMouseEnter={createSparks}>
                                <BlastText>ATTENTION</BlastText>
                            </span>
                        )}
                        .
                    </span>


                    {/* Desktop version */}
                    <span className="hidden md:inline">
                        I'm <span className="hover:text-accent transition-colors">Debojyoti Ganguly</span>, a developer and designer who enjoys building thoughtful digital experiences.
                        My work exists at the intersection of creativity and technology, where I experiment with interfaces,
                        interaction, and visual systems to craft products that feel intuitive and engaging.

                        <br /><br />

                        I approach projects with both a technical mindset and a design-driven perspective.
                        This allows me to build experiences that are not only visually compelling but also reliable,
                        responsive, and purposeful. I enjoy translating complex ideas into simple, elegant solutions.

                        <br /><br />

                        Outside of projects, I explore emerging technologies, experiment with creative coding,
                        and collaborate with other designers and developers to exchange ideas and perspectives.

                        <br /><br />

                        And remember — always pay{" "}
                        <span onMouseEnter={createSparks}>
                            <BlastText>ATTENTION</BlastText>
                        </span>
                        .
                    </span>

                </p>
            <a href="/hero-bg2.png" target="_blank">
                <button className="border-accent border-2 rounded w-full m-4 py-1 hover:bg-accent transition-colors hover:text-background">
                    <span className="md:hidden">Resume</span>
                    <span className="hidden md:inline">Download Resume</span>
                </button>
            </a>
            </div>
        </div>

        {/* Interests Section */}

        <div className="w-full max-w-6xl mt-20 px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Other Interests</h3>

            <div className="grid md:grid-cols-3 gap-10">

                {/* Photography */}
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-xl font-semibold mb-3 hover:text-accent transition-colors">Photography</h4>

                    <p className="text-sm mb-6">
                        Photography helps me understand composition, lighting, and perspective.
                        Observing real-world visuals strengthens how I design digital layouts
                        and interfaces.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        <Image
                            src="/photo1.webp"
                            alt="Photography reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/photo2.jpg"
                            alt="Photography reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/photo3.webp"
                            alt="Photography reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/photo4.jpg"
                            alt="Photography reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                    </div>
                </div>

                {/* Music */}
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-xl font-semibold mb-3 hover:text-accent transition-colors">Music</h4>

                    <p className="text-sm mb-6">
                        Music influences how I think about rhythm, pacing, and emotional tone.
                        It often shapes the flow of my creative process, helping me focus while
                        designing or developing new ideas. The structure of sound and timing
                        inspires how I approach interaction and motion in digital experiences.
                    </p>
                </div>

                {/* Shader Crafting */}
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-xl font-semibold mb-3 hover:text-accent transition-colors">Shader Crafting</h4>

                    <p className="text-sm mb-6">
                        Shader crafting allows me to experiment with generative visuals,
                        procedural patterns, and real-time graphics. It combines programming
                        with visual exploration to create unique interactive visuals.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        <Image
                            src="/shader1.webp"
                            alt="Shader reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/shader2.webp"
                            alt="Shader reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/shader3.webp"
                            alt="Shader reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/shader4.webp"
                            alt="Shader reference"
                            width={300}
                            height={300}
                            className="rounded-md hover:scale-105 transition-transform cursor-pointer"
                        />
                    </div>
                </div>

            </div>
        </div>

        </section>
    );
}