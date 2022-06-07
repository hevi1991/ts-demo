// 联合类型
let myFav: string | number;
myFav = "five";
myFav = 5;
// 访问联合类型的属性或方法时，只能访问其类型共有的
function getString(sth: string | number): string {
    return sth.toString();
}
