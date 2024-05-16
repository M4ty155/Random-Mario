export const wordlist = localStorage.getItem('wordlist') || []

export function getWordList(){
    let storedList = localStorage.setItem('wordlist')
    if (storedList == null){
        wordlist = []
    }
    else{
        wordlist = JSON.parse(storedList)
    }
    return wordlist
}

export function saveInStorage(wordlist){
    localStorage.setItem('wordlist', JSON.stringify(wordlist))
}