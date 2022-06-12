import matter from "gray-ma"
const Blog = props => {
  console.log(props);
  return <h1>ブログページ</h1>;
};
export default Blog;
export async function getStaticProps() {
  const blogs = (context => {
    const keys = context.keys();
    const values = keys.map(context);
  })(require.context("../data", true, /\.md$/));
  return {
    props: {},
  };
}
