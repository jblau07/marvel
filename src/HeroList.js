import React from "react";

export const HeroList = ({ character }) => {
  if (character === null) {
    return (
      <div className="not-found">
        <h1>Character not found</h1>
      </div>
    )
  } else {

    return (
  
      <div className="characterCard">
        <h1>{character.name}</h1>
        <ul>
          { character.description }
        </ul>
      <div className="characterImage">
        <img src={character.image} />
      </div>
      </div>
    );
  }
}

export default HeroList;