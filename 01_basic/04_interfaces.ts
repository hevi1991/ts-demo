// 例子
interface Person {
    readonly id: number; // 只读
    name: string; // 基础属性
    age?: number; // 可选属性
    greet?(): void; // 可选方法
    [propName: string]: any; // 其他任意属性
}

let tom: Person = {
    id: 1, // 只读属性
    name: "Tom", // 基础属性
    // age: 12, // 可选属性
    gender: "male", // 任意属性
    address: "Road Seven", // 任意属性
};
