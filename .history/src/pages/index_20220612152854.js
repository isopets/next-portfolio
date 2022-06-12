import Link from "next/link";
import image from "next/i"
const Index = () => {
  return (
    <div>
      <h1 className={style.h1Text}> こんにちは </h1>
      <Link href="/contact">
        <a>Contactページへ移動</a>
      </Link>
    </div>
  );
};
export default Index;
