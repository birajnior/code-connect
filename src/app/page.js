import CardList from "@/components/CardList/CardList";
import SearchBar from "@/components/SearchBar";
import posts from "@/data/posts";

export default function Home() {
  return (
    <main className="main">
      <SearchBar />
      <CardList posts={posts} />
    </main>
  );
}
