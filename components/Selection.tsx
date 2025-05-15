import React from 'react';

function Selection() {
    return (
        <div className="min-h-screen bg-[#F2F9FF] flex flex-col items-center justify-center p-10 rounded-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                Choose Your Champions.
            </h2>
            <p className="max-w-xl text-center text-lg text-gray-700 mb-12 leading-relaxed px-4">
                Every legend starts with a single step — and a powerful team. Select your Pokémon and prepare to make history.
            </p>
            <div className="flex flex-row justify-center items-center space-x-8">
                <a href="https://pokemondb.net/pokedex/pikachu" target="_blank" rel="noopener noreferrer" aria-label="Pikachu">
                    <img
                        src="https://img.pokemondb.net/sprites/home/normal/pikachu-original-cap.png"
                        alt="Pikachu"
                       
                    />
                </a>
                <a href="https://pokemondb.net/pokedex/charmander" target="_blank" rel="noopener noreferrer" aria-label="Charmander">
                    <img
                        src="https://img.pokemondb.net/sprites/home/normal/charmander.png"
                        alt="Charmander"
                  
                    />
                </a>
                <a href="https://pokemondb.net/pokedex/squirtle" target="_blank" rel="noopener noreferrer" aria-label="Squirtle">
                    <img
                        src="https://img.pokemondb.net/sprites/home/normal/squirtle.png"
                        alt="Squirtle"
                        
                    />
                </a>
                <a href="https://pokemondb.net/pokedex/bulbasaur" target="_blank" rel="noopener noreferrer" aria-label="Bulbasaur">
                    <img
                        src="https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
                        alt="Bulbasaur"
                      
                    />
                </a>
            </div>
        </div>
    );
}

export default Selection;
