var puzzleItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function createPuzzle()
{
	document.getElementById('card-container').innerHTML = '';
	puzzleItems.forEach((i) => {
        let card = document.createElement("div");
        card.innerHTML = i;
        if (i % 2 == 0) {
            card.className = 'cards-item col-even';
        } else if(i % 3 == 0) {
            card.className = 'cards-item col-third';
        } else {
            card.className = 'cards-item col-odd';
        }
	    document.getElementById("card-container").appendChild(card);
    })
}

function shuffleCards() {
    puzzleItems.sort(() => .5 - Math.random());
    createPuzzle();
}

function sortCards() {
    puzzleItems.sort();
    createPuzzle();
}