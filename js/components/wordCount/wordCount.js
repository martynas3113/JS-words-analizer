

function wordCount (data) {
    let array = [];;
    let count = 0;
    for (let i =0; i < data.length; i++){
        array = data[i].innerHTML.split(' ')
        for(let j =0; j < array.length; j++){
        if(array[j].match(/^[A-Z]/i)){
        count++
        }
    }
    }
    return count;
}

export { wordCount }