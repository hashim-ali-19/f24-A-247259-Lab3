let numbers = [2, 5, 9];

function getTotal(list) {
    let total = 0;

    for (let number of list) {
        total = total + number;
    }

    return total;
}

console.log(getTotal(numbers));