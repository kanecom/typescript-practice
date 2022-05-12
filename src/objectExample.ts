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
