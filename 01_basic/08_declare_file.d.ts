/**
 * # 声明文件作用仅仅是编码阶段，对外告知，不做值声明
 *
 * 声明文件格式：
 * 常用于全局引用之后，ts脚本不清楚的变量声明
 * example.d.ts (example的声明文件)
 *
 * 快速查找到对应的讲解：
 * - declare var 声明全局变量 【常用】
 * - declare function 声明全局方法
 * - declare class 声明全局类
 * - declare enum 声明全局枚举类型
 * - declare namespace 声明（含有子属性的）全局对象 【常用】
 * - interface 和 type 声明全局类型
 * - export 导出变量
 * - export namespace 导出（含有子属性的）对象
 * - export default ES6 默认导出
 * - export = commonjs 导出模块
 * - export as namespace UMD 库声明全局变量
 * - declare global 扩展全局变量
 * - declare module 扩展模块
 * - /// <reference /> 三斜线指令
 */

/// 声明变量
declare let $: (selector: string) => any;

// 声明枚举
declare enum IP {
    V4,
    V6,
}

/// 声明命名区域
declare namespace JQuery {
    function ajax(url: string, setting?: any): void;
    const version: number;
    enum EventType {
        CustomClick,
    }

    // 命名区域嵌套
    namespace fn {
        function extend(obj: any): void;
    }
}

// 三斜线指令，引入别的声明文件

// 自动生成声明文件
// 如果源码本来就是ts写的，在tsconfig.json中添加declaration可以在编译后自动生成
/*
{
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "lib",
        "declaration": true,
    }
}
 */
