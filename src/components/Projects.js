import Image from "next/image";
import style from "@/styles/Project.module.css";
import StormBlazer from "@/../public/images/StormBlazer.png";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center md:mt-40 mt-20">
      <div>
        <div>
          <span className="md:tracking-wide text-base md:text-xl text-[#ff9e0c]">
            &quot; Elevating Web Experience: My Passion, My Drive &quot;
          </span>
        </div>
        <div className="m-4">
          <span className="md:text-3xl">My Project Gallery</span>
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col md:flex-row my-5 flex-wrap">
        <article className={style.projectItem}>
          <div>
            <Image alt="Projects" src={StormBlazer} fill={true} />
          </div>
        </article>
        <article className={style.projectItem}>
          <div>
            <Image alt="Projects" src={StormBlazer} fill={true} />
          </div>
        </article>
        <article className={style.projectItem}>
          <div>
            <Image alt="Projects" src={StormBlazer} fill={true} />
          </div>
        </article>
        <article className={style.projectItem}>
          <div>
            <Image alt="Projects" src={StormBlazer} fill={true} />
          </div>
        </article>
      </div>
    </div>
  );
}
