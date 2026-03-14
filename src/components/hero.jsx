"use client"

import BlastText from "./utls/blasttext";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-[url('/hero-bg2.png')] 
        md:bg-[url('/hero-bg.png')]
        bg-cover bg-center bg-no-repeat
        px-4
      "
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <BlastText sparkClass="bg-gradient-to-r from-accent to-yellow-500">
            Debojyoti Ganguly
          </BlastText>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          A passionate developer and designer.
        </p>
      </div>
    </section>
  );
}