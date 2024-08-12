import Header from "./components/Header";
import Search from "./components/Search";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-0 bg-slate-100">
      <Header />
      <Search />
      <MainSection />
    </main>
  );
}
