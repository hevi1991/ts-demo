// ECMAScript 内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error("Opps...");
let d: Date = new Date();
let r: RegExp = /hello/g;

// DOM和BOM内置
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll("div");
document.addEventListener("click", function (ev: MouseEvent) {
    // Do sth
});


// 用 TypeScript 写 Node.js
/*
Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：

npm install @types/node --save-dev
*/