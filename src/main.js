import { saveInStorage, getWordList, wordlist  } from './storage.js'

let wordArray = []
let $list = document.querySelector(".show-list")
let $mainMenu = document.querySelector(".main-menu")
let $wordList = document.querySelector(".wordlist")
let $randommize = document.querySelector(".randomize")
let $buttonWordlist = document.getElementById("goToWordlist")

const $submit = document.getElementById('submit')
const $word = document.getElementById('word')
const $playButton = document.getElementById('play')

$wordList.style.display = "none"
$randommize.style.display = "none"

$submit.addEventListener('click', (e) => onSubmit(e))

$playButton.addEventListener('click', (e) =>{
    e.preventDefault()
    $mainMenu.style.display = "none"
    $wordList.style.display = "block"
    $randommize.style.display = "block"
})

$buttonWordlist.addEventListener('click', (e) => {
    $wordList.style.display = "none"
    $list.innerHTML = ""
    for (let i = 0; i < wordArray.length; i++){
        $list.innerHTML += `<p>${wordArray[i]} <button>Editar</button> <button>Borrar</button></p>`
    }
})

function onSubmit(e){
    e.preventDefault()
    console.log(wordArray)
    console.log(e)
    wordArray.push($word.value)
    saveInStorage(wordArray)
    console.log(wordArray)
    showList(wordArray)
}

function showList(wordArray){
    $word.value = ""
    $list.innerHTML = ""
    for (let i = 0; i < wordArray.length; i++){
        $list.innerHTML += `<p>${wordArray[i]}</p>`
    }
}