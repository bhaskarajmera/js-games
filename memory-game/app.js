const imagesArray = [
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-creame',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-creame',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
]

imagesArray.sort(() => 0.5 - Math.random())

// console.log(imagesArray);

const imageGrid = document.querySelector('#grid')
// console.log(imageGrid);
let imageChoosen = [];
let imageChoosenIds = [];
const imagesWon = [];

function createBoard() {
    for (let i=0; i<imagesArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        imageGrid.appendChild(card)
        // console.log(card)
    }
}
createBoard()

function checkMatch() {
    
    const images = document.querySelectorAll('#grid img')
    const result = document.querySelector('#result')

    const optionOne = imageChoosenIds[0]
    const optionTwo = imageChoosenIds[1]

    if(optionOne == optionTwo) {
        images[optionOne].setAttribute('src', 'images/blank.png')
        images[optionTwo].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

    console.log('check for match');

    if (imageChoosen[0] == imageChoosen[1]) {
        alert('You found a Match!')
        images[optionOne].setAttribute('src', 'images/white.png')
        images[optionTwo].setAttribute('src', 'images/white.png')
        images[optionOne].removeEventListener('click', flipCard)
        images[optionTwo].removeEventListener('click', flipCard)
        imagesWon.push(imageChoosen);
    }
    else {
        images[optionOne].setAttribute('src', 'images/blank.png')
        images[optionTwo].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }

    result.textContent = imagesWon.length

    imageChoosen = []
    imageChoosenIds = []

    if (imagesWon.length == imagesArray.length/2) {
        result.textContent = 'Congratulations you found them all.'
    }

}

function flipCard() {

    // console.log(imagesArray);

    const imageId = this.getAttribute('data-id');
    // console.log(imagesArray[imageId].name);
    // console.log('clicked: ', imageId);
    
    imageChoosen.push(imagesArray[imageId].name);
    imageChoosenIds.push(imageId);
    this.setAttribute('src', imagesArray[imageId].img)

    if(imageChoosen.length === 2 ){
        setTimeout(checkMatch, 500)
    }
}