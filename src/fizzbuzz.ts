// 通常のFizzBuzz
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}

// 1行で出力するFizzBuzz
const array: string[] = [];

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        array.push(String(i));
    } else {
        array.push(`${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}`);
    }
}

console.log(array.join(" "));