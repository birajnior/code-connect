import style from "./aside.module.css";

export default function Aside() {
  return (
    <>
      <aside className={style.aside}>
        <img src="/Logo.svg" alt="Logo do Code Connecta" />
      </aside>
    </>
  );
}
