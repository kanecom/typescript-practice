export const chapterName = "第6章 高度な型";

// ユニオン型
type Animal = {
    species: string;
    age: string;
};

type Human = {
    name: string;
    age: number;
};

type User = Animal | Human;

const tama: User = {
    species: "Felis silvestris catus",
    age: "永遠の17歳"
};

const uhyo: User = {
    name: "uhyo",
    age: 26
};

// ERROR
// const book: User = {
//     title: "Software Design"
// }

// ERROR
// function getName(user: User): string {
//     return user.name;
// }

function showAge(user: User) {
    const age = user.age; // string | number 型
    console.log(age);
}

type MysteryFunc =
    | ((str: string) => string)
    | ((str: string) => number);

function useFunc(func: MysteryFunc) {
    const result = func("uhyo"); // string | number 型
    console.log(result);
}
