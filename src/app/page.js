import CardList from "@/components/CardList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="main">
      <SearchBar />
      <CardList />
    </main>
  );
}
