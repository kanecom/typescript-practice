function map<T1, T2>(array: T1[], callback: (num: T1) => T2): T2[]{
    const result: T2[] = [];
    for (const i of array) {
        result.push(callback(i));
    }
    return result;
}

const exampleData = [1, 1, 2, 3, 5, 8, 13];
const exampleResult = map(exampleData, (x) => x * 10);
console.log(exampleResult);

const booleanResult = map(exampleData, (x) => x % 2 === 0);
console.log(booleanResult);
