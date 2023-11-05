const icon = document.querySelector("#icon");
icon.addEventListener("click", ()=>{
    document.getElementById("popup").classList.toggle("active");
})

setInterval(() => {
    nextCard();
}, 3000);


let slideIndex = 0;
showCard(slideIndex);

function prevCard() {
    showCard(slideIndex -= 1);
}

function nextCard() {
    showCard(slideIndex += 1);
}

function showCard(index) {
    const cards = document.querySelectorAll('.card');
    
    if (index < 0) {
        slideIndex = cards.length - 1;
    }

    if (index >= cards.length) {
        slideIndex = 0;
    }

    cards.forEach(card => card.style.display = 'none');
    cards[slideIndex].style.display = 'block';
}



const value = localStorage.getItem(alert);
console.log(value);

