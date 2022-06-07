// 方式一：声明数字数组类型
let fib: number[] = [1, 1, 2, 3, 5, 8];

// 数组泛型
let fibGenerics: Array<number> = [1, 1, 2, 3, 5];

// 方式三：接口表示数组（只要索引是数字类型时，值也必须是数字类型。一般不这么写）
interface NumberArray {
    [index: number]: number;
}

// 类数组
function factorials() {
    // 当作为类数组时，不可以直接用【方式一】声明，需要使用内置的 IArguments
    // let args: number[] = arguments; // Error: 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 26 项。
    // let args: IArguments = arguments;

    // 或者用【方式三】定义
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// any 在数组中的应用
let list: any[] = ["Man", "is", 18, "years", "old", { address: "Road Eleven" }];
