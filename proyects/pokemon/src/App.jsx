import { Home } from "./pages/Home";
import { Search } from "./components/Search";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const { resetFilter, search } = usePokemon();

  return (
    <section className="max-w-[1250px] h-screen mx-auto flex flex-col gap-5 items-center px-10">
      <h1 className="font-bold text-center text-xl py-2 border-b w-full">
        Listado de Pokemon
      </h1>
      <header className="flex justify-start w-full gap-5">
        <Search />
        {search && (
          <button
            onClick={resetFilter}
            className="py-1.5 w-40 font-medium rounded-lg bg-blue-500"
          >
            Resetear busqueda
          </button>
        )}
      </header>
      <main className="w-full">
        <Home />
      </main>
    </section>
  );
}

export default App;
