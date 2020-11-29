/*
*DARBAS SU TEKSTAIS
Turime teksta (gali buti keli paragrafai).
Jame yra sakiniu.
Isspausdinti lentele:
- kiek yra paragrafu
- kiek yra sakiniu
- kiek yra zodziu
- kiek yra tekstiniu simboliu (iskaitant tarpus)
- kiek yra raidziu
- kiek yra skaiciu
- kiek yra tikriniu zodziu (ivardziai (vardas, pavarde) ir vietovardziai)
*/


import { text } from './data/tekstaiData.js';
import { paragCount } from './components/paragTotal/paragCount.js';
import { sentCount } from './components/sentenceCount/sentCount.js';
import { symbolCount } from './components/symbolsCount/symbolsCount.js';
import { wordCount } from './components/wordCount/wordCount.js';
import { letterCount } from './components/letterCount/letterCount.js';
import { numbersCount } from './components/numbersCount/numbersCount.js';

console.log();

console.log(`Viso dokumente yra:
    paragrafai: ${paragCount(text)}
    sakiniai: ${sentCount(text)}
    zodziai: ${wordCount(text) }
    tekstiniai simboliai (iskaitant tarpus): ${symbolCount(text)} 
    raidziu: ${letterCount(text)}
    skaiciu: ${numbersCount(text)}
    tikriniu zodziu:  `);


