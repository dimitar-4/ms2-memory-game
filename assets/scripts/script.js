// Theme Buttons JS

function turnDay() {
    document.body.style.backgroundImage = "url('./assets/images/light-theme-bg.jpg')";
}
function turnNight() {
    document.body.style.backgroundImage = "url('./assets/images/dark-theme-bg.jpg')";
}

// Game JS

const cards = [
    {
        id: 1,
        name: "Toyota",
        imageSrc: "./assets/images/toyota-logo.png",
    },
    {
        id: 2,
        name: "Honda",
        imageSrc: "./assets/images/honda-logo.png",
    },
    {
        id: 3,
        name: "Subaru",
        imageSrc: "./assets/images/subaru-logo.png",
    },
    {
        id: 4,
        name: "Nissan",
        imageSrc: "./assets/images/nissan-logo.png",
    },
    {
        id: 5,
        name: "Mazda",
        imageSrc: "./assets/images/mazda-logo.png",
    },
    {
        id: 6,
        name: "Mitsubishi",
        imageSrc: "./assets/images/mitsubishi-logo.png",
    },
    {
        id: 7,
        name: "Suzuki",
        imageSrc: "./assets/images/suzuki-logo.png",
    },
    {
        id: 8,
        name: "Daihatsu",
        imageSrc: "./assets/images/daihatsu-logo.png",
    },
];
const cardsWithDuplicates = cards.concat(cards);
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var resultDisplay = {};
var seconds = 60;
var time;
document.addEventListener("DOMContentLoaded", () => {
    cardsWithDuplicates.sort(() => Math.random() - 0.5);
    const game = document.querySelector(".game");
    function initialiseGame() {
        for (let i = 0; i < cardsWithDuplicates.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "./assets/images/card-back.png");
            card.setAttribute("data-id", cardsWithDuplicates[i].id);
            card.addEventListener("click", flipCard);
            game.appendChild(card);
        }
    }
    
    // Matches
    
    function checkForMatch() {
        var cardMatch = document.querySelectorAll("img");
        const cardOneId = cardsChosenId[0];
        const cardTwoId = cardsChosenId[1];
        if (cardOneId !== cardTwoId) {
            cardsChosen[0].setAttribute("src", "./assets/images/card-back.png");
            cardsChosen[1].setAttribute("src", "./assets/images/card-back.png");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cards.length / 2) {
            resultDisplay.textContent = "YOU WIN!";
        }
    }
    
    // Flip Cards
    
    function flipCard() {
        var cardId = parseInt(this.dataset.id);
        cardsChosenId.push(cardId);
        cardsChosen.push(this);
        const imgSrc = cards.filter((obj) => {
            return obj.id === cardId;
        })[0].imageSrc;
        this.setAttribute("src", imgSrc);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    
    // Timer
    
    function countDown() {
        if (seconds < 60) {
            document.getElementById("timer").innerHTML = seconds;
        }
        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(time);
            alert("Time's Up. Play Again!");
        }
    }
    document.getElementById("gameboard").onclick = function () {
        if (!time) {
            time = window.setInterval(function () {
                countDown();
            }, 1000); 
        }
    };

    document.getElementById("timer").innerHTML = "1:00";
    
    initialiseGame();
});
