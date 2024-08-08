const input = document.querySelector("#number");
const convert = document.querySelector("#convert-btn");
const output = document.querySelector("#output");
const outputBox = document.querySelector(".output-box");

const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

convert.addEventListener("click", () => {
    toRoman(input.value);
    outputBox.style.display = "block";
});

const toRoman = (number) => {
    number = parseInt(number);

    if (isNaN(number)) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (number < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (number > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    let romanStr = "";

    let romanValue = Object.keys(romanObj);
    romanValue.forEach(key => {
        while (number >= romanObj[key]) {
            romanStr += key;
            number -= romanObj[key];
        }
    });

    output.innerText = romanStr;
};
