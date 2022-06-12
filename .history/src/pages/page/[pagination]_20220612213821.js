import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as style from "../../styles/index.module.scss";
import {getAllBlogs} from "../../utils/mdQueries";
import {getAllBlogs, blogsPerPage} from "../../utils/mdQueries";
const Blog = ({blogs}) => {
  return (
    <Layout>
      <Seo title="ブログ" description="これはブログページです" />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {blogs.map((blog, index) => {
            const {title, date, excerpt, image} = blog.frontmatter;
            return (
              <div key={index} className={style.blogCard}>
                <div className={style.textContainer}>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <p>{date}</p>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>Read More</a>
                  </Link>
                </div>
                <div className={style.cardImg}>
                  <Image
                    src={image}
                    alt="card-image"
                    height={300}
                    width={1000}
                    quality={90}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticPaths() {
    const { numberPages } = await getAllBlogs()

    let paths = []
    Array.from({ length: numberPages }).slice(0, 1).forEach((_, i) => paths.push(`/blog/page/${i + 2}`))

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps() {
  const {orderedBlogs} = await getAllBlogs();

  return {
    props: {
      blogs: orderedBlogs,
    },
  };
}
