// "use client";
import CardPokemon from "@/components/CardPokemon";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=300");
  const firstData = data.results;

  return (
    <div className="container">
      <h1 className="page-title">Choose a pokemon</h1>
      <div id="contenedor">
        {firstData.map((el, i) => (
          <CardPokemon key={i} url={el.url} />
        ))}
      </div>
    </div>
  );
}
