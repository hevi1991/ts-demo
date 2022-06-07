// 枚举
enum Days {
    Sun = -1,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri = "F",
    Sat = "S",
}

// 手动设定枚举值后，递增值为1
console.log(Days.Sun);
console.log(Days.Tue);
console.log(Days.Fri); // 枚举值为字符串时，需要为每个枚举值设定值

/*
编译后的枚举长这样
var Days;
(function (Days) {
    Days[Days["Sun"] = -1] = "Sun";
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
    Days[Days["Thu"] = 3] = "Thu";
    Days["Fri"] = "F";
    Days["Sat"] = "S";
})(Days || (Days = {}));
*/

// 普通枚举可以包含计算
enum Color {
    Red,
    Green,
    Blue = "blue".length,
}

// 常数枚举，不可包含计算
const enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

console.log(Direction.UP); // 编译后，直接被替换成改常数

// 外部枚举
declare enum Sexual {
    MALE,
    FEMALE,
}
