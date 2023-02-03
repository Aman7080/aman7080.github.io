import Image from "next/image";
import heroImage from "@/../public/images/show.svg";
import style from "@/styles/Hero.module.css";

export default function Hero({ data }) {
  return (
    <div className={style.HeroContainer}>
      <div>
        <span>Hi there, I&apos;m </span>
        <h2>Aman Kumar </h2>
        <p>
          A Full Stack Web Developer, <br /> who loves creating unique, fast and
          awesome websites
          <br />
          keeping security in mind
        </p>
        <button>My Portfolio</button>
      </div>
      <div className={style.imageContainer}>
        <Image alt="" src={heroImage} priority="true" />
      </div>
    </div>
  );
}
