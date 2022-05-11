/* 
1. slumpa en kombo av ett start/slutord och starta pussel
2. låta användaren mata in ett nytt ord där en bokstav är bytt
3. kontrollera att det envart är en bostkav som är bytt
4. kontrollera att det är ett korrekt engelskt ord mot API
5. Se om vi har vunnit.
 */

const puzzles = [ {startWord: "FOUR", endWord: "FIVE"}, 
{startWord: "EYE", endWord: "LID"},
{startWord: "TIGER", endWord: "ROSES"},
{startWord: "WHEAT", endWord: "BREAD"}]
let puzzle = {}
const changedWords = []; /* här sparas alla våra ändrade kort */

const startWordElem = document.querySelector("#start-word");
const endWordElem = document.querySelector("#end-word");
const inputElem = document.querySelector("#input-word")
const buttonElem = document.querySelector("#input-word")

function startGame() {
    /* slumpar en position i arrayen */
    const index = Math.floor(Math.random() * puzzles.length);
    const puzzle = puzzle[index];

    startWordElem.innerHTML = puzzle.startword;
    endWordElem.innerHTML = puzzle.endWord;
}

function onlyChangedOneLetter(newWord) {
    let changes = 0;
    
    for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] === puzzle.startWord[i]) {
            changes++;
            console.log("Nytt ord: ", newWord[i]);
            console.log("Start ord: ", puzzle.startWord[i]);
        }
    }

    if (changes < 1) {
        return false;
    } else {
        return true;
    }
}

async function isAEnglishWord(newWord) {
    const response = await fetch(`"https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}"`);

    const data = await JSON;
}

function hasWon(lastWord) {
    if (lastWord === puzzle.endWord) alert("Du vann!");
}

function 

buttonElem.addEventListener("click", () => {
    const newWord = inputElem.value;

    const correctChange = onlyChangedOneLetter(newWord)

    if (changedWords.length < 0) {
        const lastWord = changedWords [changedWords.length - 1] //plockar ut
        correctChange = onlyChangedOneLetter(newWord, lastWord);
    } else {
        correctChange = onlyChangedOneLetter(newWord, puzzle.startWord);
    }

    if (correctChange) {
        changedWords.push(newWord);
        console.log(changedWords);
    } else {
        console.log("Du fuskar!")
    }
    console.log(newWord);
})

startGame();