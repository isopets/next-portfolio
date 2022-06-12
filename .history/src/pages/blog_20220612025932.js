import matter from "gray-matter";
cconst Blog = (props) => {
    console.log(props)
    return (
        <div>
            <h1>ブログページ</h1>
            {props.blogs.map((blog, index) =>
                <div>       // 追加
                    <h3>{blog.frontmatter.title}</h3>       // 追加
                    <p>{blog.frontmatter.date}</p>       // 追加
                </div>       // 追加
            )}
        </div>
    )
}
export default Blog;
export async function getStaticProps() {
  const blogs = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        slug: slug,
      };
    });
    return data;
  })(require.context("../data", true, /\.md$/));
  return {
    props: {
        blog: blogs
    },
  };
}
