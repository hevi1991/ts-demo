// 类型推断
// 与只定义不赋值不同，如果变量赋值之后，ts会进行类型推断

/* 
let myFav = "six";
myFav = 6; // 报错 error TS2322: Type 'number' is not assignable to type 'string'.
*/

/* 上面代码等于
let myFav: string = "six";
myFav = 6;
*/
