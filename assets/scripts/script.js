// Theme Buttons JS

function turnDay () {
            document.body.style.backgroundImage = "url('../assets/images/light-theme-bg.jpg')";
        }

function turnNight () {
            document.body.style.backgroundImage = "url('../assets/images/dark-theme-bg.jpg')";
        }

// Game JS

document.addEventListener("DOMContentLoaded", () => {
    const cards = [
    {
        name: "Toyota",
        imageSrc: "../assets/images/toyota-logo.png"
    },
    {
        name: "Honda",
        imageSrc: "../assets/images/honda-logo.png"
    },
    {
        name: "Subaru",
        imageSrc: "../assets/images/subaru-logo.png"
    },
    {
        name: "Nissan",
        imageSrc: "../assets/images/nissan-logo.png"
    },
    {
        name: "Mazda",
        imageSrc: "../assets/images/mazda-logo.png"
    },
    {
        name: "Mitsubishi",
        imageSrc: "../assets/images/mitsubishi-logo.png"
    },
    {
        name: "Suzuki",
        imageSrc: "../assets/images/suzuki-logo.png"
    },
    {
        name: "Daihatsu",
        imageSrc: "../assets/images/daihatsu-logo.png"
    },
    {
        name: "Toyota",
        imageSrc: "../assets/images/toyota-logo.png"
    },
    {
        name: "Honda",
        imageSrc: "../assets/images/honda-logo.png"
    },
    {
        name: "Subaru",
        imageSrc: "../assets/images/subaru-logo.png"
    },
    {
        name: "Nissan",
        imageSrc: "../assets/images/nissan-logo.png"
    },
    {
        name: "Mazda",
        imageSrc: "../assets/images/mazda-logo.png"
    },
    {
        name: "Mitsubishi",
        imageSrc: "../assets/images/mitsubishi-logo.png"
    },
    {
        name: "Suzuki",
        imageSrc: "../assets/images/suzuki-logo.png"
    },
    {
        name: "Daihatsu",
        imageSrc: "../assets/images/daihatsu-logo.png"
    }
];

cards.sort(() => Math.random() - 0.5);

const game = document.querySelector(".game");

var cardsChosen = [];

var cardsChosenId = [];

var cardsWon = [];

function gameBoard() {
    for (let i = 0; i < cards.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "../assets/images/card-back.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        game.appendChild(card)
    }
}

// Matches

function checkForMatch() {
    var cardMatch = document.querySelectorAll("img")
    const cardOneId = cardsChosenId[0];
    const cardTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cardMatch[cardOneId].setAttribute("src")
        cardMatch[cardTwoId].setAttribute("src")
        cardsWon.push(cardsChosen)
    } else {
        cardMatch[cardOneId].setAttribute("src", "../assets/images/card-back.png")
        cardMatch[cardTwoId].setAttribute("src", "../assets/images/card-back.png")
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cards.length/2) {
        resultDisplay.textContent = "YOU WIN!"
    }
}

// Flip Cards

function flipCard() {
    var cardId = this.getAttrubute("card-id");
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cards[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

gameBoard()
})

