var toggle_menu = document.querySelector('.menu2');
var menu = document.getElementById('menu');

toggle_menu.onclick= function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}


const olElement = document.querySelector(".mots");

const definition = document.querySelector(".definition");
let motChoisit = document.querySelector(".motchoisit");
const definir = document.querySelector(".definir");

const btn = document.querySelector(".btn");



fetch("../mots.json")
/*
.then(res => res.json())
.then(res => console.log(res))
*/
.then((response) => {
    return response.json();
})
.then((users) => {
    for ( const user of users) {
       const liElement = document.createElement("li");
       const aElement = document.createElement("a");
       const imgElement = document.createElement("img")
        aElement.innerText = user.mot;
        liElement.appendChild(aElement);
        olElement.appendChild(liElement);

        aElement.addEventListener('click', () => {
            olElement.style.display="none";
            definition.style.display="block";
            btn.style.display="block";
            motChoisit.innerText=user.mot;
            definir.innerText=user.indice;
        });

    }

});

btn.addEventListener('click', () => {
    olElement.style.display="block";
    definition.style.display="none";
    btn.style.display="none";
});
