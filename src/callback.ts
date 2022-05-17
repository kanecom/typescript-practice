function map(array: number[], callback: (num: number) => number): number[]{
    const result: number[] = [];
    for (const i of array) {
        result.push(callback(i));
    }
    return result;
}

const exampleData = [1, 1, 2, 3, 5, 8, 13];
const exampleResult = map(exampleData, (x) => x * 10);
console.log(exampleResult);
