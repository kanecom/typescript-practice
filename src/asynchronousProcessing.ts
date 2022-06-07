export const chapterName = "第8章 非同期処理";

// 非同期処理の例としての setTimeout 関数の使用例
setTimeout(() => {
    console.log("タイマーが呼び出されました");
}, 3000);
console.log("タイマーを設定しました");

// Promise
import { readFile } from "fs/promises";

const p = readFile("uhyo.txt", "utf8");

p.then((data) => {
    console.log(data)
});
