import Image from "next/image";
import Avatar from "../Avatar";
import style from "./cardPost.module.css";

export default function CardPost({ post }) {
  return (
    <article className={`${style.card}`}>
      <header className={`${style.header}`}>
        <div className={style.cardGeral}>
          <figure className={`${style.figure}`}>
            <Image
              src={post.cover || "/fallback-image.png"}
              width={438}
              height={133}
              className={`card-img-top ${style.cardImg}`}
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </div>
      </header>
      <section className={`${style.body}`}>
        <h2 className={`${style.h2}`}>{post.title}</h2>
        <p className={`${style.p}`}>{post.body}</p>
      </section>
      <footer className={`${style.footer}`}>
        {post.author ? (
          <Avatar imageSRC={post.author.avatar} name={post.author.name} />
        ) : (
          <p>Autor desconhecido</p>
        )}
      </footer>
    </article>
  );
}
