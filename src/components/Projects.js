import Image from "next/image";
import style from "@/styles/Project.module.css";
import StormBlazer from "@/../public/images/stormblazer.png";
import portfolio from "@/../public/images/portfolio.png";

export default function Projects() {
  const project = [
    {
      title: "StormBlazer : A personal blog",
      image: StormBlazer,
      url: "https://blog.stormblazer.com",
      description:
        "A personal blog made with Next.js as frontend and Sanity as CMS. Tailwind is used for Styling and is hosted on vercel.",
    },
    {
      title: "My Portfolio Website",
      image: portfolio,
      description:
        "This website is made with Next.js and is currently hosted on github, It offers both dark mode and light mode as per system setting.",
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center md:mt-40 mt-20"
    >
      <div>
        <div className="m-4">
          <span className="text-3xl md:text-5xl md:font-extrabold text-white">
            My Project Gallery
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col my-4 max-w-5xl">
        {project?.map((items, key) => (
          <article key={key} className={style.projectItem}>
            <div className=" relative md:w-[1000px] md:h-[400px] w-[300px] h-[240px] ">
              <Image
                className={style.image}
                alt={items.title}
                src={items.image}
                fill={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-end max-w-[400px] p-5">
              <span className=" text-lg md:text-2xl tracking-wider text-slate-100">
                {items.title}
              </span>
              <p className=" text-base mt-4 md:text-end text-center">
                {items.description}
              </p>
              {items?.url && (
                <div className="flex mt-5 dark:hover:text-[#ff9e0c] text-slate-100 hover:text-[#c63a3b]">
                  <a href={items?.url} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
