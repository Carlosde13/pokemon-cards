import React from "react";

async function getData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data;
}

async function page({ params }) {
  const data = await getData(params.id);
  console.log(data);

  return (
    <div className="container">
      <div className="info-card">
        <h1>Name: {data.name}</h1>
        <p>Base experience: {data.base_experience}</p>
        <p>Type: {data.types[0].type.name}</p>
        <p>Weight: {data.weight}</p>
        <p>Height: {data.height}</p>
        <p>First Move: {data.moves[0].move.name}</p>
        <div>
          <img src={data.sprites.front_default} alt="Front" />
          <img src={data.sprites.back_default} alt="Back" />
        </div>
      </div>
    </div>
  );
}

export default page;
