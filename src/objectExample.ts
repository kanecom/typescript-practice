// オブジェクトリテラル (型なし)
const obj = {
    foo: 555,
    bar: "文字列",
};

// オブジェクトリテラル (型なし、プロパティ名省略)
const age = 20;
const user = {
    name: "Bob",
    age,
};

// プロパティの読み取り
console.log(obj.foo);
console.log(user["name"]);

// computed property name
const propName = "foo";
const computedPropertyExample = {
    [propName]: 123,
};

// スプレッド構文
const obj1 = {
    bar: 456,
    baz: 789,
};

const obj2 = {
    foo: 123,
    ...obj1,
};

console.log(obj2);

// オブジェクトリテラル (型あり)
const typedObj: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    bar: "Hello world!",
};

// type文
type FooBarObj = {
    foo: number;
    bar: string;
};

const fooBarObj: FooBarObj = {
    foo: 123,
    bar: "Hello world!",
};

// interface
// 名前がかぶるのでJavaみたいな命名をしてしまった
interface IFooBar {
    foo: number;
    bar: string;
};

const fooBarObject: IFooBar = {
    foo: 123,
    bar: "xxx",
};

// オプショナルなプロパティ
type FooBarBazObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
};

const optionalObj1: FooBarBazObj = {
    foo: true,
    bar: true,
}

const optionalObj2: FooBarBazObj = {
    foo: true,
    bar: true,
    baz: 123,
}

//部分型
type Animal = {
    age: number,
};

type Human = {
    age: number,
    name: string,
};

const human: Human = {
    age: 26, name: "太郎"
};

const animal: Animal = human;

console.log(animal.age); // OK
// console.log(animal.name); //ERROR