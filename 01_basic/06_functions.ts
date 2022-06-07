// 函数声明
function sum(x: number, y: number): number {
    // 返回数字类型
    return x + y;
}

// 函数表达式
// 注意别混淆了类型声明中的【=>】和ES6箭头函数的【=>】
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 接口定义函数
interface Sum {
    (x: number, y: number): number;
}
let sumInterface: Sum = function (x, y) {
    return x + y;
};

// 可选参数，注意可选参数必须在必选后面
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

// 参数默认值
function buildNameDefault(firstName: string = "Tomi", lastName: string): string {
    return buildName(firstName, lastName);
}

// 剩余参数
function push(array: any[], ...items: any[]) {
    array.push(...items);
}

// 函数重载
// 例如有个需求，根据传参类型，返回对应的参数类型结果
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    } else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}

let a = reverse("120");
console.log(a);
let b = reverse(120);
console.log(b);
