// 类

class Animal {
    // 属性
    public name: string; // 公开属性（默认）外部可访问
    protected height: number = 10.1; // 保护属性，只有子类和自己可以访问
    private weight: number = 1; // 私有属性，只有自己可以访问
    readonly ID: string = "123-456"; // 只读，只允许在构造函数中赋值
    age: number = 18; // 初始属性

    static readonly VERSION: string = "1.1.2"; // 静态属性，且不可变。默认可变

    // 类构造函数
    constructor(name: string) {
        this.name = name;
    }

    // 方法
    sayHi() {
        return `My name is ${this.name}`;
    }
}

const a = new Animal("Jack");
console.log(a.sayHi());
console.log(a.age);
console.log(Animal.VERSION);

console.log("----------");

// 继承
class Cat extends Animal {
    // 构造函数重载
    constructor(name: string) {
        super(name + "-Cat!");
    }

    // 方法重载
    sayHi(): string {
        return "妙，" + super.sayHi();
    }
}
const c = new Cat("浦西");
console.log(c.sayHi());

// getter, setter
class Person {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    set name(value: string) {
        console.log("setter " + value);
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

const peter = new Person("Peter");
console.log(peter.name);
peter.name = "Peter Wong";
console.log(peter.name);

console.log("----------");

// 抽象类，只能用来继承，不可实例化
abstract class Bird {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    // 抽象方法
    public abstract fly(): void;
}
