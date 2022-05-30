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
