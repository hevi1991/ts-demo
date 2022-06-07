// 类与接口
interface Alarm {
    alert(): void;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
    alert(): void {
        console.log("SecurityDoor alert");
    }
}

// 实现多个接口
interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    lightOn(): void {
        console.log("Car light on");
    }
    lightOff(): void {
        console.log("Car light off");
    }
    alert(): void {
        console.log("Car alert");
    }
}

// 接口继承
interface LightableAlerm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}

// 接口继承类，ts在创建类的时候，实际也创建了一份接口
class Point {
    x: number = 0;
    y: number = 0;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
interface Point3D extends Point {
    z: number;
}
const p3d: Point3D = { x: 1, y: 2, z: 3 };

// ts是鸭子类型
interface PointInterface {
    x: number;
    y: number;
}

function printPointInterface(point: PointInterface) {
    console.log(`x: ${point.x} | y: ${point.y}`);
}

const ori = new Point(2, 2);
printPointInterface(ori);
printPointInterface(p3d);
