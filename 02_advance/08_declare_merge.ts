// 声明合并

// 函数合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    } else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}

// 接口合并，注意相同名称的属性类型必须相同
interface Alarm {
    price: number;
    version: string;
    alert(str: string): string;
}
interface Alarm {
    weight: number;
    // version: number; // 会报错
    alert(str: string, num: number): string; // 无法合并，会被覆盖
}
let a: Alarm = {
    price: 0,
    weight: 0,
    version: "0.0.0",
    alert: function (str: string): string {
        return "ALERT: " + str;
    },
};
