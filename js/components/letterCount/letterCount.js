

function letterCount (data) {
    let array = [];
    let count = 0;
    let letters = /^[a-z]+$/i;

    for (let i = 0; i < data.length; i++){
        array = data[i].innerHTML.split('');
        for(let j = 0; j < array.length; j++){
           if(letters.test(array[j])){
               count++
           }
           else {
               continue
           }
        }
    }
    return count;
}

export { letterCount }