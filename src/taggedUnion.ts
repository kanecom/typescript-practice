// Optionを実装
type Some<T> = {
    tag: "some";
    value: T;
};

type None = {
    tag: "none"
};

type Option<T> = Some<T> | None;

const printNumber = (input: Option<number>) => {
    if (input.tag === "some") {
        console.log(input.value);
    }
};

const isSome = <T>(input: Option<T>): input is Some<T> => { return input.tag === "some" };

const mapOption = <T1, T2> (input: Option < T1 >, func: (value:T1) => T2) => {
    if (isSome(input)) {
        const value = func(input.value);
        return {
            ...input,
            value
        }
    }
    return input;
};

const doubleOperation = (obj: Option<number>) => mapOption(obj, x => x * 2);

const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(doubleOperation(four));
console.log(doubleOperation(nothing));
