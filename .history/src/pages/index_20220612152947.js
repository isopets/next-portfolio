import Link from "next/link";
import image from "next/image";
const Index = () => {
  return (
      <>
          <div>
              <div>
                  <h1>I'm Abe Hiroki!</h1>
                  <h3>JavaScript Developer</h3>
              </div>
          </div>
          <div>
              <div>
                  <div>
                      <h2>JavaScript Nerd</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of....</p>
                  </div>
                  <Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />   // 追加
              </div>
              <div>
                  <h2>Skills</h2>
export default Index;
