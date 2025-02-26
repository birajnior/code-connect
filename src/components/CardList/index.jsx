import logger from "@/logger";
import CardPost from "../CardPost";

async function getAllPosts() {
  try {
    const response = await fetch(
      "https://api-codeconnect.vercel.app/api/posts"
    );

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    // ✅ Pegando somente o array de posts
    if (!Array.isArray(data.posts)) {
      console.error("Resposta inesperada da API:", data);
      return [];
    }
    logger.info("Posts obtidos com sucesso");

    return data.posts; // Agora retorna o array corretamente
  } catch (error) {
    logger.error("Erro ao buscar os posts:", error);
    return [];
  }
}

export default async function CardList() {
  const posts = await getAllPosts();

  if (!Array.isArray(posts)) {
    console.error("Erro: posts não é um array", posts);
    return <p className="text-center">Erro ao carregar os posts.</p>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="col-12 col-md-6 col-lg-6 d-flex justify-content-center"
            >
              <CardPost title={post.title} cover={post.cover} post={post} />
            </div>
          ))}
      </div>
    </div>
  );
}
