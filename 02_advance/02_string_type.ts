// 字符串字面量类型
type EventNames = "click" | "scroll" | "mousemove";

function handleEvent(el: Element, event: EventNames) {
    // Do sth.
}

handleEvent(document.querySelector("#card1"), "click");
// handleEvent(document.querySelector("#card1"), "dbclick"); // Error: 类型“"dbclick"”的参数不能赋给类型“EventNames”的参数。

// 还可以是数字类型
type NumTypes = 1 | 2 | 3 | 4;
function logNum(n: NumTypes) {
    console.log(n);
}

logNum(1);
