// 类型断言
/**
 * 语法
 * ```
 * value as Type
 * or
 * <Type>value
 * ```
 */

// 使用场景：当联合类型的时候，只能访问其共有属性和方法，
// 这时，可以用类型断言，断言类型，来达到访问不同属性的作用。
// 断言，重在【断】，切勿滥用。
interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish): boolean {
    return typeof (animal as Fish).swim === "function";
}

let kitty: Cat = {
    name: "Kitty",
    run() {
        console.log(`${this.name} is running.`);
    },
};

console.log(`isFish: ${isFish(kitty)}`);

// 同样的需求，如果是用在类(class)，则更建议使用【instanceof】

/*
 * 将任何一个类型断言为any
 * 有时我们需要扩展一个类型，但是目前还是临时添加
 * 编译器会报错：类型“Window & typeof globalThis”上不存在属性“foo”。
 * window.foo = 1;
 * 临时附加：
 * (window as any).foo = 1;
 */

interface Animal {
    name: string;
}

interface Cat2 extends Animal {
    run(): void;
}

function testAnimal(animal: Animal) {
    return animal as Animal;
}

function testCat(cat: Cat) {
    return cat as Animal;
}

// 类型断言并不是类型转换
// 错误用法
function toBooleanWrong(sth: any): boolean {
    return sth as boolean;
}
// 应该直接使用转换
function toBoolean(sth: any): boolean {
    return Boolean(sth);
}

// 类型断言与泛型
/**
 * 例子
 * ```
 *
 * function getCacheData(key: string): any {
 *     return (window as any).cache[key];
 * }
 *
 * interface Cat {
 *     name: string;
 *     run(): void;
 * }
 *
 * const tom = getCacheData("tom") as Cat; // 使用的时候将any断言为Cat
 * tom.run();
 *
 * ```
 */

// 使用泛型转换
function getCacheData<T>(key: string): T {
    return (window as any).cache[key];
}

interface CatExampleGenericity {
    name: string;
    run(): void;
}

const tom = getCacheData<CatExampleGenericity>("Tom");
tom.run();