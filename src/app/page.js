import CardList from "@/components/CardList";
import SearchBar from "@/components/SearchBar";

export default function Home({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  return (
    <main className="main">
      <SearchBar />
      <CardList page={page} />
    </main>
  );
}
