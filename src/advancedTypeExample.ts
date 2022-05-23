export const chapterName = "第6章 高度な型";

// ユニオン型
type Animal = {
    species: string;
};

type Human = {
    name: string;
};

type User = Animal | Human;

const tama: User = {
    species: "Felis silvestris catus"
};

const uhyo: User = {
    name: "uhyo"
};

// ERROR
// const book: User = {
//     title: "Software Design"
// }

// ERROR
// function getName(user: User): string {
//     return user.name;
// }