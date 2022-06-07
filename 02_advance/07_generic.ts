// 泛型
function createArray<T>(length: number, value: T): Array<T> {
    return Array(length).fill(value);
}

const arr = createArray<string>(10, "WHO");
console.log(arr);
console.log("--------");

// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

// 泛型约束
/// 利用ts的鸭子类型
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

/// 泛型之间继承
function copyFields<T extends U, U>(target: T, source: U): T {
    for (const id in source) {
        //  T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
        target[id] = (source as T)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
x = copyFields(x, { b: 10, d: 20 });
console.log(x);

// 泛型接口
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
let createArrayGeneric: CreateArrayFunc<any>;
createArrayGeneric = function <T>(length: number, value: T): Array<T> {
    return new Array(length).fill(value);
};

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x: number, y: number): number => x + y;

// 泛型默认类型 ts version >= 2.3
function createArray3<T = string>(length: number, value: T): Array<T> {
    return new Array(length).fill(value);
}