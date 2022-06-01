import {useEffect, useState} from 'react';
import Lives from '../lives';
let randomWords = require('random-words');

export default function HangmanGame() {
   
    const [keyPressed, setKeyPressed] = useState()
    const [word, setWord] = useState()
    const [currentLives, setCurrentLives] = useState()

    //Save key press (uppercase) in the keyPressed useState
    useEffect(() => {
        document.addEventListener("keypress", (keyPress) => setKeyPressed(keyPress.key.toUpperCase()));
        newGame()
      }, []);

    function newGame(){
        setCurrentLives(5)
        resetLetters("letter")
        generateRandomWord()
    }
    
    function resetLetters(letter){
        let className = document.getElementsByClassName(letter)
        for(var i = 0; i < className.length; i++){
            className[i].innerHTML  = "___ "
        }
    }

    //List the elements for each letter in the array
    const generateRandomWord = () => {
        let randomWord = randomWords(1).toString().toUpperCase()
        let splitWord = randomWord.split('')
        setWord(splitWord)
      }

    function updateLives(){
        currentLives > 0 ? setCurrentLives(() => currentLives - 1) : setCurrentLives(() => null)
    }

    useEffect(() => {      
        let findClassByLetter = document.getElementsByClassName(keyPressed) 
        if(findClassByLetter.length > 0){
            for(var i = 0; i < findClassByLetter.length; i++){
                findClassByLetter[i].innerHTML  = keyPressed
            }
        } else {
           updateLives()
        }
      }, [keyPressed]);

    return (
      <div className="w-full h-full">
         {word ? word.map((letter) => <span className={`text-5xl letter ${letter}`} ></span>) : "PLEASE CLICK THE BUTTONS BELOW TO START" }
         <button className="bg-slate-300 text-black" onClick={newGame}>GENERATE</button>
         <Lives currentLives={currentLives} totalLives={6} score={0} />
      </div>
    );
  }