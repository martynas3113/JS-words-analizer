import { text } from './data/tekstaiData.js';
import { symbolCount } from './components/symbolsCount/symbolsCount.js';
import { paragCount } from './components/paragTotal/paragCount.js';
import { sentCount } from './components/sentenceCount/sentCount.js';
import { wordCount } from './components/wordCount/wordCount.js';
import { letterCount } from './components/letterCount/letterCount.js';
import { numbersCount } from './components/numbersCount/numbersCount.js';
import { upperCase } from './components/upperCase/upperCase.js';


function generatedHTML() {

const paragraphsDOM = document.querySelector('.paragraphs');
paragraphsDOM.innerHTML = paragCount(text)
const sentencesDOM = document.querySelector('.sentences');
sentencesDOM.innerHTML = sentCount(text)
const wordsDOM = document.querySelector('.words');
wordsDOM.innerHTML = wordCount(text)
const symbolsDOM = document.querySelector('.symbols');
symbolsDOM.innerHTML = symbolCount(text)
const lettersDOM = document.querySelector('.letters');
lettersDOM.innerHTML = letterCount(text)
const numbersDOM = document.querySelector('.numbers');
numbersDOM.innerHTML = numbersCount(text)
const uppercaseDOM = document.querySelector('.uppercase');
uppercaseDOM.innerHTML = upperCase(text)

}

export { generatedHTML }