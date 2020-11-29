
let result = 0;
function symbolCount (data) {
    for(let i =0; i< data.length; i++){
        result+= data[i].innerHTML.length
    }
    return result
}
export { symbolCount }