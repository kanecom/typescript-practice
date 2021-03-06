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

// インターセクション型
type Animal2 = {
    species: string;
    age: number;
}

type Human2 = Animal2 & {
    name: string;
}

const tama2: Animal2 = {
    species: "Felis silvestris catus",
    age: 3
};

const uhyo2: Human2 = {
    species: "Homo sapiens sapiens",
    age: 26,
    name: "uhyo"
};

type StringAndNumber = string & number;
// ERROR
// const neverCreated: StringAndNumber = "虚無";

// ERROR
// const cat1: Animal & string = "cat";

// オプチュナルチェイニング
function useMaybehuman(human: Human | undefined) {
    const age = human?.age;
    console.log(age);
}

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
    const timeOrUndefined = getTimeFunc?.().toString();
}

type User2 = {
    isAdult(): boolean;
}

function checkFprAdultUser(user: User2 | null) {
    if (user?.isAdult()) {
        console.log(user);
    }
}

// リテラル型
type FooString = "foo";
const fooString: FooString = "foo";

type One = 1;
const one: One = 1;

type True = true;
const t: True = true;

type Three = 3n;
const Three: Three = 3n;

// テンプレートリテラル型
function getHelloStr(): `Hello, ${string}!` {
    const rand = Math.random();
    if (rand < 0.3) {
        return "Hello, world!";
    } else if (rand < 0.6) {
        return "Hello, my world!";
    } else if (rand < 0.9) {
        // ERROR
        // return "Hello, world";
        return "Hello, JavaScript!";
    } else {
        // ERROR
        // return "Hell, world!";
        return "Hello, TypeScript!";
    }
}

// タグ付きユニオン (テクニック)
type AnimalWithTag = {
    tag: "animal";
    species: string;
}

type HumanWithTag = {
    tag: "human";
    name: string;
}

type UserWithTag = AnimalWithTag | HumanWithTag;

const hana: AnimalWithTag = {
    tag: "animal",
    species: "Felis silvestris catus"
};

const taro: HumanWithTag = {
    tag: "human",
    name: "taro"
}

// ERROR
// const alien: UserWithTag = {
//     tag: "alien",
//     name: "gray"
// }

function getUserName(user: UserWithTag) {
    if (user.tag === "human") {
        return user.name;
    } else {
        return "名無し";
    }
}

console.log(getUserName(taro));
console.log(getUserName(hana));

function getUserName2(user: UserWithTag) {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
    }
}

// lookup型
type Person = {
    type: "human";
    name: string;
    age: number;
};

function setAge(person: Person, age: Person["age"]) {
    return {
        ...person,
        age
    };
}

const jiro: Person = {
    type: "human",
    name: "jiro",
    age: 26
};

const jiro2 = setAge(jiro, 27);
console.log(jiro2);

// keyof型
type HumanKeys = keyof Human;
let key: HumanKeys = "name";
key = "age";
// ERROR
// key = "hoge";

const mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    const mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6
    };
}

console.log(convertUnits(5600, "m"));

//keyou, lookup型とジェネリクスの活用例
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const saburou: Human = {
    name: "saburou",
    age: 26
};

const saburouName = get(saburou, "name");
const saburouAge = get(saburou, "age");
