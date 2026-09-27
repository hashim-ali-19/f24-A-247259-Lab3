let numbers = [2, 5, 9];

function getTotal(list) {
    let total = 0;

    for (let number of list) {
        total = total + number;
    }

    return total;
}

function getLargest(list) {
    let largest = list[0];

    for (let number of list) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(getTotal(numbers));
console.log(getLargest(numbers));