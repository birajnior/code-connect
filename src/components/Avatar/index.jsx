import Image from "next/image";
import style from "./avatar.module.css";

export default function Avatar({ name, imageSRC }) {
  return (
    <ul className={style.avatar}>
      <li>
        <Image
          src={imageSRC}
          width={32}
          height={32}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
}
Avatar;
