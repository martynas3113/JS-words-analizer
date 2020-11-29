let array = [];
let count = 0;
function sentCount (data) {
    for(let i = 0; i < data.length; i++) {
        array = data[i].innerHTML.split('')
        for(let j = 0; j<array.length;j++) {

            if(array[j] === '.') {
                count++
            }
            if(array[j] === '?') {
                count++
            }
            if(array[j] === '!') {
                count++
            }
        }

    }
    return count
} 
export {sentCount}