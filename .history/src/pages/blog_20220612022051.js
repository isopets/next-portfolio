const Blog = () => {
  return <h1>ブログページ</h1>;
};
export default Blog;
export async function getStaticProps() {
  const testText = "Next.jsポートフォリオサイト";
  return {
    props: {},
  };
}
