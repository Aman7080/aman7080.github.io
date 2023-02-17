export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center md:mt-40 mt-20">
      <div>
        <div className=" m-4">
          <span className="text-3xl  md:text-5xl md:font-extrabold text-white">
            About Me
          </span>
        </div>
      </div>
      <div className=" max-w-[90%] md:max-w-[60%]">
        <p>
          I am a passionate learner currently diving deep into the world of full
          stack web development. I am fascinated by the endless possibilities
          that this field offers and I am constantly learning new technologies
          to stay ahead of the curve. My main focus at the moment is on
          mastering <code className=" leading-3 text-slate-50"> React, Express, Node, MongoDB </code>and other technologies that
          are crucial for building scalable and efficient web applications. I
          believe that staying up-to-date with the latest web development trends
          is crucial for success in this ever-evolving field. I am dedicated to
          honing my skills and continually improving my knowledge base. I am
          excited to use my skills to build innovative solutions that make a
          positive impact on the world. My ultimate goal is to become a
          well-rounded full stack developer who can take on any challenge thrown
          my way.
        </p>
        <div className="flex justify-evenly space-x-10 my-10">
          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />

          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />

          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
          />

          <img
            className=" w-14 h-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </div>
      </div>
    </div>
  );
}
