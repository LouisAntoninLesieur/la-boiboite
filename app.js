// Je veux faire en sorte que mon carré dont la class est square change de couleur lorsque mon bouton dont la class est btn-change-square-color est cliqué
// Je commence par récupérer mes deux éléments puis je vérifie que je les ai bien récupérés
const squareEl = document.querySelector('.square');
console.dir(squareEl);
const btnEl = document.querySelector('.btn-change-square-color');
console.dir(btnEl);

// Je veux écouter mon btnElement au click et je vérifie qu'il soit bien écouté
// Je veux que mon élément squareEl reset en blanc au click
btnEl.addEventListener('click', () => {
    squareEl.style.backgroundColor = '';
    console.log('je suis cliqué');
});

// Je veux créer une div dont la class est 'color-container' qui contienne deux carrés de couleur bleu et jaune, et je souhaite que cette div soit à la fin de mon body(avant le scitpt mais après les boutons)
// Je dois récupérer mon élément body
const bodyEl = document.querySelector('body');
console.dir(bodyEl);
// Je crée ma div dont la class sera color-container
const colorChoiceEl = document.createElement('div');
colorChoiceEl.classList.add('color-container')
bodyEl.append(colorChoiceEl);
console.dir(colorChoiceEl);
// Je veux que colorChoiceEl contienne deux carrés, un bleu et un jaune
// Je crée les deux carrés
const squareOne = document.createElement('div');
squareOne.classList.add('square-one');
const squareTwo = document.createElement('div');
squareTwo.classList.add('square-two');
colorChoiceEl.append(squareOne, squareTwo);
// Je veux maintenant qu'au click de squareOne ou squareTwo, squareEl prenne la couleur associée
// Je dois m'assurer d'écouter squareOne et squareTwo
// J'effectue un console.dir pour trouver où se cache la propriété de couleur associée à mes carrés

squareOne.addEventListener('click', () => {
    console.dir(squareOne);
    squareEl.style.backgroundColor = 'blue';
});
squareTwo.addEventListener('click', () => {
    console.dir(squareTwo);
    squareEl.style.backgroundColor = 'yellow';
});

// Je veux créer un troisième carré qui me permette de multiplier le nombre de carré blanc
// Je crée un carré avec dedans écrit '+1' dans colorChoiceEl
const squareThree = document.createElement('div');
const textSquareThree = document.createElement('p');
squareThree.classList.add('square-three');
textSquareThree.textContent = '+1';
colorChoiceEl.appendChild(squareThree);
squareThree.append(textSquareThree);
