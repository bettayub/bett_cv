//  intro component
import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Bett Ayub</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">

            I'm a dedicated software engineer proficient in multiple languages, specializing in scalable applications. <br />
            Blending tech and entrepreneurship, I see software as a catalyst for innovation. <br />
            My strength lies in delivering top-quality code and collaborating in team environments. <br />
            I leverage software engineering strategically to drive business growth. <br />
            Seeking opportunities to innovate and contribute in software engineering. <br />
            For further engagement, please visit <br /> {' '}
            <a
               href="https://my-personal-website-sand.vercel.app/"
               target="_blank"
               className="text-cyan-600 hover:underline
      underline-offset-2 decoration-2
      decoration-blue-400"
               rel="noneferrer noopener"
            >
               my personal website.
            </a>
            {""}
         </p>
      </div>
   )
}

export default Intro;