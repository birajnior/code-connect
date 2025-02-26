import CardPost from "../CardPost";
import posts from "@/data/posts";

export default function CardList({ posts }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        {posts.slice(0, 6).map((post, index) => (
          <div key={index} className="col-md-6 d-flex justify-content-center">
            <CardPost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
 