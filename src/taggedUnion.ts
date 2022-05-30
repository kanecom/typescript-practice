// Optionを実装
type hasType<T> = {
    tag: "hasType";
    value: T;
};

type noType = {
    tag: "noType"
};

type Option<T> = hasType<T> | noType;

const printNumber = (input: Option<number>) => {
    if (input.tag === "hasType") {
        console.log(input.value);
    }
};
