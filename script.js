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

function getAboveFirst(list) {
    let count = 0;

    for (let i = 1; i < list.length; i++) {
        if (list[i] > list[0]) {
            count++;
        }
    }

    return count;
}

console.log(getTotal(numbers));
console.log(getLargest(numbers));
console.log(getAboveFirst(numbers));

document.querySelector("#show").addEventListener("click", function () {

    document.querySelector("#total").textContent = getTotal(numbers);
    document.querySelector("#big").textContent = getLargest(numbers);
    document.querySelector("#above").textContent = getAboveFirst(numbers);

});