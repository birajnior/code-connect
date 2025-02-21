import Image from "next/image";
import style from "./aside.module.css";
import logo from "./Logo.svg";
export default function Aside() {
  return (
    <>
      <aside className={style.aside}>
        <Image src={logo} className={style.img} alt="Logo do Code Connecta" />
      </aside>
    </>
  );
}
