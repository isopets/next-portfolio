const SingleBlog = () => {
  return <h1>記事ページ</h1>;
};

export default SingleBlog;
export async function getStaticPaths() {
    return {
        paths:
        fallback: false,
    }
}