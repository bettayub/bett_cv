//  intro component
import React from 'react'; 

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Bett Ayub</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         I am a dedicated software engineer with a strong background in designing
        scalable applications and proficiency in multiple programming languages.
        Positioned at the intersection of technology and entrepreneurship, I
        possess a keen entrepreneurial spirit, viewing software development not
        just as a technical endeavor but as a catalyst for innovation and
        business advancement. <br /> Committed to delivering high-quality code, I excel
        in collaborative team environments to address complex challenges.
        Through my experiences, I've demonstrated not only technical prowess but
        also a strategic mindset, leveraging software engineering as a powerful
        tool to drive business growth and create transformative solutions. I am
        actively seeking opportunities to contribute to and drive innovation in
        software engineering. For further engagement, please visit <br /> {' '} 
        <a
        href="https://bettayub.github.io/my-personal-website/"   
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