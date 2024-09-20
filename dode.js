var imagen = document.getElementById("img");
var nome = document.getElementById("nome");
var btn = document.getElementById("btn")
var peso = document.getElementById("peso")
var poke = document.getElementById("poke")
var habi = document.getElementById("habi")
var altura = document.getElementById("altura")
var id = document.getElementById("id")
var pokedex = document.getElementById("pokedex")



document.getElementById("btn").addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value}/`, {
        method: "GET"
    })
    .then(result => result.json())
    .then(data => {
        imagen.src = data.sprites.front_default;
        peso.innerText = data.weight;
        poke.innerText = data.name;
        altura.innerHTML = data.height
        id.innerHTML = data.id
        pokedex.innerHTML = data.order
        
    })
    .catch(error => console.log(error));
});

