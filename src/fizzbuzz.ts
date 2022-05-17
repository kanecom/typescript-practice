const getFizzBuzzString = (number: number): string => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    }
    return String(number);
};

const sequence = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return [...Array(length)].map((_, i) => i + start);
};

// 通常のFizzBuzz
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}

// 1行で出力するFizzBuzz
const array: string[] = [];

for (const i of sequence(1, 100)) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        array.push(String(i));
    } else {
        array.push(`${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}`);
    }
}

console.log(array.join(" "));