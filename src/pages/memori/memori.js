import "./memori.css";



/* let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

 export const initMemoryGame = (divApp) => {
    divApp.innerHTML = ``;
    const divMemoryGame = document.getElementById('app');
    const symbols = ['https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/lengua.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/sonriente.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/feo.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/ganglio.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/loco.jpg','https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/lengua.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/sonriente.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/feo.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/ganglio.jpg', 'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/loco.jpg'];
    const cards = symbols.concat(symbols);
    cards.sort(() => Math.random() - 0.5);
    

    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.framework = symbol;

        const frontFace = document.createElement('img');
        frontFace.classList.add('front-face');
        frontFace.src = symbol;
        frontFace.alt = 'Jacobito';

        const backFace = document.createElement('img');
        backFace.classList.add('back-face');
        backFace.src = 'https://comicstores.es/imagenes_grandes/4251715/425171540979.JPG';
        backFace.alt = 'Card';

        card.appendChild(frontFace);
        card.appendChild(backFace);

        divMemoryGame.appendChild(card);

        card.addEventListener('click', flipCard);
    });
}

const flipCard = function() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    checkForMatch();
}

const checkForMatch = () => {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

const unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

const resetBoard = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

 */

/* let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const symbols = [
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/lengua.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/sonriente.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/feo.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/ganglio.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/loco.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/lengua.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/sonriente.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/feo.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/ganglio.jpg',
    'https://res.cloudinary.com/djjhsxctx/image/upload/v1712168881/jacobito/loco.jpg'
];

export const initMemoryGame = (divApp) => {
    divApp.innerHTML = ``;
    const divMemoryGame = document.getElementById('app');
    const backFaceUrl = 'https://comicstores.es/imagenes_grandes/4251715/425171540979.JPG';

    symbols.sort(() => Math.random() - 0.5);

    symbols.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.framework = symbol;

        const frontFace = document.createElement('img');
        frontFace.classList.add('front-face');
        frontFace.src = symbol;
        frontFace.alt = 'Jacobito';

        const backFace = document.createElement('img');
        backFace.classList.add('back-face');
        backFace.src = backFaceUrl;
        backFace.alt = 'Card';

        card.appendChild(frontFace);
        card.appendChild(backFace);

        divMemoryGame.appendChild(card);

        card.addEventListener('click', flipCard);
    });
}

const flipCard = function() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    checkForMatch();
}

const checkForMatch = () => {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

const unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

const resetBoard = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
 */

export const initializeMemoryGame = (place) => {
  const gameContainer = document.createElement('div');
  gameContainer.id = 'game-container';
  place.appendChild(gameContainer);

  const memoryGame = document.createElement('div');
  memoryGame.id = 'memory-game';
  gameContainer.appendChild(memoryGame);

  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = [...symbols, ...symbols];

  let flippedCount = 0;
  let isProcessing = false;
  let firstFlippedCard = null;

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const revealCard = (card) => {
    if (isProcessing || card.classList.contains('flipped') || card.classList.contains('matched')) {
      return;
    }

    card.classList.add('flipped');
    flippedCount++;

    if (flippedCount === 1) {
      firstFlippedCard = card;
    } else if (flippedCount === 2) {
      isProcessing = true;

      const secondFlippedCard = card;

      setTimeout(() => {
        if (firstFlippedCard.textContent === secondFlippedCard.textContent) {
          firstFlippedCard.classList.add('matched');
          secondFlippedCard.classList.add('matched');
        } else {
          firstFlippedCard.classList.remove('flipped');
          secondFlippedCard.classList.remove('flipped');
        }

        checkWin();
        flippedCount = 0;
        isProcessing = false;
        firstFlippedCard = null;
      }, 1000);
    }
  };

  const checkWin = () => {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
      alert('¡Has ganado!');
      resetGame();
    }
  };

  const resetGame = () => {
    memoryGame.innerHTML = '';
    startGame();
  };

  const startGame = () => {
    shuffleCards();

    for (let i = 0; i < cards.length; i++) {
      const symbol = cards[i];
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = symbol;
      card.addEventListener('click', () => revealCard(card));

      memoryGame.appendChild(card);
    }
  };

  startGame();
};