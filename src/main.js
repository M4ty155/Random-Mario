import { saveInStorage, getWordList, wordlist  } from './storage.js'

let wordArray = []
let $list = document.querySelector(".show-list")
const $submit = document.getElementById('submit')
const $word = document.getElementById('word')

$submit.addEventListener('click', (e) => onSubmit(e))

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
    $list.innerHTML = ""
    for (let i = 0; i < wordArray.length; i++){
        $list.innerHTML += `<p>${wordArray[i]}</p>`
    }
}