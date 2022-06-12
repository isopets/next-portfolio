const Blog = props => {
  console.log(props);
  return <h1>ブログページ</h1>;
};
export default Blog;
export async function getStaticProps() {
  const blogs = (context => {const keys = context.keys()})(require.context("../data", true, /\.md$/));
  return {
    props: {test: testText},
  };
}
