import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as style from "../../styles/index.module.scss";
import Pagination from "../../components/pagination";
import {getAllBlogs, blogsPerPage} from "../../utils/mdQueries";



export async function getStaticPaths() {
  const {numberPages} = await getAllBlogs();

  let paths = [];
  Array.from({length: numberPages})
    .slice(0, 1)
    .forEach((_, i) => paths.push(`/blog/page/${i + 2}`));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {orderedBlogs, numberPages} = await getAllBlogs();

  const currentPage = context.params.pagination;
  const limitedBlogs = orderedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return {
    props: {
      blogs: limitedBlogs,
      numberPages: numberPages,
    },
  };
}
