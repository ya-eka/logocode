const array = ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];

function removeDuplicateNames(array) {
    let arrUp = [];
    let arrResult = [];
    let elementUp = '';  
    let elementNew = '';
    
    array.forEach(element => {
        elementUp = element.toLowerCase();
        arrUp.push(elementUp)      
    });

    arrUp.forEach(element => {
        elementNew = element;
        if (arrResult.includes(elementNew)) {

        }
        else {
            arrResult.push(elementNew);
        } 
    });

    return arrResult
}

console.log(removeDuplicateNames(array))