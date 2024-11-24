//import React from "react"
import PropTypes from "prop-types";

export const CardPokemon = ({ id, name, sprites = [] }) => {
  return (
    <>
      <p># {id}</p>
      <h1>{name}</h1>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </>
  );
};

CardPokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  sprites: PropTypes.array,
};
