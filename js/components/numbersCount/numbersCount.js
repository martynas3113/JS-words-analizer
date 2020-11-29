

function numbersCount (data) {
    let array = [];;
    let count = 0;
    const numbers = /^[0-9]+$/i
    for (let i =0; i < data.length; i++){
        array = data[i].innerHTML.split('');
        for (let j = 0;  j< array.length; j++) {
            if(numbers.test(array[j])) {
                count ++
            }
            else {
                continue
            }
            
        }
    }
    return count;
}

export { numbersCount };