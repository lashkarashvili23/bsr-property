import Header from "../components/Header";
import Search from "../components/Search";
import ViewAllSection from "../components/ViewAllSection";

export default function viewAll() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  p-0 bg-slate-100">
        <Header />
        <Search />
        <ViewAllSection />
      </main>
    </>
  );
}
