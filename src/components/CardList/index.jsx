import logger from "@/logger";
import CardPost from "../CardPost";
import Pagination from "../Pagination";

async function getAllPosts(page = 1, limit = 6) {
  try {
    const response = await fetch(
      "https://api-codeconnect.vercel.app/api/posts",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.posts)) {
      console.error("Resposta inesperada da API:", data);
      return { posts: [], totalPages: 1 };
    }

    const totalPosts = data.posts.length;
    const totalPages = Math.ceil(totalPosts / limit);

    const startIndex = (page - 1) * limit;
    const paginatedPosts = data.posts.slice(startIndex, startIndex + limit);

    logger.info(`Posts da página ${page} obtidos com sucesso`);

    return { posts: paginatedPosts, totalPages };
  } catch (error) {
    logger.error("Erro ao buscar os posts:", error);
    return { posts: [], totalPages: 1 };
  }
}

export default async function CardList({ page }) {
  const { posts, totalPages } = await getAllPosts(page);

  if (!Array.isArray(posts)) {
    console.error("Erro: posts não é um array", posts);
    return <p className="text-center">Erro ao carregar os posts.</p>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-12 col-md-6 col-lg-6 d-flex justify-content-center"
          >
            <CardPost title={post.title} cover={post.cover} post={post} />
          </div>
        ))}
      </div>

      {/* Componente de Paginação */}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
