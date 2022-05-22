export const chapterName = "第4章 TypeScriptの関数";

// 関数宣言
function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++){
        result.push(i)
    }
    return result;
}

console.log(range(5, 10));

// 関数式
type Person = {
    height: number;
    weight: number;
};

const calcBMI = function (person: Person): number {
    return person.weight / person.height ** 2;  
};

const person: Person = { height: 1.84, weight: 72 };
console.log(calcBMI(person));

// アロー関数
const calcBMIArrow = ({ height, weight }: Person): number => { 
    return weight / height ** 2;
};

console.log(calcBMIArrow(person));

// 可変長引数
const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const nums = [10, 11, 12];
console.log(sum(...nums));

// オプショナルな引数

const toLowerOrUpper = (str: string, isUpper?: boolean, isLower: boolean = false): string => {
    if (isUpper) {
        return str.toUpperCase();
    } else if (isLower) {
        return str.toLowerCase();
    } else {
        return str;
    }
};

console.log(toLowerOrUpper("Hello", true, false));
console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", true));

// ジェネリクス
function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element)
    }
    return result;
}

console.log(repeat<string>("a", 5));
console.log(repeat<number>(123, 3));

// 関数名がない場合の型引数リストの書き方
const repeatNoName = function <T>(element: T, length: number): T[]{
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element)
    }
    return result;
}

// アロー関数の型引数リストの書き方
const repeatArrow = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element)
    }
    return result;
}

// 型引数を省略して呼び出す
console.log(repeat("a", 5));
