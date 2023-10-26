import { useState } from "react";

import { Home } from "./pages/Home";
import { Search } from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="max-w-[1250px] h-screen mx-auto flex flex-col gap-5 items-center px-10">
      <h1 className="font-bold text-center text-xl py-2 border-b w-full">
        Listado de Pokemon
      </h1>
      <header className="flex justify-start w-full">
        <Search />
      </header>
      <main className="w-full">
        <Home />
      </main>
    </section>
  );
}

export default App;
