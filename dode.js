let id = 1;

function buscarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("imagem").src = data.sprites.front_default;
        document.getElementById("peso").innerText = data.weight;
        document.getElementById("altura").innerText = data.height;
        document.getElementById("poke").innerText = data.name;
        document.getElementById("id").innerText = data.id;
        document.getElementById("pokedex").innerText = data.order;
    })
    .catch(error => console.log(error));
}

document.getElementById("btnAvancar").addEventListener('click', () => {
    id++;  
    buscarPokemon(id);  
});

document.getElementById("btnVoltar").addEventListener('click', () => {
    if (id > 1) {  
        id--;
        buscarPokemon(id);  
    }
});

document.getElementById("buscar").addEventListener('input', (event) => {
    const inputValue = event.target.value;
    id = inputValue
    
    if (inputValue) {
        buscarPokemon(inputValue);  
    }
});


buscarPokemon(id);
