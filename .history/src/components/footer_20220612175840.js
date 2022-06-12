import Link from "next/link";
import * as style from "../styles/common.module.scss";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://github.com/isopets/">
          <img src="/images/github.svg" alt="logo" />
        </a>
        <a href="https://www.linkedin.com/in/雄人-磯貝-59">
          <img src="/images/linkedin.svg" alt="logo" />
        </a>
        <a href="https://twitter.com/isopet_engineer">
          <img src="/images/twitter.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/facebook.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>©{new Date().getFullYear()} Yuto Isogai</p>
      </div>
    </footer>
  );
};

export default Footer;
